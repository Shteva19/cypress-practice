/// <reference types="cypress"/>
describe('Exercise 1', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    })
    it('Actions with Checkbox 2', () => {
        cy.get('input[type=checkbox]').last().should('be.checked');
        cy.get('input[type=checkbox]').last().uncheck();
        cy.get('input[type=checkbox]').should('not.be.checked');
    })
    it('Actions with Checkbox 1', () => {
        cy.get('input[type=checkbox]').first().check();
        cy.get('input[type=checkbox]').should('be.checked');
    })
})