import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig } from '../config/wedding';
import { CoupleMonogram } from './CoupleMonogram';
import { Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';

interface WeddingHeroProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const WeddingHero: React.FC<WeddingHeroProps> = ({ config, isHindi }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Gradient Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-2/50 to-surface -z-10" />

      {/* Floating subtle petals / sparkles background embellishment */}
      <div className="absolute top-12 left-10 text-[#B89555]/20 select-none pointer-events-none text-2xl hidden md:block">
        ❦
      </div>
      <div className="absolute top-20 right-16 text-[#B89555]/20 select-none pointer-events-none text-xl hidden md:block">
        ✦
      </div>
      <div className="absolute bottom-24 left-16 text-[#B89555]/20 select-none pointer-events-none text-xl hidden md:block">
        ✦
      </div>
      <div className="absolute bottom-20 right-12 text-[#B89555]/20 select-none pointer-events-none text-2xl hidden md:block">
        ❦
      </div>

      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Sacred Sanskrit Blessing & Auspicious Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#B89555]/30 bg-surface/80 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B89555]" />
          <span className="text-xs sm:text-sm font-serif font-semibold tracking-widest text-maroon-text">
            {config.wedding.sanskritBlessing}
          </span>
          <span className="text-[#B89555] text-xs">·</span>
          <span className="text-xs font-serif text-ink/80">
            {isHindi ? "उदयपुर, राजस्थान" : "Udaipur, Rajasthan"}
          </span>
        </motion.div>

        {/* The Couple's Monogram */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center my-3"
        >
          <CoupleMonogram
            brideInitial={config.bride.initials}
            groomInitial={config.groom.initials}
            size="md"
            variant="gold"
          />
        </motion.div>

        {/* Couple Names - Grand Editorial Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="my-4 sm:my-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-maroon-text tracking-tight leading-tight">
            {isHindi ? config.bride.nameHindi : config.bride.name}
          </h1>

          <div className="flex items-center justify-center gap-4 my-2 sm:my-3">
            <span className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#B89555]" />
            <span className="font-serif text-2xl sm:text-3xl italic text-terracotta-text font-light">
              &amp;
            </span>
            <span className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#B89555]" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-maroon-text tracking-tight leading-tight">
            {isHindi ? config.groom.nameHindi : config.groom.name}
          </h1>
        </motion.div>

        {/* Master Invitation Copy (English & Hindi) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-2xl mx-auto space-y-2 px-4"
        >
          <p className="text-base sm:text-lg font-serif italic text-ink leading-relaxed">
            &ldquo;With the love and blessings of our families, we invite you to celebrate the beginning of our forever.&rdquo;
          </p>
          <p className="text-sm sm:text-base font-devanagari text-maroon-text leading-relaxed">
            &ldquo;अपने परिवारों के स्नेह और आशीर्वाद के साथ, हम आपको अपने जीवन के इस शुभ आरंभ में सादर आमंत्रित करते हैं।&rdquo;
          </p>
        </motion.div>

        {/* Udaipur Palace Fine-Art Hero Illustration Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 sm:mt-12 max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B89555]/40"
        >
          {/* Inner Arch Matting */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
            <img
              src={config.wedding.heroImage}
              alt="Udaipur City Palace and Lake Pichola at golden sunset"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            {/* Soft Ambient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B17]/80 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Event Snapshot at bottom of photo */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-serif">
                <Calendar className="w-4 h-4 text-[#DFC18A] shrink-0" />
                <span>{isHindi ? config.wedding.dateDisplayHindi : config.wedding.dateDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-[#DFC18A]">
                <MapPin className="w-4 h-4 text-[#DFC18A] shrink-0" />
                <span>{isHindi ? config.wedding.venueNameHindi : config.wedding.venueName}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons & Scroll Affordance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#celebrations"
            className="w-full sm:w-auto px-7 py-3.5 bg-maroon hover:bg-[#853445] text-on-dark rounded-full font-serif font-medium text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 border border-[#DFC18A]/40 flex items-center justify-center gap-2"
          >
            <span>{isHindi ? "उत्सव कार्यक्रम देखें" : "Explore Celebrations"}</span>
            <span className="text-[#DFC18A]">✦</span>
          </a>

          <a
            href="#story"
            className="w-full sm:w-auto px-7 py-3.5 bg-surface hover:bg-surface-2 text-maroon-text rounded-full font-serif font-medium text-sm sm:text-base tracking-wide border border-[#B89555]/50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>{isHindi ? "हमारी प्रेम कथा" : "Our Love Story"}</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#countdown"
            className="flex flex-col items-center gap-1 text-ink/60 hover:text-maroon-text transition-colors text-xs font-serif"
            aria-label="Scroll to wedding countdown"
          >
            <span className="tracking-widest uppercase text-[10px]">
              {isHindi ? "आगे बढ़ें" : "Scroll to Celebrate"}
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#B89555]" />
          </a>
        </div>
      </div>
    </section>
  );
};
