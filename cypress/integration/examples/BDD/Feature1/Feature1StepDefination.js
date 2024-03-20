import { Given,When,Then, Before } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'

    const homePage=new HomePage()
    const productPage=new ProductPage()

    
    Given('I open Ecommerce Page',() =>
    {
        cy.visit(Cypress.env('url')+"/angularpractice/")
    })

    // When I add items to Cart
    When('I add items to Cart', function ()
    {
        cy.log(this.data.productName)
        homePage.getShopTab().click()
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
        productPage.checkOutButton().click()  
    })

    //And Validate the total prices
    Then('Validate the total prices',()=>
    {
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount=$el.text()
        var res= amount.split(" ")
        res= res[1].trim()
        sum= Number(sum)+Number(res)
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res= amount.split(" ")
            var total= res[1].trim()
            expect(Number(total)).to.equal(sum)
        
        }) 
    })

    //Then select the country submit and verify Thankyou

    Then('Select the country and submit and verify success',()=>
    {
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
        {
           const actualText=element.text()
          expect(actualText.includes("Success")).to.be.true
        })
    })
