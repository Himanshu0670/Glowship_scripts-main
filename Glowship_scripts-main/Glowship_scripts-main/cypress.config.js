const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'c349z8',
  defaultCommandTimeout : 10000,
  viewportWidth: 1250,
  viewportHeight: 660,
  "requestTimeout":90000,
  "responseTimeout":60000,
  
  //"retries":3,
  e2e: {
    
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      
    },
  },

  
})
