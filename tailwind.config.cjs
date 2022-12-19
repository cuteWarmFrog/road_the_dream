/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'p200': '200%',
      },

      fontFamily: {
        raleway: ["Raleway Dots", "sans-serif"],
      },
      keyframes: {
        'backroundPan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      },
      animation: {
        'backroundPan': 'backroundPan 3s linear infinite',
      }
    },
  },
  plugins: [],
};
