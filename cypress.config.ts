import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    trashAssetsBeforeRuns: true,
    video: false,
    testIsolation: true,
    setupNodeEvents(on, config) {
    },
  },
});
