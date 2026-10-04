import { Page, expect, Locator } from "@playwright/test";
 
export class SpecificProduct {
  addProductToCartButton: Locator
  
  constructor(protected page: Page) {
 
  this.addProductToCartButton = this.page.getByText("Add to cart");
  }
 
  async addProductToCart(): Promise<void> {
    {
    await expect(this.addProductToCartButton).toBeVisible();
    await this.addProductToCartButton.click();
    }
  }
 
}