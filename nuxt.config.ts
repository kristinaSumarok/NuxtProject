export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-09-29',
});