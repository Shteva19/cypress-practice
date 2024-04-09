/// <reference types = "cypress" /> 
describe('example to-do app', () => {

    it("test with empty username and password", () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('input#username').clear().type('        ');
      cy.get('input#password').clear().type('        ');
      cy.get('button[type="submit"]').click();
      cy.get('div#flash').should('have.text', `
      Your username is invalid!
      `)
    })
  
  })


// /// <reference types="cypress" />
// describe('example to-do app', () => {
//   it("Test1", () => {
//       cy.visit("https://the-internet.herokuapp.com/login");
//       cy.get('input#username').type('tomsmith');
//       cy.get('input#password').type('qwerty{enter}');
//       cy.get('div#flash').should('have.text', '\n            Your password is invalid!\n            ×\n          ');
//   })

// })

// describe('example to-do app', () => {
//   it("Test2", () => {
//       cy.visit("https://the-internet.herokuapp.com/login");
//       cy.get('input#username').type('11231223');
//       cy.get('input#password').type('qwerty{enter}');
//       cy.get('div#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ');
//   })

// })


/// <reference types = "cypress" /> 
describe('example to-do app', () => {

  it("test with empty username and password", () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input#username').clear().type('SHHSJAJ');
    cy.get('input#password').clear().type('SHHSJKAKAKA');
    cy.get('button[type="submit"]').click();
    cy.get('div#flash').should('have.text', `
    Your username is invalid!
    `)
  })

})



describe('example to-do app', () => {

  it("test with empty username and password", () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input#username').clear().type('        ');
    cy.get('input#password').clear().type('        ');
    cy.get('button[type="submit"]').click();
    cy.get('div#flash').should('have.text', `
    Your username is invalid!
    `);
    cy.contains("Your username is invalid!"); // добавленная команда
  })

});