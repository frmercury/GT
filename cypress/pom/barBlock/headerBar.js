const newArrivalsNavBarLink = "//a[contains(@href, 'clothes')]"
const featuredNavBarLink = "//a[contains(@href, 'featured')]"
const allNavBarLink = "//a[text() = 'All']"

export default class HeaderBar {
    openAllNavBar() {
        cy.clickOnElement(allNavBarLink)
        cy.url().should('be', 'baseUrl/search')
    }
    openNewArrivalsNavBar() {
        cy.clickOnElement(newArrivalsNavBarLink)
        cy.url().should('include', '/clothes')
    }
    openFeaturedNavBar() {
        cy.clickOnElement(featuredNavBarLink)
        cy.url().should('include', '/featured')
    }
}