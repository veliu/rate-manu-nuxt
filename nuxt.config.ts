// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { swr: false },
  },
  experimental: { asyncContext: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "nuxt-twemoji",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
});
