/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Barlow: ["Barlow Condensed", "sans-serif"]
    },
    extend: {
      colors: {
        darkgray: '#2C3333',
        darkgreen: '#395B64',
        mediumgreen: '#A5C9CA',
        lightgreen: '#E7F6F2'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
