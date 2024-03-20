import { Before } from "@badeball/cypress-cucumber-preprocessor";
Before(() => {
  cy.fixture('form').then(function(data) {
    this.data = data
  })
})