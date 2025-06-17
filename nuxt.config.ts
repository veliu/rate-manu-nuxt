// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Rate Manu",
      meta: [
        {
          name: "description",
          content: "Rate Manu",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
    },
  },
  routeRules: {
    "/": { swr: false },
  },
  experimental: { asyncContext: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/ui-pro",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "nuxt-twemoji",
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  devtools: { enabled: true },
});
