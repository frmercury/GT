const addQuantityButton = "//section//button[3]"
const quantityAmount = "//input[@class = 'Quantity_input__yBzs3']"
const totalPrice = "li:first-of-type > span ~ span"
const ACMECupElement = ":nth-child(2) > .space-x-4 > .flex-1 > a > .CartItem_productName__RYrlX"
const quarterZipElement = ":nth-child(1) > .space-x-4 > .flex-1 > a > .CartItem_productName__RYrlX"
const sizeOption = ":nth-child(2) > .mx-2"
const closeCartButton = "//span[text() = 'Close']"
const proceedToCheckoutButton ="//a[text()='Proceed to Checkout']"


export default class CartSidebar {
    addQuantity(amount) {
        for (var i = 0; i < (amount - 1); i++) {
            cy.clickOnElement(addQuantityButton)
        }
        // cy.get(quantityAmount).should('have.value', amount)
        cy.get(totalPrice).should('have.text', '$' + parseFloat(amount*25).toFixed(2))
        return this
    }

    checkItems() {
        cy.get(ACMECupElement).should('be.visible')
        cy.get(quarterZipElement).should('be.visible')
        cy.get(sizeOption).should('have.text', 'M')
        cy.get(totalPrice).should('have.text', '$' + parseFloat(215).toFixed(2))

        return this
    }

    proceedToCheckout(){
        cy.clickOnElement(proceedToCheckoutButton)
    }

    closeCart() {
        cy.clickOnElement(closeCartButton)
    }
}