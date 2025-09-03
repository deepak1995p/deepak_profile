import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border border-white/30 rounded-md text-sm text-white hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
