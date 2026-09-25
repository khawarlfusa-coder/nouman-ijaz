/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#0B0B0F',
          850: '#111116',
          800: '#181820',
          700: '#23232E',
          600: '#323242',
        },
        gold: {
          100: '#FDF8E7',
          200: '#F7EBC0',
          300: '#EFDA92',
          400: '#E4C361',
          500: '#CFA738',
          600: '#B08824',
          700: '#8C6718',
        },
        champagne: '#E5D3B3',
        platinum: '#E2E4E9',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(90deg, #CFA738 0%, #F7EBC0 50%, #CFA738 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
