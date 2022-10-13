import BasePage from "./basePage";
import paymentPage from "./paymentPage"

const firstClassShMethod = "//*[@id = 'checkout_shipping_rate_id_usps-firstclasspackageinternationalservice-15_53']"
const priorirtyShMethod = "//*[@id = 'checkout_shipping_rate_id_usps-prioritymailinternational-58_26']"
const expressPriorirtyShMethod = "//*[@id = 'checkout_shipping_rate_id_usps-prioritymailexpressinternational-73_62']"
const continueToPaymentButton = "checkout_shipping_rate_id_usps-prioritymailexpressinternational-73_62"


export default new class ShippingPage extends BasePage {

    chooseShippingMethod() {
        cy.clickOnElement(priorirtyShMethod)
        return this
    }
    
    continueToPayment() {
        cy.clickOnElement(continueToPaymentButton)
        return paymentPage
    }
}