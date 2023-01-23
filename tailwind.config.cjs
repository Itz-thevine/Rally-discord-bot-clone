/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
      },
      width: {
        'topMain': 'calc(100vw - 20rem)',
      }
    },
  },
  plugins: [],
}
