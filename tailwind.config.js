import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
        fantasy: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        void: '#F2F5F3',
        nature: {
          100: '#E6EBE6',
          200: '#B8C6B9',
          300: '#7D9D89',
          400: '#2F4858',
        },
        'warm-accent': '#C08552',
        surface: '#ffffff',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(47, 72, 88, 0.05)',
        'glass-hover':
          '0 12px 40px 0 rgba(47, 72, 88, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.8)',
        glow: '0 0 20px rgba(125, 157, 137, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        morph: 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
    },
  },
  plugins: [],
}
