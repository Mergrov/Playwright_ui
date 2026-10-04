import {test, expect} from "@playwright/test"
 
test('example', async ({ page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#firstName").fill("test")
    //[] - przekazywanie w nawiasach ulatwia znajdowanie bez id
    await page.locator('[placeholder="Last Name"]').fill("placeholder")

    const maleRadioButton = await page.locator("#gender-radio-1")
    await maleRadioButton.check()
    await expect(maleRadioButton).toBeChecked
    const femaleRadioButton = await page.getByRole('radio', {name:"Female"})
    await femaleRadioButton.check()
    await expect(maleRadioButton).not.toBeChecked()
    await expect(femaleRadioButton).toBeChecked()

    await page.locator(".subjects-auto-complete__input").fill("Math")

    await page.locator("#userNumber").fill("1231231231")

    await page.locator("#submit").click()

    await expect(page.locator("#example-modal-sizes-title-lg")).toHaveText("Thanks for submitting the form")
    await page.pause()
})
//TODO finish cases: https://docs.google.com/document/d/12X7v9pfl7pSy-TQHDE2qnVFcJTDw_q5h/edit
test('saucelabs TC-01', async ({page}) => {
const userNameField = page.locator("#user-name")
const userPasswordField = page.locator("#password")
const loginButton = page.locator("#login-button")

let valueOfUserName
let valueOfUserPassword

await page.goto("https://www.saucedemo.com/")
expect (page.url()).toEqual("https://www.saucedemo.com/")

valueOfUserName = "standard_user"
valueOfUserPassword = "secret_sauce"
await userNameField.fill(valueOfUserName)
await userPasswordField.fill(valueOfUserPassword)
await loginButton.click()
expect (page.url()).toEqual("https://www.saucedemo.com/inventory.html")
expect (page.locator('[data-test="secondary-header"]')).toContainText("Products")
})



test('saucelabs TC-02', async ({page}) => {
const userNameField = await page.locator("#user-name")
const userPasswordField = await page.locator("#password")

let valueOfUserName
let valueOfUserPassword

await page.goto("https://www.saucedemo.com/")
expect (page.url()).toEqual("https://www.saucedemo.com/")

valueOfUserName = "standard_user"
valueOfUserPassword = "secret_sauce"
await userNameField.fill(valueOfUserName)
await userPasswordField.fill(valueOfUserPassword)
await page.keyboard.press("Enter")
expect (page.url()).toEqual("https://www.saucedemo.com/inventory.html")

})


test('saucelabs TC-03', async ({page})=> {
const userNameField = page.locator("#user-name")
const userPasswordField = page.locator("#password")
const loginButton = page.locator("#login-button")
let valueOfUserName
let valueOfUserPassword

await page.goto("https://www.saucedemo.com/")
expect (page.url()).toEqual("https://www.saucedemo.com/")

await loginButton.click()

expect(page.locator('[class="error-message-container error"]')).toContainText("Epic sadface: Username is required")
expect(page.locator("#user-name")).toContainText("http://www.w3.org/2000/svg")
//expect(page.locator("#password")).toContainText("http://www.w3.org/2000/svg")

})

test('saucelabs TC-04', async ({page})=> {

const userNameField = page.locator("#user-name")
const userPasswordField = page.locator("#password")
const loginButton = page.locator("#login-button")
let valueOfUserName
let valueOfUserPassword

await page.goto("https://www.saucedemo.com/")
expect (page.url()).toEqual("https://www.saucedemo.com/")



})
//TODO: finish cases: https://docs.google.com/document/d/12X7v9pfl7pSy-TQHDE2qnVFcJTDw_q5h/edit

test.only("wait for response", async ({ page }) => {
  await page.goto("https://automationteststore.com/index.php?rt=account/login");
  await page.locator("#loginFrm_loginname").fill("jit-tests");
  await page.locator("#loginFrm_password").fill("jit-tests");
  await page.getByRole("button", { name: " Login" }).click();
  const responsePromise = page.waitForResponse(
    (response) =>
      response.url() ===
        "https://automationteststore.com/index.php?rt=r/product/product/addToCart" &&
      response.status() === 200 &&
      response.request().method() === "GET",
  );
  await responsePromise;
});