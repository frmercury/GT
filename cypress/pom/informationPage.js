import BasePage from "./basePage";
import shippingPage from "./shippingPage";

const emailField = "#checkout_email_or_phone"
const lastNameField = "#checkout_shipping_address_last_name"
const adressField = "#checkout_shipping_address_address1"
const cityField = "#checkout_shipping_address_city"
const postalCodeField = "#checkout_shipping_address_zip"
const continiueToShippingButton = "#continue_button"

export default new class CheckOutPage extends BasePage {
    fillContactInformation() {
            cy.get(emailField).type("test@test.com")
            cy.get(lastNameField).type("testLastName")
            cy.get(adressField).type("testAdress")
            cy.get(cityField).type("testCity")
            cy.get(postalCodeField).type("01001")
            cy.saveLocalStorage('info')
        return this
    }

    continiueToShipping() {
        cy.get(continiueToShippingButton).click
        cy.restoreLocalStorage('info');
        return shippingPage
    }
}