import BasePage from "./basePage";
import productPage from "./productPage";

const newArrivalsNavBar = "//a[contains(@href, 'clothes')]"

export default new class FeaturedPage extends BasePage {
    openItemByName(name) {
        cy.wait(1000)
        cy.get(`h3 > span:contains('${name}')`).click()
        return productPage
    }
}