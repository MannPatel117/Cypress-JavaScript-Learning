/// <reference types="Cypress" />
import 'cypress-iframe'
describe('My Eigth Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.wait(5000)
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
// cy.visit("https://www.rahulshettyacademy.com/mentorship")
// cy.get("h1[class*='pricing-title']").should('have.length',2)
})
})