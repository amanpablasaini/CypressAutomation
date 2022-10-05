/// <reference types-"Cypress" />


describe('My First Test Suite',function()
{

it('My FirstTest case',function(){


cy.visit("http://qalab.pl.tivixlabs.com/")

cy.wait(2000)


cy.get('#country').select('Germainy')
cy.get('#city').select('Berlin')
cy.get('#model').type('Toyota')
cy.get('#pickup').click().type('2022-10-12')
cy.get('#dropoff').click().type('2022-10-17')
cy.get('.btn').click()

})




    
} )