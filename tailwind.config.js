/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'home-banner': "url('/iphone15home.png')",
        'tecnical-cel': "url('/tecnical_cel.png')",
      },
      screens: {
        'xs': '360px',
      }
    },
  },
  plugins: [],
}

