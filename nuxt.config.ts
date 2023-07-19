export default defineNuxtConfig({
  // @ts-ignore
  css: ['@/assets/main.css'],
  components : [{path: '@/components', pathPrefix : false}],
  modules: ['nuxt-swiper', '@pinia/nuxt', '@element-plus/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    title : 'Cuiabá Imports',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta : [
        { name : 'description', content : 'Descubra os melhores eletrônicos na nossa loja. Smartphones, TVs e mais. Produtos autênticos das melhores marcas. Entrega rápida. Atendimento ao cliente de qualidade. Visite-nos agora!'},
      ]
    }
  }
})