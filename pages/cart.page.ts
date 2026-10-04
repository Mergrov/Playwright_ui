import { Page, expect, Locator } from "@playwright/test";
 
export class CartPage {
  checkoutButton: Locator
  
  constructor(protected page: Page) {
 
  this.checkoutButton = this.page.locator("#cart_checkout1");
  }
 
  async clickCheckoutButton(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
      /A place to practice your automation skills!/
  } 
}