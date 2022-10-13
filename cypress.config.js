const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://demo.vercel.store/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true
  },
});