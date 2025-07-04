import { expect } from '@playwright/test';
import { ProductPage } from '../page-object/ProductPage';
import {LoginPage} from "../page-object/LoginPage";
import { test } from '../fixtures/BaseFile';

test('item can be added to the cart', async ({ page, validUserData }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.getUsernameField()).toBeVisible();
    await loginPage.getUsernameField().fill(validUserData.username);
    await expect(loginPage.getPasswordField()).toBeVisible();
    await loginPage.getPasswordField().fill(validUserData.password);
    await expect(loginPage.getLoginButton()).toBeVisible();
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const productPage = new ProductPage(page);

    // Проверяем, что можно добавить товар в корзину
    await (productPage.getAddToCartButton('sauce-labs-backpack')).click();

    //Проверяем, что кнопка "Cart" видна
    await expect(productPage.getCartButton()).toBeVisible();

    // Проверяем, что в корзине появился 1 товар
    await expect(productPage.getItemsNumberInTheCart()).toHaveText('1');

    //Добавляем еще один товар в корзину
    await (productPage.getAddToCartButton('sauce-labs-bike-light')).click();

    //Проверяем, что в корзине появился еще один товар
    await expect(productPage.getItemsNumberInTheCart()).toHaveText('2')

    //Удаляем товар из корзины
    await (productPage.removeItemFromCart('sauce-labs-backpack'))

    //Проверяем, что количество товаров уменьшилось на 1
    await expect(productPage.getItemsNumberInTheCart()).toHaveText('1')
});
