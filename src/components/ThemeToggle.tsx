import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  isHindi?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle, isHindi = false }) => {
  const label = isDark
    ? (isHindi ? 'लाइट मोड' : 'Switch to light mode')
    : (isHindi ? 'डार्क मोड' : 'Switch to dark mode');
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="p-2 rounded-full border border-[#B89555]/40 text-maroon-text hover:bg-surface-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B89555]/40"
    >
      {isDark ? <Sun className="w-4 h-4 text-[#DFC18A]" /> : <Moon className="w-4 h-4 text-[#B89555]" />}
    </button>
  );
};
