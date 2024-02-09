/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, ts}",
    "./index.html"
  ],
  theme: {
    boxShadow: {
      "shadow": "-1px -1px 1px 1px #fff, 1px 1px 1px 1px #00000094",
      "hit": "-1px -1px 1px 1px #fff inset, 1px 1px 1px 1px #00000094 inset",
    },
    extend: {},
  },
  plugins: [],
}