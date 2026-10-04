import { Page, expect, Locator } from "@playwright/test";
 
export class StoreforntPage {
  apparelButton: Locator
  tshirtButton: Locator
  casualBaseballShritLink: Locator
  goToCartButton: Locator
  
  constructor(protected page: Page) {
 
  this.apparelButton = this.page.getByRole("link", {name: "Apparel & accessories"});
  this.tshirtButton = this.page.getByRole("link", {name:"    T-shirts"});
  this.casualBaseballShritLink = this.page.getByRole("link", {name: "Casual 3/4 Sleeve Baseball T-Shirt"})
  this.goToCartButton = this.page.getByRole("link", {name: "Cart"})
  }
 
  async casualBaseballShirtLink(): Promise<void> {
    expect(this.apparelButton).toBeVisible()
    await this.apparelButton.hover()
    expect(this.tshirtButton).toBeVisible()
    await this.tshirtButton.click()
    expect(this.casualBaseballShritLink).toBeVisible()
    await this.casualBaseballShritLink.click();
      /A place to practice your automation skills!/
  }

  async goToCart(): Promise<void> {
    await(this.goToCartButton).click()
  }
 
}