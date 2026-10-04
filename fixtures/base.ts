import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutConfirmationPage } from "../pages/checkout.confirmation.page";
import {StoreforntPage} from "../pages/storefront.page"
import {SpecificProduct} from "../pages/specific.product.page"

 
type Fixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
  cartPage: CartPage;
  checkoutConfirmationPage: CheckoutConfirmationPage;
  storefrontPage: StoreforntPage;
  specificProductPage: SpecificProduct;

};
 
export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
   cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutConfirmationPage: async ({ page }, use) => {
    await use(new CheckoutConfirmationPage(page));
  },
  storefrontPage: async ({ page }, use) => {
    await use(new StoreforntPage(page));
  },
  specificProductPage: async ({ page }, use) => {
    await use(new SpecificProduct(page));
  },
});