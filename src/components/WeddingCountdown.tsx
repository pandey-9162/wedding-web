import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { WeddingConfig } from '../config/wedding';
import { CalendarHeart, Clock } from 'lucide-react';
import { FloralGarland } from './decorations/FloralGarland';

interface WeddingCountdownProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const WeddingCountdown: React.FC<WeddingCountdownProps> = ({ config, isHindi }) => {
  const countdown = useCountdown(config.wedding.date, config.wedding.timeZone);

  return (
    <section id="countdown" className="py-12 sm:py-16 bg-surface-2/50 border-y border-[#B89555]/25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Sanskrit Auspicious Greeting */}
        <span className="text-xs uppercase font-serif tracking-[0.2em] text-maroon-text font-semibold">
          {config.wedding.sanskritBlessing}
        </span>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mt-1 mb-2">
          {isHindi ? "शुभ मुहूर्त की प्रतीक्षा" : "Counting Down to Our Auspicious Day"}
        </h2>

        <p className="text-xs sm:text-sm font-serif italic text-ink/80 max-w-md mx-auto">
          {isHindi
            ? `${config.wedding.dateDisplayHindi} · ${config.wedding.timeDisplay}`
            : `${config.wedding.dateDisplay} · ${config.wedding.timeDisplay} (IST)`}
        </p>

        {/* Live Ticking Countdown Units */}
        {countdown.isValid && !countdown.isPast ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-8 max-w-2xl mx-auto">
            {/* Days */}
            <div className="bg-surface p-4 sm:p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text tabular-nums">
                {String(countdown.days).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs uppercase font-serif tracking-widest text-[#B89555] mt-1">
                {isHindi ? "दिन" : "Days"}
              </span>
            </div>

            {/* Hours */}
            <div className="bg-surface p-4 sm:p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text tabular-nums">
                {String(countdown.hours).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs uppercase font-serif tracking-widest text-[#B89555] mt-1">
                {isHindi ? "घंटे" : "Hours"}
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-surface p-4 sm:p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text tabular-nums">
                {String(countdown.minutes).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs uppercase font-serif tracking-widest text-[#B89555] mt-1">
                {isHindi ? "मिनट" : "Minutes"}
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-surface p-4 sm:p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-bold text-terracotta-text tabular-nums">
                {String(countdown.seconds).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs uppercase font-serif tracking-widest text-[#B89555] mt-1">
                {isHindi ? "सेकंड" : "Seconds"}
              </span>
            </div>
          </div>
        ) : countdown.isPast ? (
          <div className="mt-6 p-6 bg-surface rounded-2xl border border-[#B89555]/40 inline-block shadow-sm">
            <p className="text-xl font-serif font-bold text-maroon-text">
              {isHindi ? "विवाह उत्सव आरंभ हो चुका है! शुभ विवाह!" : "The Celebrations Have Commenced! Shubh Vivah!"}
            </p>
          </div>
        ) : (
          <div className="mt-6 p-6 bg-surface rounded-2xl border border-[#B89555]/40 inline-block shadow-sm">
            <p className="text-lg font-serif text-maroon-text">
              {isHindi ? "हमारा पावन विवाह मुहूर्त शीघ्र घोषित होगा।" : "Our special day is coming soon."}
            </p>
          </div>
        )}

        {/* Small Calender Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-serif text-ink/70">
          <Clock className="w-3.5 h-3.5 text-[#B89555]" />
          <span>{isHindi ? "भारतीय मानक समय (IST) के अनुसार" : "Calculated in Asia/Kolkata (IST)"}</span>
        </div>

        <FloralGarland variant="lotus" />
      </div>
    </section>
  );
};
