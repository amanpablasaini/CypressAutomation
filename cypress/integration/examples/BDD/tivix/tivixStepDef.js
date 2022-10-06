/// <reference types-"Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I open Tvix car Rental page',()=>
{
    cy.visit("http://qalab.pl.tivixlabs.com/")
})

When('I select country',()=>
{
    cy.get('#country').select('Germainy')
})

When('I select City',()=>
{
    cy.get('#city').select('Berlin')
})

And('I enter model',()=>
{
    cy.get('#model').type('Toyota')
})


And('I select pick up date for car',()=>
{
    cy.get('#pickup').click().type('2022-10-12')
})

And('I select Drop off date for Car',()=>
{
    cy.get('#dropoff').click().type('2022-10-17')
})

Then('I Submit the information and get list of cars',()=>
{
    cy.get('.btn').click()
})



