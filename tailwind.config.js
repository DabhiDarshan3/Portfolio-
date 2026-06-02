/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          50: '#EEEEFF',
          100: '#C7C8FC',
          200: '#A5A7F9',
          300: '#8385F6',
          400: '#6366F1',
          500: '#4F51E8',
          600: '#3B3DCF',
          700: '#2E30A6',
          800: '#22247D',
          900: '#151754',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        accent: {
          DEFAULT: '#06B6D4',
          500: '#06B6D4',
          600: '#0891B2',
        },
        dark: {
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#162032',
          200: '#0F172A',
          300: '#0B1120',
          400: '#080D18',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1a0533 50%, #0F172A 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-sm': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-accent': '0 0 40px rgba(6, 182, 212, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.37)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 80px rgba(99,102,241,0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
