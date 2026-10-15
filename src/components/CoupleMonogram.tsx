import React from 'react';

interface CoupleMonogramProps {
  brideInitial: string;
  groomInitial: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'maroon' | 'ivory';
  className?: string;
}

export const CoupleMonogram: React.FC<CoupleMonogramProps> = ({
  brideInitial = 'R',
  groomInitial = 'S',
  size = 'md',
  variant = 'gold',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-xl',
    lg: 'w-28 h-28 text-2xl',
    xl: 'w-36 h-36 text-4xl',
  };

  const colorMap = {
    gold: {
      border: '#B89555',
      inner: '#DFC18A',
      fill: 'rgba(255, 248, 237, 0.95)',
      text: '#702D3B',
      accent: '#B89555',
    },
    maroon: {
      border: '#702D3B',
      inner: '#B89555',
      fill: '#702D3B',
      text: '#FFF8ED',
      accent: '#DFC18A',
    },
    ivory: {
      border: '#B89555',
      inner: '#B89555',
      fill: '#FFF8ED',
      text: '#40332F',
      accent: '#B85C45',
    },
  };

  const colors = colorMap[variant];

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${className}`} aria-label={`Monogram ${brideInitial} and ${groomInitial}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ornamental royal ring */}
        <circle
          cx="60"
          cy="60"
          r="56"
          stroke={colors.border}
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Delicate scallop petal ring */}
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke={colors.inner}
          strokeWidth="1"
          fill={colors.fill}
        />

        {/* 8-pointed Mewar royal star petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 60 60)`}>
            <circle cx="60" cy="11" r="1.5" fill={colors.accent} />
            <path
              d="M58 14 Q60 18 62 14"
              stroke={colors.border}
              strokeWidth="0.8"
              fill="none"
            />
          </g>
        ))}

        {/* Inner thin medallion border */}
        <circle
          cx="60"
          cy="60"
          r="44"
          stroke={colors.border}
          strokeWidth="1.2"
        />

        {/* Top royal crown / lotus motif */}
        <path
          d="M54 26 C57 23 63 23 66 26 C64 29 56 29 54 26 Z"
          fill={colors.accent}
        />
        <circle cx="60" cy="22" r="1.2" fill={colors.border} />

        {/* Bottom floral accent */}
        <path
          d="M54 94 C57 97 63 97 66 94 C64 91 56 91 54 94 Z"
          fill={colors.accent}
        />
      </svg>

      {/* Monogram Letters */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-serif font-bold tracking-tight select-none flex items-center gap-0.5"
          style={{ color: colors.text }}
        >
          <span className="transform -translate-y-0.5">{brideInitial}</span>
          <span className="text-[0.6em] opacity-75 font-sans font-light mx-0.5 text-[#B89555]">&amp;</span>
          <span className="transform translate-y-0.5">{groomInitial}</span>
        </span>
      </div>
    </div>
  );
};
