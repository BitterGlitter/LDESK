// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
     "@nuxtjs/tailwindcss",
    '@vesp/nuxt-fontawesome',
    ],
  fontawesome: {
      icons: {
        solid: ['magnifying-glass', 'user', 'users','calendar-plus','calendar-days'],
      }
    }
  })
