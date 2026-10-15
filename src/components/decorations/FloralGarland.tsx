import React from 'react';

interface FloralGarlandProps {
  variant?: 'lotus' | 'marigold' | 'paisley';
  className?: string;
  label?: string;
}

export const FloralGarland: React.FC<FloralGarlandProps> = ({
  variant = 'lotus',
  className = '',
  label,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 sm:my-12 px-4 select-none ${className}`} aria-hidden="true">
      {/* Left Hairline with terminal dot */}
      <div className="flex-1 max-w-xs flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#B89555]/40 mr-1 shrink-0" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B89555]/40 to-[#B89555]" />
      </div>

      {/* Center Motif */}
      <div className="flex items-center gap-2 shrink-0">
        {variant === 'lotus' && (
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B89555]">
            {/* Center Lotus Petal */}
            <path
              d="M17 2C15.5 8 13.5 16 17 20C20.5 16 18.5 8 17 2Z"
              fill="#DCA7A4"
              stroke="#B89555"
              strokeWidth="0.8"
            />
            {/* Side Petals Left */}
            <path
              d="M15 8C11 12 8 16 13 19.5"
              stroke="#B89555"
              strokeWidth="0.9"
              fill="#FFF8ED"
            />
            <path
              d="M13 12C8 15 4 18 10 20"
              stroke="#B89555"
              strokeWidth="0.8"
              fill="#FFF8ED"
            />
            {/* Side Petals Right */}
            <path
              d="M19 8C23 12 26 16 21 19.5"
              stroke="#B89555"
              strokeWidth="0.9"
              fill="#FFF8ED"
            />
            <path
              d="M21 12C26 15 30 18 24 20"
              stroke="#B89555"
              strokeWidth="0.8"
              fill="#FFF8ED"
            />
            {/* Base Petal */}
            <circle cx="17" cy="21" r="1.5" fill="#702D3B" />
          </svg>
        )}

        {variant === 'marigold' && (
          <div className="flex items-center gap-1.5 text-terracotta-text">
            <span className="w-2 h-2 rounded-full bg-[#B89555]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85C45]" />
            <span className="w-3 h-3 rounded-full bg-[#DFC18A] flex items-center justify-center text-[8px] text-maroon-text">
              ✦
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85C45]" />
            <span className="w-2 h-2 rounded-full bg-[#B89555]" />
          </div>
        )}

        {variant === 'paisley' && (
          <div className="flex items-center gap-2">
            <span className="text-[#B89555] text-xs">❦</span>
            <span className="text-maroon-text font-serif text-sm">✦</span>
            <span className="text-[#B89555] text-xs">❦</span>
          </div>
        )}

        {label && (
          <span className="text-xs uppercase font-serif tracking-widest text-maroon-text px-1 font-medium">
            {label}
          </span>
        )}
      </div>

      {/* Right Hairline with terminal dot */}
      <div className="flex-1 max-w-xs flex items-center">
        <div className="h-px w-full bg-gradient-to-r from-[#B89555] via-[#B89555]/40 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#B89555]/40 ml-1 shrink-0" />
      </div>
    </div>
  );
};
