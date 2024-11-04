import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
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
