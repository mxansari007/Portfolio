/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '17': '17deg',
        '135': '135deg'
      },
      transformOrigin: {
        'origin-1/2': '50% 50%',
      }
    },
  },
  plugins: [],
}