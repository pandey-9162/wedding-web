import React from 'react';
import { WeddingConfig } from '../config/wedding';
import { CoupleMonogram } from './CoupleMonogram';
import { ArrowUp, Heart } from 'lucide-react';

interface WeddingFooterProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const WeddingFooter: React.FC<WeddingFooterProps> = ({ config, isHindi }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1A110E] text-on-dark overflow-hidden pt-20 pb-12">
      {/* Background Twilight Image with Measured Dark Scrim */}
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src={config.wedding.twilightImage}
          alt="Udaipur Jagmandir illuminated at twilight across Lake Pichola"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A110E] via-[#1A110E]/80 to-[#1A110E]/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Sacred Sanskrit Closing Blessing */}
        <p className="text-sm sm:text-base font-serif tracking-[0.25em] text-[#DFC18A] uppercase font-semibold">
          {config.wedding.sanskritClosing}
        </p>

        {/* Closing Warm Message */}
        <div className="my-6 space-y-3">
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
            &ldquo;Your presence will make our celebration even more special.&rdquo;
          </h3>
          <p className="text-lg sm:text-2xl font-devanagari text-[#DFC18A]">
            &ldquo;आपकी उपस्थिति हमारे उत्सव को और भी खास बना देगी।&rdquo;
          </p>
        </div>

        {/* Monogram */}
        <div className="my-8 flex justify-center">
          <CoupleMonogram
            brideInitial={config.bride.initials}
            groomInitial={config.groom.initials}
            size="lg"
            variant="maroon"
          />
        </div>

        {/* Couple Names & Date */}
        <div className="space-y-1">
          <p className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            {isHindi ? config.bride.nameHindi : config.bride.name}
            <span className="text-[#DFC18A] mx-2 font-light italic">&amp;</span>
            {isHindi ? config.groom.nameHindi : config.groom.name}
          </p>
          <p className="text-xs sm:text-sm font-serif text-[#DFC18A] tracking-widest uppercase mt-2">
            {isHindi ? config.wedding.dateDisplayHindi : config.wedding.dateDisplay}
          </p>
          <p className="text-xs font-serif text-stone-300">
            {config.wedding.city}, {config.wedding.stateCountry}
          </p>
        </div>

        {/* Back to Top Floating Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToTop}
            type="button"
            className="group flex flex-col items-center gap-1.5 text-xs font-serif text-[#DFC18A] hover:text-white transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <div className="w-9 h-9 rounded-full border border-[#DFC18A]/40 flex items-center justify-center group-hover:border-[#DFC18A] transition-colors">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </div>
            <span className="tracking-widest uppercase text-[10px]">
              {isHindi ? "शीर्ष पर जाएं" : "Back to Top"}
            </span>
          </button>
        </div>

        {/* Subtle Bottom Credit */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-serif text-stone-400 gap-2">
          <p>
            {config.wedding.title} · {config.wedding.tagline}
          </p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>Crafted with love in Mewar</span>
            <Heart className="w-3 h-3 text-terracotta-text fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
