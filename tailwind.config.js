/** @type {import('tailwindcss').Config} */
export default {

  content:["./src/**/*.{html,js}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
  './src/**/*.{js,jsx,ts,tsx}',

],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

