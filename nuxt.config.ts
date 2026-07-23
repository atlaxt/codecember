import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/content',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode',
  },
})
