/// <reference types="cypress" />
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
import neatCSV from 'neat-csv';
let productName
describe('JWT Session', () => {
  it('is logged in through local storage', async() => {

    cy.LoginAPI().then(function(){
      cy.visit("https://rahulshettyacademy.com/client",{
       onBeforeLoad :function(window)
       {
         window.localStorage.setItem('userLogin',Cypress.env('token'))
       }
      })       
    })
    cy.get(".card-body b").eq(1).then(function(ele){
      productName =  ele.text();
   })
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("ind")
    cy.get('.ta-results button').each(($e1, index, $list) => {
      if($e1.text()===" India")
      {
         cy.wrap($e1).click()
      }
  })
   cy.get(".action__submit").click();
   cy.wait(2000)
   cy.get("tr> button:nth-child(1)").eq(1).click();    
   const fileName = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_mann.xlsx"
   cy.task('excelToJsonConverter',fileName).then(function(result)
    {
      cy.log(result.data[1].A);
      expect(productName).to.equal(result.data[1].B);
    })
    cy.readFile(fileName).then(function(text)
    {
      expect(text).to.include("dsaf");
    })

})
})
