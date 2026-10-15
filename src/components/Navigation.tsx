import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { WeddingConfig } from '../config/wedding';
import { ThemeToggle } from './ThemeToggle';
import { featureFlags } from '../config/features';

interface NavigationProps {
  config: WeddingConfig;
  isHindi: boolean;
  onToggleLanguage: () => void;
  onReopenInvitation: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isHindi,
  onToggleLanguage,
  onReopenInvitation,
  isDark,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = isHindi
    ? [
        { href: '#story', label: 'हमारी कहानी' },
        { href: '#couple', label: 'वर-वधू' },
        { href: '#celebrations', label: 'उत्सव' },
        { href: '#gallery', label: 'चित्रमाला' },
        { href: '#travel', label: 'यात्रा गाइड' },
      ]
    : [
        { href: '#story', label: 'Our Story' },
        { href: '#couple', label: 'The Couple' },
        { href: '#celebrations', label: 'Celebrations' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#travel', label: 'Travel Guide' },
      ];

  return (
    <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-md border-b border-[#B89555]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18 sm:h-20">
          {/* Zone 1: Brand wordmark in Serif Display */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl sm:text-2xl font-serif font-bold text-maroon-text tracking-tight whitespace-nowrap shrink-0 hover:text-terracotta-text transition-colors"
          >
            <span className="text-[#B89555] font-serif text-lg">✦</span>
            <span>A Royal Beginning</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-serif font-medium text-ink">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-maroon-text transition-colors whitespace-nowrap shrink-0 tracking-wide hover:underline decoration-[#B89555] underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Language Toggle + Invitation card trigger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Re-open invitation card */}
            <button
              onClick={onReopenInvitation}
              type="button"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-serif text-maroon-text hover:text-terracotta-text transition-colors whitespace-nowrap"
              title="View the opening invitation card"
            >
              <Mail className="w-3.5 h-3.5 text-[#B89555]" />
              <span>{isHindi ? 'कार्ड देखें' : 'View Card'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              type="button"
              aria-label="Toggle language between English and Hindi"
              className="px-2.5 py-1 text-xs font-serif font-medium border border-[#B89555]/40 rounded-full text-maroon-text hover:bg-surface-2 transition-colors whitespace-nowrap"
            >
              {isHindi ? 'English' : 'हिंदी'}
            </button>

            {featureFlags.themeToggle && (
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} isHindi={isHindi} />
            )}

            {/* Primary CTA */}
            <a
              href="#rsvp"
              className="px-4 py-2 text-xs sm:text-sm font-serif font-semibold text-on-dark bg-maroon hover:bg-[#853445] rounded-full transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] whitespace-nowrap shrink-0 border border-[#DFC18A]/40"
            >
              {isHindi ? 'उपस्थिति दर्ज करें' : 'RSVP Now'}
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 text-maroon-text hover:text-ink focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-[#B89555]/30 px-6 py-5 shadow-lg space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif font-medium text-ink hover:text-maroon-text transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#B89555]/20 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReopenInvitation();
              }}
              className="text-xs font-serif text-maroon-text flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#B89555]" />
              <span>{isHindi ? 'निमंत्रण कार्ड देखें' : 'View Card'}</span>
            </button>
            <button
              onClick={onToggleLanguage}
              className="text-xs font-serif font-medium px-3 py-1 border border-[#B89555]/40 rounded-full text-maroon-text"
            >
              {isHindi ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
