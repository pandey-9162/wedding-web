import React, { useState } from 'react';
import { WeddingConfig } from '../config/wedding';
import { Share2, Copy, Check, MessageSquare, PhoneCall, Heart } from 'lucide-react';

interface ShareInvitationProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const ShareInvitation: React.FC<ShareInvitationProps> = ({ config, isHindi }) => {
  const [copied, setCopied] = useState(false);

  const weddingUrl = typeof window !== 'undefined' ? window.location.href : 'https://example.com';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: config.share.shareTitle,
          text: `${config.share.shareText} – ${config.wedding.dateDisplay}`,
          url: weddingUrl,
        });
      } catch {
        // User dismissed share
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(weddingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${config.share.whatsappMessage}\n\n${weddingUrl}`
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-surface-2/60 border-t border-[#B89555]/25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
          {isHindi ? "स्नेह निमंत्रण साझा करें" : "Spread the Joy"}
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-maroon-text mt-1 mb-2">
          {isHindi ? "अपनों के साथ साझा करें" : "Share Our Invitation"}
        </h2>
        <p className="text-xs sm:text-sm font-serif italic text-ink/80 max-w-md mx-auto">
          {isHindi
            ? "अपने परिजनों और मित्रों को उदयपुर विवाह समारोह में आमंत्रित करें।"
            : "Share this invitation with family and friends traveling to Udaipur."}
        </p>

        {/* Share Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          {/* Native Web Share */}
          <button
            onClick={handleShare}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-maroon hover:bg-[#853445] text-on-dark text-xs sm:text-sm font-serif font-semibold rounded-full shadow-sm transition-all duration-200 border border-[#DFC18A]/40"
          >
            <Share2 className="w-4 h-4 text-[#DFC18A]" />
            <span>{isHindi ? "आमंत्रण साझा करें" : "Share Invitation"}</span>
          </button>

          {/* WhatsApp Direct Share */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-serif font-semibold rounded-full shadow-sm transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{isHindi ? "व्हाट्सएप पर भेजें" : "Share on WhatsApp"}</span>
          </a>

          {/* Copy Link Button with feedback */}
          <button
            onClick={copyLink}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-2 text-maroon-text text-xs sm:text-sm font-serif font-medium rounded-full border border-[#B89555]/50 transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span className="text-emerald-700">{isHindi ? "लिंक कॉपी हो गया!" : "Link Copied!"}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#B89555]" />
                <span>{isHindi ? "लिंक कॉपी करें" : "Copy Link"}</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Concierge Link */}
        <div className="mt-8 pt-6 border-t border-[#B89555]/20 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-serif text-ink/80">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-3.5 h-3.5 text-[#B89555]" />
            <span>
              {isHindi ? "विवाह संबंधी किसी भी प्रश्न के लिए: " : "For any queries or assistance: "}
              <a
                href={`mailto:${config.rsvp.contactEmail}`}
                className="text-maroon-text font-semibold underline underline-offset-2 hover:text-terracotta-text"
              >
                {config.rsvp.contactEmail}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
