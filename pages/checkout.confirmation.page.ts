import { Page, expect, Locator } from "@playwright/test";
 
export class CheckoutConfirmationPage {
  confirmOrderButton: Locator

  
  constructor(protected page: Page) {
 
  this.confirmOrderButton = this.page.getByRole("Button", {name:"Confirm order"});
  }
 
  async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();

      /A place to practice your automation skills!/
  }
}