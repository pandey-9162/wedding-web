import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CoupleMonogram } from './CoupleMonogram';
import { WeddingConfig } from '../config/wedding';
import { Sparkles, Heart } from 'lucide-react';

interface InvitationIntroProps {
  config: WeddingConfig;
  isOpen: boolean;
  onOpen: () => void;
  isHindi: boolean;
}

export const InvitationIntro: React.FC<InvitationIntroProps> = ({
  config,
  isOpen,
  onOpen,
  isHindi,
}) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="invitation-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B1B17]/70 backdrop-blur-md overflow-y-auto"
        >
          {/* Main Royal Invitation Card */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-surface rounded-t-[50px] sm:rounded-t-[80px] rounded-b-3xl border-2 border-[#B89555]/50 shadow-2xl p-6 sm:p-10 text-center overflow-hidden my-auto"
          >
            {/* Fine Ornamental Double Border */}
            <div className="absolute inset-2.5 sm:inset-3 border border-[#B89555]/30 rounded-t-[42px] sm:rounded-t-[72px] rounded-b-2xl pointer-events-none" />
            <div className="absolute inset-3.5 sm:inset-4 border border-[#B89555]/15 rounded-t-[38px] sm:rounded-t-[68px] rounded-b-xl pointer-events-none" />

            {/* Subtle Royal Corner Motifs */}
            <div className="absolute top-4 left-4 text-[#B89555]/40 select-none pointer-events-none">✦</div>
            <div className="absolute top-4 right-4 text-[#B89555]/40 select-none pointer-events-none">✦</div>
            <div className="absolute bottom-4 left-4 text-[#B89555]/40 select-none pointer-events-none">✦</div>
            <div className="absolute bottom-4 right-4 text-[#B89555]/40 select-none pointer-events-none">✦</div>

            {/* Sacred Shubh Vivah Tag */}
            <div className="flex flex-col items-center justify-center pt-2 sm:pt-4">
              <span className="text-[#B89555] text-xs font-serif tracking-[0.25em] uppercase mb-1">
                {isHindi ? "॥ श्री गणेशाय नमः ॥" : "॥ Shree Ganeshay Namah ॥"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display text-maroon-text font-normal tracking-wide">
                {config.wedding.sanskritGreeting}
              </h2>
            </div>

            {/* Blessings Kicker */}
            <p className="mt-3 text-xs sm:text-sm font-serif italic text-ink/80 max-w-xs mx-auto">
              {isHindi
                ? "हमारे परिवारों के स्नेह, प्रेम और आशीर्वाद से"
                : "With the love and blessings of our families"}
            </p>

            {/* Center Monogram */}
            <div className="my-6 flex justify-center">
              <CoupleMonogram
                brideInitial={config.bride.initials}
                groomInitial={config.groom.initials}
                size="lg"
                variant="gold"
              />
            </div>

            {/* Couple Names */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-text tracking-tight">
                {isHindi ? config.bride.nameHindi : config.bride.name}
              </h1>
              <div className="flex items-center justify-center gap-3 text-[#B89555]">
                <span className="w-8 h-px bg-[#B89555]/50" />
                <span className="font-serif text-lg italic text-terracotta-text">&amp;</span>
                <span className="w-8 h-px bg-[#B89555]/50" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-text tracking-tight">
                {isHindi ? config.groom.nameHindi : config.groom.name}
              </h1>
            </div>

            {/* Wedding Date & City */}
            <div className="mt-5 pt-4 border-t border-[#B89555]/20 max-w-xs mx-auto">
              <p className="text-sm sm:text-base font-serif font-medium text-ink">
                {isHindi ? config.wedding.dateDisplayHindi : config.wedding.dateDisplay}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#B89555] mt-1 font-serif">
                {config.wedding.city}, {config.wedding.stateCountry}
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <button
                onClick={onOpen}
                type="button"
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-maroon via-[#853445] to-maroon text-on-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-serif font-medium text-sm sm:text-base tracking-wide border border-[#DFC18A]/50 focus:outline-none focus:ring-2 focus:ring-[#B89555]"
              >
                <Sparkles className="w-4 h-4 text-[#DFC18A] transition-transform duration-300 group-hover:rotate-12" />
                <span>{isHindi ? "निमंत्रण खोलें" : "Open Our Invitation"}</span>
                <Heart className="w-3.5 h-3.5 text-[#DFC18A] fill-current" />
              </button>
              <p className="text-[11px] text-ink/60 mt-3 font-sans">
                {isHindi ? "उदयपुर विवाह उत्सव में आपका सहृदय स्वागत है" : "A Royal Rajasthani Wedding Celebration"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
