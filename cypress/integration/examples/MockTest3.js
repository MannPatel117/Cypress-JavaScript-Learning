/// <reference types="Cypress" />
describe('My First Test Suite', function() 
{
it('My FirstTest case',function() {
   cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      "name": "Learn Applum Automation with Java",
      "isbn": "bcdssssss",
      "aisle": "2257",
      "author": "John Foe"
   }).then(function(response){
      expect(response.body).to.have.property("Msg","successfully added")
   })
})
})