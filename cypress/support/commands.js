Cypress.Commands.add('clickOnElement', selector => {
    cy.xpath(selector)
            .should('be.visible')
            .click()
})
Cypress.Commands.add('getElementValue', selector => {
    cy.xpath(selector)
            .should('be.visible')
            .get()
})