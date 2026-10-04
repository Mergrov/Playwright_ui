import { Page, expect, Locator } from "@playwright/test";
 
export class MainPage {
  loginOrRegisterButton: Locator
  
  constructor(protected page: Page) {
 
  this.loginOrRegisterButton = this.page.locator("#customer_menu_top");
  }
 
  async openMainPage(): Promise<void> {
    await this.page.goto("https://automationteststore.com/");
    await expect(this.page).toHaveTitle(
      /A place to practice your automation skills!/
    );
  }
 
  async clickLoginOrRegisterButton(): Promise<void> {
    await expect(this.loginOrRegisterButton).toBeVisible();
    await this.loginOrRegisterButton.click();
    await expect(this.page).toHaveURL(/.*account/);
  }
}