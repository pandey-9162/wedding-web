import React from 'react';

interface MewarArchFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'maroon' | 'cream';
  hasJharokhaTop?: boolean;
}

export const MewarArchFrame: React.FC<MewarArchFrameProps> = ({
  children,
  className = '',
  variant = 'gold',
  hasJharokhaTop = true,
}) => {
  const borderColor = variant === 'maroon' ? 'border-maroon-text' : 'border-[#B89555]/40';
  const shadowColor = variant === 'maroon' ? 'shadow-maroon-text/10' : 'shadow-[#B89555]/10';

  return (
    <div className={`relative p-3 sm:p-5 bg-surface rounded-t-[40px] sm:rounded-t-[60px] rounded-b-2xl border ${borderColor} shadow-lg ${shadowColor} ${className}`}>
      {/* Decorative top jharokha arch peak */}
      {hasJharokhaTop && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="bg-surface px-3 py-0.5 border-t border-x border-[#B89555]/60 rounded-t-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]"></span>
            <span className="text-[10px] uppercase font-serif tracking-widest text-maroon-text font-semibold">मङ्गलम्</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]"></span>
          </div>
        </div>
      )}

      {/* Four ornamental corner accents */}
      <div className="absolute top-2 left-2 text-[#B89555]/60 pointer-events-none select-none">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 10V2H10" />
          <path d="M2 2L8 8" />
        </svg>
      </div>
      <div className="absolute top-2 right-2 text-[#B89555]/60 pointer-events-none select-none">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10V2H14" />
          <path d="M22 2L16 8" />
        </svg>
      </div>
      <div className="absolute bottom-2 left-2 text-[#B89555]/60 pointer-events-none select-none">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 14V22H10" />
          <path d="M2 22L8 16" />
        </svg>
      </div>
      <div className="absolute bottom-2 right-2 text-[#B89555]/60 pointer-events-none select-none">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 14V22H14" />
          <path d="M22 22L16 16" />
        </svg>
      </div>

      {/* Internal arch container */}
      <div className="relative overflow-hidden rounded-t-[32px] sm:rounded-t-[50px] rounded-b-xl">
        {children}
      </div>
    </div>
  );
};
