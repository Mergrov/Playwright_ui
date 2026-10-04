import { test as setup, expect } from '@playwright/test';
import path from 'path';
import 'dotenv/config';
const authFile = path.join(__dirname, '.././auth/user.json');



setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://automationteststore.com/index.php?rt=account/login');
 await page.locator("#loginFrm_loginname").fill(process.env.USER_NAME as string);
  await page.locator("#loginFrm_password").fill(process.env.PASSWORD as string);
  await page.getByRole("button", { name: " Login" }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
 // await page.waitForURL('https://automationteststore.com/index.php?rt=account/login');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
