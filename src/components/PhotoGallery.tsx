import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WeddingConfig, GalleryItem } from '../config/wedding';
import { FloralGarland } from './decorations/FloralGarland';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PhotoGalleryProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ config, isHindi }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = isHindi
    ? [
        { id: 'all', label: 'सभी चित्र' },
        { id: 'portraits', label: 'राजसी छवियां' },
        { id: 'prewedding', label: 'संध्या एवं झील' },
        { id: 'preparations', label: 'शुभ तैयारियां' },
      ]
    : [
        { id: 'all', label: 'All Photographs' },
        { id: 'portraits', label: 'Portraits' },
        { id: 'prewedding', label: 'Lakeside & Twilight' },
        { id: 'preparations', label: 'Sacred Mandap' },
      ];

  const filteredItems = selectedCategory === 'all'
    ? config.gallery
    : config.gallery.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
    }
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {isHindi ? "स्मृतियों का झरोखा" : "Cherished Moments"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? "विवाह चित्रमाला" : "Photo Gallery"}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80">
            {isHindi
              ? "उदयपुर की पृष्ठभूमि में संजोई गई सुंदर झलकियां और यादें।"
              : "An editorial collection of treasured moments, Udaipur vistas, and celebrations."}
          </p>
          <FloralGarland variant="lotus" />
        </div>

        {/* Category Filter Tabs (Zero-pill discipline: segmented clean tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-4 py-2 text-xs font-serif font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-maroon text-on-dark shadow-sm'
                  : 'bg-surface-2/60 text-ink hover:bg-surface-2'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Scrapbook varied aspect ratios & elegant border frames) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer bg-surface p-3 rounded-2xl border border-[#B89555]/30 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#2B1B17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-surface/90 flex items-center justify-center text-maroon-text shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-maroon-text" />
                  </div>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="pt-3 px-1 text-center">
                <h4 className="text-base font-serif font-bold text-maroon-text">
                  {isHindi ? item.titleHindi : item.title}
                </h4>
                <p className="text-xs font-serif italic text-ink/70 mt-1 line-clamp-1">
                  {isHindi ? item.captionHindi : item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Accessible Lightbox */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A120F]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-surface/10 text-white hover:bg-surface/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DFC18A]"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-surface/10 text-white hover:bg-surface/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DFC18A]"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-surface/10 text-white hover:bg-surface/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DFC18A]"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image & Caption */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <motion.img
                key={filteredItems[activeLightboxIndex].id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl border border-[#B89555]/30 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <div className="text-center mt-4 text-on-dark max-w-lg">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#DFC18A]">
                  {isHindi
                    ? filteredItems[activeLightboxIndex].titleHindi
                    : filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-stone-300 mt-1">
                  {isHindi
                    ? filteredItems[activeLightboxIndex].captionHindi
                    : filteredItems[activeLightboxIndex].caption}
                </p>
                <span className="text-[11px] text-stone-400 mt-2 block font-sans">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
