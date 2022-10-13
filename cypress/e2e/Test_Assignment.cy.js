import checkOutPage from "../pom/informationPage"
import featuredPage from "../pom/featuredPage"
import mainPage from "../pom/mainPage"
import newArrivalsPage from "../pom/newArrivalsPage"

describe('Assignment Suite', function () {
    it('Add item Test', () => {
        cy.visit('')
        mainPage
            .headerBar
                .openNewArrivalsNavBar()
        newArrivalsPage
            .openItemByName("ACME Cup")
            .addToCart()
            .addQuantity(5)
            .closeCart()
        mainPage
            .headerBar
                .openFeaturedNavBar()
        featuredPage
            .openItemByName("Quarter Zip")
            .selectItemSize("m")
            .addToCart()
            .checkItems()
            .proceedToCheckout()
        checkOutPage
            .fillContactInformation()
            .continiueToShipping()
            .chooseShippingMethod()
            .continueToPayment()
            .checkPaymentStatus() 
    })
})