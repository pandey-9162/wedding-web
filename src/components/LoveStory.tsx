import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig } from '../config/wedding';
import { MapPin, Calendar, Heart, Sparkles } from 'lucide-react';
import { FloralGarland } from './decorations/FloralGarland';

interface LoveStoryProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const LoveStory: React.FC<LoveStoryProps> = ({ config, isHindi }) => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-surface relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {isHindi ? "प्रेम की सुंदर यात्रा" : "Our Journey"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? "हमारी प्रेम कथा" : "How Our Story Unfolded"}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80">
            {isHindi
              ? "दो दिलों का मिलन, संजोए हुए पल और एक नई शुरुआत का सुंदर सफर।"
              : "From a chance conversation under royal archways to a lifetime of togetherness."}
          </p>
          <div className="mt-4 flex justify-center">
            <FloralGarland variant="paisley" />
          </div>
        </div>

        {/* Timeline Story Stream */}
        <div className="relative mt-12 sm:mt-16">
          {/* Subtle Vertical Spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-8 -translate-x-1/2 w-px bg-gradient-to-b from-[#B89555]/10 via-[#B89555]/40 to-[#B89555]/10" />

          <div className="space-y-12 sm:space-y-16">
            {config.story.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } items-start sm:items-center gap-6 sm:gap-12`}
                >
                  {/* Center Node Stamp */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 sm:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-surface border-2 border-[#B89555] shadow-sm z-10 text-maroon-text">
                    <Heart className="w-3.5 h-3.5 fill-maroon-text/20" />
                  </div>

                  {/* Story Card Content */}
                  <div
                    className={`ml-10 sm:ml-0 w-full sm:w-1/2 ${
                      isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
                    }`}
                  >
                    <div className="bg-surface p-6 sm:p-7 rounded-2xl border border-[#B89555]/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      {/* Subtle Paper Stamp Badge */}
                      <div
                        className={`inline-flex items-center gap-2 mb-2 text-xs font-serif text-[#B89555] font-semibold ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <span className="tracking-widest uppercase">
                          {isHindi ? item.chapterHindi : item.chapter}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-ink/70 font-normal">
                          <Calendar className="w-3 h-3 text-[#B89555]" />
                          {item.date}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-text group-hover:text-terracotta-text transition-colors">
                        {isHindi ? item.titleHindi : item.title}
                      </h3>

                      {/* Location Tag */}
                      <div
                        className={`flex items-center gap-1.5 text-xs font-serif text-terracotta-text my-2 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>

                      {/* Narrative Prose */}
                      <p className="text-sm font-serif leading-relaxed text-ink/90 mt-3">
                        {isHindi ? item.descriptionHindi : item.description}
                      </p>

                      {/* Heartfelt Highlight Quote */}
                      <div className="mt-4 pt-3 border-t border-[#B89555]/20 flex items-center gap-2 text-xs font-serif italic text-maroon-text">
                        <Sparkles className="w-3 h-3 text-[#B89555] shrink-0" />
                        <span>&ldquo;{isHindi ? item.highlightHindi : item.highlight}&rdquo;</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Balance */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
