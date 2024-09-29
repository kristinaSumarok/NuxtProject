import { corePlugins } from '#tailwind-config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    '/assets/css/tailwind.css',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    apply: true,
  },
  plugins: [
  {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}

