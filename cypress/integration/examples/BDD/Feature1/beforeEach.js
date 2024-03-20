import { Given,When,Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.fixture('example').then(function(data) {
    this.data = data
    cy.log(this.data.productName)
  })
})