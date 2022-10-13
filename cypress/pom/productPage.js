import BasePage from "./basePage";
import cartSidebar from "./cartSidebar";

const addToCartButton = "//button[@aria-label = 'Add to Cart']"

export default new class ProductPage extends BasePage {

    constructor() {
        super()
        this.cartSidebar = new cartSidebar()
    }

    selectItemSize(size) {
        cy.get(`button:contains('${size}')`).click()
        return this
    }

    addToCart() {
        cy.clickOnElement(addToCartButton)
        return this.cartSidebar
    }
}