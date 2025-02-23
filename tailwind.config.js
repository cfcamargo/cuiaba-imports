/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('/home_banner.png')",
        'tecnical-cel': "url('/tecnical_cel.png')",
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
}
