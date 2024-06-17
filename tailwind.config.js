/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '150': '-30deg',
        '15' : '-15deg'
      },
      skew: {
        '30': '30deg',
        '6' :'6deg'
      }
    },
  },
  plugins: [],
}

