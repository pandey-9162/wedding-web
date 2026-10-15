import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig, EventDetail } from '../config/wedding';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarPlus } from 'lucide-react';
import { FloralGarland } from './decorations/FloralGarland';

interface WeddingEventsProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const WeddingEvents: React.FC<WeddingEventsProps> = ({ config, isHindi }) => {
  // Generates Google Calendar link
  const generateGoogleCalendarUrl = (event: EventDetail) => {
    const title = encodeURIComponent(`${event.name} – Radhika & Suryaveer's Royal Wedding`);
    const details = encodeURIComponent(`${event.description}\n\nVenue: ${event.venue}, ${event.address}`);
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  // Generates standard .ics iCalendar file for Apple Calendar/Outlook/Android
  const downloadIcs = (event: EventDetail) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//A Royal Beginning//Udaipur Wedding//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.name} – Royal Wedding`,
      `DESCRIPTION:${event.description.replace(/\n/g, ' ')}`,
      `LOCATION:${event.venue}, ${event.address}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-invitation.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="celebrations" className="py-20 sm:py-28 bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {isHindi ? "मांगलिक उत्सव" : "Ceremonies & Itinerary"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? "विवाह उत्सव कार्यक्रम" : "Wedding Celebrations"}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80">
            {isHindi
              ? "उदयपुर के पावन प्रांगण में होने वाले विभिन्न धार्मिक एवं सांस्कृतिक अनुष्ठान।"
              : "A joyous celebration of ancient Rajasthani traditions, sacred rituals, music, and royal feasts."}
          </p>
          <FloralGarland variant="marigold" />
        </div>

        {/* Celebrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {config.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-surface rounded-2xl border border-[#B89555]/30 hover:border-[#B89555] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Ribbon */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: event.themeColor || '#B89555' }}
              />

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Event Ceremony Tag */}
                  <div className="flex items-center justify-between text-xs font-serif text-[#B89555] mb-2">
                    <span className="font-semibold uppercase tracking-wider">
                      {isHindi ? `अनुष्ठान ०${index + 1}` : `Ceremony 0${index + 1}`}
                    </span>
                    <span className="text-[10px] text-ink/60">Asia/Kolkata</span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-text group-hover:text-terracotta-text transition-colors">
                    {isHindi ? event.nameHindi : event.name}
                  </h3>

                  {/* Date & Time Strip */}
                  <div className="mt-3 space-y-1.5 py-3 border-y border-[#B89555]/15 text-xs sm:text-sm font-serif">
                    <div className="flex items-center gap-2 text-ink">
                      <Calendar className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                      <span className="font-medium">
                        {isHindi ? event.dateHindi : event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-ink/80">
                      <Clock className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                      <span>{event.startTime} – {event.endTime}</span>
                    </div>
                  </div>

                  {/* Venue & Address */}
                  <div className="mt-3 text-xs sm:text-sm font-serif">
                    <div className="flex items-start gap-2 text-maroon-text font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-terracotta-text shrink-0 mt-0.5" />
                      <span>{isHindi ? event.venueHindi : event.venue}</span>
                    </div>
                    <p className="text-ink/70 text-xs ml-5.5 mt-0.5">
                      {event.address}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm font-serif text-ink/85 leading-relaxed">
                    {isHindi ? event.descriptionHindi : event.description}
                  </p>

                  {/* Dress Code / Palette */}
                  {event.dressCode && (
                    <div className="mt-4 p-2.5 bg-surface-2/50 rounded-lg border border-[#B89555]/20 flex items-center gap-2 text-xs font-serif">
                      <Sparkles className="w-3 h-3 text-[#B89555] shrink-0" />
                      <div>
                        <span className="font-semibold text-maroon-text">
                          {isHindi ? "पोशाक / परिधान: " : "Attire: "}
                        </span>
                        <span className="text-ink">
                          {isHindi ? event.dressCodeHindi : event.dressCode}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Buttons (Directions & Calendar) */}
                <div className="mt-6 pt-4 border-t border-[#B89555]/20 flex items-center gap-2">
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-serif font-medium text-maroon-text hover:text-terracotta-text border border-[#B89555]/40 hover:border-[#B89555] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-3 h-3 text-[#B89555]" />
                    <span>{isHindi ? "स्थान निर्देश" : "Directions"}</span>
                  </a>

                  <a
                    href={generateGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 text-xs font-serif text-maroon-text hover:bg-surface-2 border border-[#B89555]/40 rounded-lg transition-colors"
                    title="Add to Google Calendar"
                    aria-label="Add to Google Calendar"
                  >
                    <CalendarPlus className="w-3.5 h-3.5 text-[#B89555]" />
                  </a>

                  <button
                    onClick={() => downloadIcs(event)}
                    type="button"
                    className="inline-flex items-center justify-center px-2 py-2 text-[11px] font-serif text-ink/80 hover:text-maroon-text border border-[#B89555]/30 rounded-lg transition-colors"
                    title="Download .ics Calendar file"
                  >
                    .ics
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
