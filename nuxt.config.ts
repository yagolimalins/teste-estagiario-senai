// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      'nuxt-viewport', {
      /* Viewport options */
    }
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  css: ['~/assets/scss/reset.scss', '~/assets/scss/main.scss']
})
