export default defineNuxtConfig({
  // @ts-ignore
  css: ['@/assets/main.css'],
  components : [{path: '@/components', pathPrefix : false}],
  modules: ['nuxt-swiper'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})