// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
