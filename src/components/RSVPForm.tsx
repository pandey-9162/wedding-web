import React, { useState, useEffect } from 'react';
import { WeddingConfig } from '../config/wedding';
import { FloralGarland } from './decorations/FloralGarland';
import { CheckCircle2, AlertCircle, Send, Users, Download, Eye, Sparkles } from 'lucide-react';

interface RSVPFormProps {
  config: WeddingConfig;
  isHindi: boolean;
}

interface RSVPSubmission {
  id: string;
  guestName: string;
  attendance: 'attending' | 'declining';
  guestCount: number;
  selectedEvents: string[];
  dietaryPreference: string;
  message: string;
  submittedAt: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ config, isHindi }) => {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'declining'>('attending');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [selectedEvents, setSelectedEvents] = useState<string[]>(
    config.events.map((e) => e.id)
  );
  const [dietaryPreference, setDietaryPreference] = useState<string>(
    config.rsvp.dietaryOptions[0]?.id || ''
  );
  const [message, setMessage] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Dev mode RSVP storage viewer
  const [storedSubmissions, setStoredSubmissions] = useState<RSVPSubmission[]>([]);
  const [showAdminDrawer, setShowAdminDrawer] = useState(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem('udaipur_wedding_rsvps');
      if (existing) {
        setStoredSubmissions(JSON.parse(existing));
      }
    } catch {}
  }, []);

  const handleEventToggle = (eventId: string) => {
    setSelectedEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!guestName.trim()) {
      setErrorMsg(isHindi ? "कृपया अपना नाम दर्ज करें।" : "Please enter your full name.");
      return;
    }

    if (attendance === 'attending' && selectedEvents.length === 0) {
      setErrorMsg(isHindi ? "कृपया कम से कम एक कार्यक्रम चुनें।" : "Please select at least one ceremony you will attend.");
      return;
    }

    setSubmitting(true);

    const submission: RSVPSubmission = {
      id: `rsvp_${Date.now()}`,
      guestName: guestName.trim(),
      attendance,
      guestCount: attendance === 'attending' ? Number(guestCount) : 0,
      selectedEvents: attendance === 'attending' ? selectedEvents : [],
      dietaryPreference,
      message: message.trim(),
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // If a custom API endpoint is defined in weddingConfig, attempt real HTTP POST
    if (config.rsvp.endpointUrl) {
      try {
        const res = await fetch(config.rsvp.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
        });
        if (!res.ok) throw new Error('Network response was not ok');
      } catch {
        setErrorMsg(
          isHindi
            ? "सर्वर से कनेक्ट करने में असमर्थ। कृपया पुनः प्रयास करें या सीधे संपर्क करें।"
            : "Could not reach the RSVP server. Please try again or contact the concierge."
        );
        setSubmitting(false);
        return;
      }
    }

    // Save in browser persistence (with fallback so dev test works seamlessly)
    try {
      const updated = [submission, ...storedSubmissions];
      localStorage.setItem('udaipur_wedding_rsvps', JSON.stringify(updated));
      setStoredSubmissions(updated);
    } catch {}

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setGuestName('');
    setMessage('');
  };

  const exportCsv = () => {
    if (storedSubmissions.length === 0) return;
    const headers = ['ID', 'Guest Name', 'Status', 'Count', 'Events', 'Dietary', 'Message', 'Submitted At'];
    const rows = storedSubmissions.map((s) => [
      s.id,
      `"${s.guestName}"`,
      s.attendance,
      s.guestCount,
      `"${s.selectedEvents.join(', ')}"`,
      `"${s.dietaryPreference}"`,
      `"${s.message.replace(/"/g, '""')}"`,
      `"${s.submittedAt}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `udaipur_wedding_rsvps_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="rsvp" className="py-20 sm:py-28 bg-surface relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {isHindi ? "उपस्थिति एवं शुभकामनाएं" : "Respond Please"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? "कृपया अपनी उपस्थिति दर्ज करें" : "Join Our Celebrations"}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80">
            {isHindi
              ? `कृपया ${config.rsvp.deadlineHindi} तक अपनी स्वीकृति प्रदान करें। आपकी उपस्थिति हमारे लिए अनमोल है।`
              : `Kindly respond by ${config.rsvp.deadline}. Your gracious presence will multiply our joy.`}
          </p>
          <FloralGarland variant="lotus" />
        </div>

        {/* Development Mode Transparency Notice */}
        {!config.rsvp.endpointUrl && (
          <div className="mt-6 mb-8 p-3.5 bg-surface-2/60 rounded-xl border border-[#B89555]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-serif text-ink">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B89555]" />
              <span>
                <strong>RSVP Form Ready:</strong> Responses are securely stored locally. The couple can configure a webhook in <code>src/config/wedding.ts</code>.
              </span>
            </div>
            {storedSubmissions.length > 0 && (
              <button
                type="button"
                onClick={() => setShowAdminDrawer(!showAdminDrawer)}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface hover:bg-surface-card rounded-md border border-[#B89555]/40 text-maroon-text font-medium shrink-0"
              >
                <Eye className="w-3.5 h-3.5 text-[#B89555]" />
                <span>View {storedSubmissions.length} Responses</span>
              </button>
            )}
          </div>
        )}

        {/* Form Container */}
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-[#B89555]/40 shadow-lg relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#9DA98B]/20 text-maroon-text flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-maroon-text" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-text">
                {isHindi ? "हार्दिक धन्यवाद!" : "Thank You, Heartfelt Blessings Received!"}
              </h3>
              <p className="text-sm sm:text-base font-serif italic text-ink/85 max-w-md mx-auto">
                {attendance === 'attending'
                  ? isHindi
                    ? `प्रिय ${guestName}, हम उदयपुर में आपके स्वागत के लिए अत्यंत उत्सुक हैं!`
                    : `Dear ${guestName}, we are thrilled to celebrate with you in Udaipur!`
                  : isHindi
                    ? `प्रिय ${guestName}, हम आपकी अनुपस्थिति महसूस करेंगे, परंतु आपका प्रेम और आशीर्वाद सदा हमारे साथ रहेगा।`
                    : `Dear ${guestName}, we will miss you dearly, but your warm wishes mean the world to us.`}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-6 py-2.5 bg-surface hover:bg-surface-2 text-maroon-text border border-[#B89555]/50 rounded-full text-xs font-serif font-medium transition-colors"
                >
                  {isHindi ? "अन्य अतिथि की प्रविष्टि करें" : "Submit Another Response"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-serif flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Guest Full Name */}
              <div>
                <label className="block text-xs uppercase font-serif tracking-widest text-maroon-text font-semibold mb-2">
                  {isHindi ? "अतिथि का नाम *" : "Your Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder={isHindi ? "उदा. श्रीमती एवं श्री शर्मा" : "e.g. Mr. & Mrs. Sharma"}
                  className="w-full px-4 py-3 bg-surface border border-[#B89555]/40 rounded-xl text-sm font-serif text-ink focus:outline-none focus:ring-2 focus:ring-[#B89555] transition-all placeholder:text-ink/40"
                />
              </div>

              {/* Attendance Radio Selection */}
              <div>
                <label className="block text-xs uppercase font-serif tracking-widest text-maroon-text font-semibold mb-2">
                  {isHindi ? "उपस्थिति की पुष्टि *" : "Will You Be Attending? *"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      attendance === 'attending'
                        ? 'bg-surface-2 border-maroon-text shadow-sm'
                        : 'bg-surface border-[#B89555]/30 hover:border-[#B89555]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="attending"
                      checked={attendance === 'attending'}
                      onChange={() => setAttendance('attending')}
                      className="accent-[#702D3B] w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-serif font-medium text-maroon-text">
                      {isHindi ? "हर्षपूर्वक उपस्थित होंगे" : "Joyfully Accept & Attend"}
                    </span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      attendance === 'declining'
                        ? 'bg-surface-2 border-maroon-text shadow-sm'
                        : 'bg-surface border-[#B89555]/30 hover:border-[#B89555]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="declining"
                      checked={attendance === 'declining'}
                      onChange={() => setAttendance('declining')}
                      className="accent-[#702D3B] w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-serif text-ink">
                      {isHindi ? "सस्नेह अनुपस्थित रहेंगे" : "Regretfully Decline With Love"}
                    </span>
                  </label>
                </div>
              </div>

              {attendance === 'attending' && (
                <>
                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs uppercase font-serif tracking-widest text-maroon-text font-semibold mb-2">
                      {isHindi ? "कुल अतिथियों की संख्या *" : "Number of Guests Attending *"}
                    </label>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#B89555] shrink-0" />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full px-4 py-3 bg-surface border border-[#B89555]/40 rounded-xl text-sm font-serif text-ink focus:outline-none focus:ring-2 focus:ring-[#B89555]"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? (isHindi ? "अतिथि" : "Guest") : (isHindi ? "अतिथि" : "Guests")}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Which Events Will You Attend */}
                  <div>
                    <label className="block text-xs uppercase font-serif tracking-widest text-maroon-text font-semibold mb-2">
                      {isHindi ? "आप किन उत्सवों में सम्मिलित होंगे? *" : "Ceremonies You Plan to Attend *"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {config.events.map((ev) => (
                        <label
                          key={ev.id}
                          className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs font-serif cursor-pointer transition-all ${
                            selectedEvents.includes(ev.id)
                              ? 'bg-surface-2/70 border-[#B89555] text-maroon-text'
                              : 'bg-surface border-[#B89555]/25 text-ink'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedEvents.includes(ev.id)}
                            onChange={() => handleEventToggle(ev.id)}
                            className="accent-[#702D3B] mt-0.5"
                          />
                          <div>
                            <p className="font-semibold">{isHindi ? ev.nameHindi : ev.name}</p>
                            <p className="text-[11px] text-ink/70">{isHindi ? ev.dateHindi : ev.date}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Preferences */}
                  <div>
                    <label className="block text-xs uppercase font-serif tracking-widest text-maroon-text font-semibold mb-2">
                      {isHindi ? "भोजन प्राथमिकता" : "Dietary Preferences"}
                    </label>
                    <select
                      value={dietaryPreference}
                      onChange={(e) => setDietaryPreference(e.target.value)}
                      className="w-full px-4 py-3 bg-surface border border-[#B89555]/40 rounded-xl text-sm font-serif text-ink focus:outline-none focus:ring-2 focus:ring-[#B89555]"
                    >
                      {config.rsvp.dietaryOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {isHindi ? opt.labelHindi : opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {/* Message to Couple */}
              <div>
                <label className="block text-xs uppercase font-serif tracking-widest text-maroon-text font-semibold mb-2">
                  {isHindi ? "वर-वधू के लिए शुभकामना संदेश (वैकल्पिक)" : "A Warm Message or Blessing (Optional)"}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isHindi
                      ? "राधिका और सूर्यवीर के इस नए जीवन के लिए अपना प्यार और आशीर्वाद लिखें..."
                      : "Share your blessings, advice, or song requests for the sangeet..."
                  }
                  className="w-full px-4 py-3 bg-surface border border-[#B89555]/40 rounded-xl text-sm font-serif text-ink focus:outline-none focus:ring-2 focus:ring-[#B89555] transition-all placeholder:text-ink/40"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-maroon hover:bg-[#853445] text-on-dark rounded-xl font-serif font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 border border-[#DFC18A]/40 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? (
                  <span>{isHindi ? "स्वीकृति दर्ज की जा रही है..." : "Sending RSVP..."}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#DFC18A]" />
                    <span>{isHindi ? "उपस्थिति दर्ज करें" : "Confirm My RSVP"}</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Admin drawer for reviewing local submissions */}
          {showAdminDrawer && storedSubmissions.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#B89555]/30">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-serif font-bold text-maroon-text flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B89555]" />
                  <span>Received Guest Responses ({storedSubmissions.length})</span>
                </h4>
                <button
                  onClick={exportCsv}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-serif bg-surface-2 hover:bg-surface-3 text-maroon-text rounded-lg transition-colors border border-[#B89555]/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CSV</span>
                </button>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {storedSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3 bg-surface-2/60 rounded-xl border border-[#B89555]/20 text-xs font-serif"
                  >
                    <div className="flex items-center justify-between font-semibold text-maroon-text">
                      <span>{sub.guestName}</span>
                      <span className={sub.attendance === 'attending' ? 'text-emerald-700' : 'text-stone-500'}>
                        {sub.attendance === 'attending' ? `Attending (${sub.guestCount} guests)` : 'Declined'}
                      </span>
                    </div>
                    {sub.message && (
                      <p className="mt-1 text-ink/80 italic">&ldquo;{sub.message}&rdquo;</p>
                    )}
                    <p className="mt-1 text-[10px] text-ink/60">Submitted: {sub.submittedAt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
