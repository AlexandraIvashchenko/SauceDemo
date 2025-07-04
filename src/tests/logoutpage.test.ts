import {LogoutPage} from "../page-object/LogoutPage";
import {test} from "../fixtures/BaseFile";
import {expect} from "@playwright/test";
import {LoginPage} from "../page-object/LoginPage";

test('user logout from the website', async ({ page, validUserData }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.getUsernameField()).toBeVisible();
    await loginPage.getUsernameField().fill(validUserData.username);
    await expect(loginPage.getPasswordField()).toBeVisible();
    await loginPage.getPasswordField().fill(validUserData.password);
    await expect(loginPage.getLoginButton()).toBeVisible();
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const logoutPage = new LogoutPage(page)

    //Проверяем, что навигационное меню видно
    await expect(logoutPage.clickMenuToGetLogoutButton()).toBeVisible();

    //Нажимаем на навигационное меню, чтобы проверить наличие кнопки "Logout"
    await expect(logoutPage.getLogoutButton()).toBeVisible();

    //Нажимаем кнопку "Logout"
    expect (logoutPage.clickLogoutButton());

    //Проверяем, что URL изменился
    expect(page.url()).toContain('https://www.saucedemo.com/')
});
