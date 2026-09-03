/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#1a3a2a',
          mid: '#2d5a40',
          light: '#3d7a55',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          pale: '#f5e8c0',
        },
        ivory: '#faf7f0',
        cream: '#f2ead8',
        ink: {
          DEFAULT: '#1a1a1a',
          mid: '#4a4a4a',
          light: '#8a8a7a',
        },
        footer: '#0d1f16',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
