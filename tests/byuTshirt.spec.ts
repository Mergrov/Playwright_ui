import {test} from "../fixtures/base"

//TODO dopisz asercje na kazdym kroku

test ("Buy Tshirt", async ({page, loginPage, mainPage, cartPage, 
    specificProductPage, storefrontPage, checkoutConfirmationPage}) => {

await mainPage.openMainPage()
await storefrontPage.casualBaseballShirtLink()
await specificProductPage.addProductToCart()
await cartPage.clickCheckoutButton()
await checkoutConfirmationPage.confirmOrder()

})