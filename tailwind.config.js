/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#1D2D44',
          100: '#16263D',
          200: '#112036',
          300: '#0E1B2E',
          400: '#0C1828',
          500: '#0A192F',
          600: '#091624',
          700: '#07111B',
          800: '#060E18',
          900: '#040B14',
        },
        electric: {
          50: '#E6F2FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66AEFF',
          400: '#3393FF',
          500: '#007BFF',
          600: '#0066CC',
          700: '#004D99',
          800: '#003366',
          900: '#001A33',
        },
        signal: {
          500: '#E63946',
          600: '#D62F3D',
        },
        arctic: '#F8FAFC',
        steel: {
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(10, 25, 47, 0.08)',
        'card': '0 4px 24px rgba(10, 25, 47, 0.06)',
        'glow': '0 0 24px rgba(0, 123, 255, 0.3)',
        'emergency-glow': '0 0 32px rgba(230, 57, 70, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 57, 70, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 57, 70, 0.6)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
