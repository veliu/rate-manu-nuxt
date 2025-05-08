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
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "nuxt-twemoji",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    manifest: {
      name: "Rate Manu",
      short_name: "RateManu",
      theme_color: "#4ADE78",
      icons: [
        {
          src: "android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
});