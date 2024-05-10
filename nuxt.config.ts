// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["./assets/scss/global.scss"],
  pinia: {
    storesDirs: ['store/**'],
  },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      link: [{ rel: 'icon', type: 'image/png', href: "/logo.webp" }]
    },
  },

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: [400, 500, 600, 700],
      }
    }],
    '@pinia-plugin-persistedstate/nuxt',
  ],

  devtools: { enabled: false },
  ssr: false,
})
