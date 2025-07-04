import { expect, Page } from '@playwright/test';
import { test } from '../fixtures/BaseFile';
import {LoginPage} from "../page-object/LoginPage";

test('login wth invalid user credentials', async ({ page, invalidUserData }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    //Проверяем, что поле "Username" видно
    await expect(loginPage.getUsernameField()).toBeVisible();

    //Заполняем поле "Username"
    await loginPage.getUsernameField().fill(invalidUserData.username);

    //Проверяем, что поле "Password" видно
    await expect(loginPage.getPasswordField()).toBeVisible();

    //Заполняем поле "Password"
    await loginPage.getPasswordField().fill(invalidUserData.password);

    //Проверяем, что кнопка "Login" видно
    await expect(loginPage.getLoginButton()).toBeVisible();

    //Нажимаем на кнопку "Login"
    await loginPage.clickLoginButton();

    //Проверяем, что сообщение об ошибке появилось
    await expect(loginPage.getErrorMessage()).toBeVisible();
});

test('login wth valid user credentials', async ({ page, validUserData }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(loginPage.getUsernameField()).toBeVisible();
    await loginPage.getUsernameField().fill(validUserData.username);
    await expect(loginPage.getPasswordField()).toBeVisible();
    await loginPage.getPasswordField().fill(validUserData.password);
    await expect(loginPage.getLoginButton()).toBeVisible();
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});