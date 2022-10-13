import BasePage from "./basePage";
import productPage from "./productPage";

const newArrivalsNavBar = "//a[contains(@href, 'clothes')]"

export default new class NewArrivalsPage extends BasePage {
    openItemByName(name) {
        cy.get(`h3 > span:contains('${name}')`).click()
        return productPage
    }
}