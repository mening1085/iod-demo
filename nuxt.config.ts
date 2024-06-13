// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // add css like this
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "nuxt-icon",
    "nuxt-aos",
    "@pinia/nuxt",
  ],
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
});
