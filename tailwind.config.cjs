/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '5': '5deg',
      },
      margin: {
        '20p': '20%',
      }
    },
  },
  plugins: [],
}
