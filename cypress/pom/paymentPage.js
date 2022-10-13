import BasePage from "./basePage";

const paymentStatusMessage = "div > div > p"

export default new class PaymentPage extends BasePage {

    checkPaymentStatus() {
        cy.get(paymentStatusMessage).should('have.text', 'This store can’t accept payments right now')
    }
    
}