import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig } from '../config/wedding';
import { FloralGarland } from './decorations/FloralGarland';
import { Quote } from 'lucide-react';

interface FamilySectionProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ config, isHindi }) => {
  const brideFamily = config.bride.family;
  const groomFamily = config.groom.family;

  return (
    <section id="families" className="py-20 sm:py-28 bg-surface-2/50 border-t border-[#B89555]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {config.sharedFamilyMessage.sanskritHeading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? config.sharedFamilyMessage.titleHindi : config.sharedFamilyMessage.title}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80 leading-relaxed">
            &ldquo;{isHindi ? config.sharedFamilyMessage.textHindi : config.sharedFamilyMessage.text}&rdquo;
          </p>
          <div className="mt-4 flex justify-center">
            <FloralGarland variant="lotus" />
          </div>
        </div>

        {/* Two Balanced Family Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 items-stretch">
          {/* Bride's Family Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-surface rounded-3xl p-6 sm:p-8 border border-[#B89555]/30 shadow-sm relative overflow-hidden"
          >
            {/* Top Ornamental Header */}
            <div className="text-center border-b border-[#B89555]/20 pb-4">
              <span className="text-xs font-serif uppercase tracking-widest text-terracotta-text font-semibold">
                {isHindi ? "वधू पक्ष" : "The Bride's Family"}
              </span>
              <h3 className="text-2xl font-serif font-bold text-maroon-text mt-1">
                {isHindi ? "शर्मा परिवार" : "The Sharma Family"}
              </h3>
            </div>

            {/* Parents Names */}
            <div className="text-center my-6 space-y-1">
              <p className="text-lg sm:text-xl font-serif font-semibold text-ink">
                {brideFamily.father}
              </p>
              <p className="text-xs uppercase font-serif tracking-widest text-[#B89555]">
                &amp;
              </p>
              <p className="text-lg sm:text-xl font-serif font-semibold text-ink">
                {brideFamily.mother}
              </p>
            </div>

            {/* Family Blessing Message */}
            {brideFamily.message && (
              <div className="mt-auto pt-4 border-t border-[#B89555]/15 relative">
                <Quote className="w-5 h-5 text-[#B89555]/30 mb-2" />
                <p className="text-xs sm:text-sm font-serif italic text-ink/85 leading-relaxed">
                  &ldquo;{isHindi ? brideFamily.messageHindi : brideFamily.message}&rdquo;
                </p>
              </div>
            )}
          </motion.div>

          {/* Groom's Family Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col bg-surface rounded-3xl p-6 sm:p-8 border border-[#B89555]/30 shadow-sm relative overflow-hidden"
          >
            {/* Top Ornamental Header */}
            <div className="text-center border-b border-[#B89555]/20 pb-4">
              <span className="text-xs font-serif uppercase tracking-widest text-[#B89555] font-semibold">
                {isHindi ? "वर पक्ष" : "The Groom's Family"}
              </span>
              <h3 className="text-2xl font-serif font-bold text-maroon-text mt-1">
                {isHindi ? "सिंह परिवार" : "The Singh Family"}
              </h3>
            </div>

            {/* Parents Names */}
            <div className="text-center my-6 space-y-1">
              <p className="text-lg sm:text-xl font-serif font-semibold text-ink">
                {groomFamily.father}
              </p>
              <p className="text-xs uppercase font-serif tracking-widest text-[#B89555]">
                &amp;
              </p>
              <p className="text-lg sm:text-xl font-serif font-semibold text-ink">
                {groomFamily.mother}
              </p>
            </div>

            {/* Family Blessing Message */}
            {groomFamily.message && (
              <div className="mt-auto pt-4 border-t border-[#B89555]/15 relative">
                <Quote className="w-5 h-5 text-[#B89555]/30 mb-2" />
                <p className="text-xs sm:text-sm font-serif italic text-ink/85 leading-relaxed">
                  &ldquo;{isHindi ? groomFamily.messageHindi : groomFamily.message}&rdquo;
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
