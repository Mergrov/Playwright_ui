import {test, expect} from "@playwright/test"
 
test('example', async ({page}) => {
const userNameField = await page.locator("#user-name")
const userPasswordField = await page.locator("#password")
const loginButton = await page.locator("#login-button")

let valueOfUserName
let valueOfUserPassword

await page.goto("https://www.saucedemo.com/")
expect (page.url()).toEqual("https://www.saucedemo.com/")

valueOfUserName = "standard_user"
valueOfUserPassword = "secret_sauce"
await userNameField.fill(valueOfUserName)
userPasswordField.fill(valueOfUserPassword)
loginButton.click()

})