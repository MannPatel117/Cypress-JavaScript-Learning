describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        Cypress.config('experimentalSessionAndOrigin', true)
        // Cypress.config().e2e.experimentalSessionAndOrigin = true
        Cypress.e2e.experimentalSessionAndOrigin=true
       cy.get("#opentab").invoke('removeAttr','target').click();
 
       cy.session("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       })
    });
});