export default defineNuxtConfig({
  // @ts-ignore
  css: ['@/assets/main.css'],
  components : [{path: '@/components', pathPrefix : false}],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})