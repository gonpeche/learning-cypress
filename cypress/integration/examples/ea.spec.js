/// <reference types="Cypress" />

describe("Testing of EA App", () => {
    it("Login application", () => {
        cy.visit("https://grid.layoutit.com/");

        cy.contains("Add").click()

        cy.get('[data-col="1"] > .remove-button').click()
    });
})