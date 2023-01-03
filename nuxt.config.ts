// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@kevinmarrec/nuxt-pwa"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  pwa: {
    workbox: {
      enabled: false,
    },
    manifest: {
      name: "CinemaGod",
      short_name: "CinemaGod",
      theme_color: "#f6f6f6",
      lang: "en",
    },
    meta: {
      name: "CinemaGod",
      theme_color: "#dddddd",
    },
  },
});
