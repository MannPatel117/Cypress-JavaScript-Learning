const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor, } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
async function setupNodeEvents(on, config) {

  config.db = {
    userName: "mannadmin",
    password: "@Mann2001",
    server: "mannserver.database.windows.net",
    options: {
        database: "Mann Cypress",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  on('task',{
    excelToJsonConverter(filePath)
    {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
    return result;
    }
})
  return config;
}

module.exports = defineConfig({
  projectId: "6krrfe",
  chromeWebSecurity: false,
  defaultCommandTimeout:4000,
  reporter: "mochawesome",
  env:{
    url: "https://www.rahulshettyacademy.com",
    formUrl: "http://devapp.torrentlabcloud.com/questionaire-form?project=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoyNDYsImlhdCI6MTcwMzEzNTI1NCwiZXhwIjoxNzA1NzI3MjU0fQ.TViOr-Zi0fxExCzcgbnKZlPPAK2ID6r5ArCPhY5rcxU"
  },
  e2e: {
    experimentalSessionAndOrigin: false,
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'
    
  },
});
