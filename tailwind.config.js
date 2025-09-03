export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  safelist: [
    'bg-yellow-400',
    'bg-blue-600',
    'bg-emerald-500',
    'hover:bg-yellow-500',
    'hover:bg-blue-700',
    'hover:bg-emerald-600'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
