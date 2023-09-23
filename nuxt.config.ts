export default defineNuxtConfig({
  // @ts-ignore
  css: ['@/assets/main.css'],
  components : [{path: '@/components', pathPrefix : false}],
  modules: ['nuxt-swiper', '@pinia/nuxt', '@element-plus/nuxt', 'nuxt-simple-sitemap'],
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
        { name : "google-site-verification", content: "cji91_zS7hsO9du2rkxUfEC0Hjx8RkSK9tOfKlvawOs" }
      ],
      link : [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  env: {
    API_URL: process.env.API_URL
  },
  site: {
    url: 'https://www.cuiabaimports.com/',
  },
})