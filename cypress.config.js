

const { defineConfig } = require("Cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  "video": true,
  "chromewebsecurity": false,
  "numTestsKeptInMemory": 0,
  "experimentalMemoryManagement": true,
  "requestTimeout":2000,
  "responseTimeout":2000,
 
 
 
  
  reporterOption:{
    charts: true,
    reportpagetitle: "GCMProject",
    embeddedscreenshot: true



  },



  //Global variable and Tags Used for all the test cases
  env: {
    devurl: "http://10.90.130.209:8083/auth",
    Tags: "@loginpositive"

   
  },
  
 e2e: {
   specPattern: "cypress/e2e/**/*.{feature,features}",
   
   setupNodeEvents(on,config) {
   
     on("file:preprocessor", cucumber());
     
     return config;
    
        },

        
        
         
      
 },
});














