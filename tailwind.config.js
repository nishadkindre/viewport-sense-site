/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brutalist Dark Theme Palette
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-muted': '#888888',
        'accent-primary': '#ff6b35',
        'accent-secondary': '#00ff88',
        'accent-tertiary': '#ff3366',
        'accent-code': '#ffd700',
        'border-primary': '#333333',
        'border-secondary': '#222222',
        'border-accent': '#ff6b35',
      },
      fontWeight: {
        'black': '900',
        'extrabold': '800',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #ff6b35',
        'brutal-hover': '12px 12px 0px 0px #ff6b35',
        'brutal-active': '4px 4px 0px 0px #ff6b35',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}