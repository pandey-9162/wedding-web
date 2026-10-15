import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig } from '../config/wedding';
import { MewarArchFrame } from './decorations/MewarArchFrame';
import { FloralGarland } from './decorations/FloralGarland';
import { Heart } from 'lucide-react';

interface CoupleProfilesProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const CoupleProfiles: React.FC<CoupleProfilesProps> = ({ config, isHindi }) => {
  return (
    <section id="couple" className="py-20 sm:py-28 bg-surface-2/40 relative border-t border-[#B89555]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {isHindi ? "वर एवं वधू" : "The Couple"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? "मिलिए वर एवं वधू से" : "Meet the Bride & Groom"}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80">
            {isHindi
              ? "दो आत्माएं, एक साझी दृष्टि और जीवन भर का अटूट साथ।"
              : "Two distinct souls brought together by shared values, warmth, and lifelong love."}
          </p>
          <FloralGarland variant="lotus" />
        </div>

        {/* 2-Column Balanced Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 mt-8 sm:mt-12 items-stretch">
          {/* The Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col bg-surface rounded-3xl p-6 sm:p-8 border border-[#B89555]/30 shadow-sm"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-serif uppercase tracking-widest text-terracotta-text font-semibold">
                {isHindi ? "वधू" : "The Bride"}
              </span>
              <span className="text-xs font-serif italic text-ink/70">
                {isHindi ? `प्यार से: "${config.bride.nickname}"` : `Known fondly as "${config.bride.nickname}"`}
              </span>
            </div>

            {/* Portrait inside Jharokha Arch */}
            <div className="relative mb-6">
              <MewarArchFrame variant="gold">
                <div className="aspect-[3/4] w-full bg-surface-3 relative overflow-hidden">
                  <img
                    src={config.bride.photo}
                    alt={config.bride.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B17]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-serif uppercase tracking-wider text-[#DFC18A]">
                      {isHindi ? "सौम्य एवं शालीन" : "Grace & Elegance"}
                    </span>
                  </div>
                </div>
              </MewarArchFrame>
            </div>

            {/* Bride Details */}
            <div className="text-center mt-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-text">
                  {isHindi ? config.bride.nameHindi : config.bride.name}
                </h3>
                <p className="text-xs uppercase font-serif tracking-widest text-[#B89555] mt-1 font-medium">
                  {isHindi ? "पुत्री: डॉ. आलोक एवं श्रीमती मीनाक्षी शर्मा" : "Daughter of Dr. Alok & Mrs. Meenakshi Sharma"}
                </p>

                <p className="mt-4 text-sm font-serif leading-relaxed text-ink/90 text-left sm:text-center">
                  {isHindi ? config.bride.bioHindi : config.bride.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B89555]/20 flex items-center justify-center gap-2 text-xs font-serif italic text-terracotta-text">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>
                  {isHindi
                    ? "« जीवन का हर पल एक उत्सव बन जाता है »"
                    : "“A smile that lights up every room and courtyard.”"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* The Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col bg-surface rounded-3xl p-6 sm:p-8 border border-[#B89555]/30 shadow-sm"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-serif uppercase tracking-widest text-[#B89555] font-semibold">
                {isHindi ? "वर" : "The Groom"}
              </span>
              <span className="text-xs font-serif italic text-ink/70">
                {isHindi ? `प्यार से: "${config.groom.nickname}"` : `Known fondly as "${config.groom.nickname}"`}
              </span>
            </div>

            {/* Portrait inside Jharokha Arch */}
            <div className="relative mb-6">
              <MewarArchFrame variant="gold">
                <div className="aspect-[3/4] w-full bg-surface-3 relative overflow-hidden">
                  <img
                    src={config.groom.photo}
                    alt={config.groom.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B17]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-serif uppercase tracking-wider text-[#DFC18A]">
                      {isHindi ? "वीर एवं गरिमामय" : "Dignity & Warmth"}
                    </span>
                  </div>
                </div>
              </MewarArchFrame>
            </div>

            {/* Groom Details */}
            <div className="text-center mt-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-text">
                  {isHindi ? config.groom.nameHindi : config.groom.name}
                </h3>
                <p className="text-xs uppercase font-serif tracking-widest text-[#B89555] mt-1 font-medium">
                  {isHindi ? "सुपुत्र: ठाकुर महेंद्र सिंह एवं श्रीमती गायत्री देवी" : "Son of Thakur Mahendra Singh & Mrs. Gayatri Devi"}
                </p>

                <p className="mt-4 text-sm font-serif leading-relaxed text-ink/90 text-left sm:text-center">
                  {isHindi ? config.groom.bioHindi : config.groom.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B89555]/20 flex items-center justify-center gap-2 text-xs font-serif italic text-maroon-text">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>
                  {isHindi
                    ? "« परंपराओं का सम्मान और भविष्य के सपने »"
                    : "“Rooted in tradition, inspired by the road ahead.”"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
