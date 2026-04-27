import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mcdonalds: '#DA291C',
        aw: '#F5A623',
        burgerking: '#F5871F',
        wendys: '#E2203D',
        chipotle: '#A81612',
        subway: '#009B44',
        mrsub: '#E31937',
      },
      backgroundImage: {
        'arena-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(234, 179, 8, 0.08) 0%, transparent 60%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fill-bar': 'fill-bar 0.8s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(234, 179, 8, 0.8)' },
        },
        'fill-bar': {
          from: { width: '0%' },
          to: { width: 'var(--bar-width)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
