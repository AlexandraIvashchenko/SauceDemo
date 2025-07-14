import { expect } from '@playwright/test';
import { test } from '../../fixtures/BaseFile';
import {HttpClient} from "../../httpClient/HttpClient";

test('item can be added to the cart', async ({pm}) => {
    await pm.product.goto();
    expect(pm.product.getCurrentUrl()).toContain('/inventory.html')
    await expect(pm.product.addToCartButton('sauce-labs-backpack')).toBeVisible({timeout: 2000});
    await pm.product.addToCart('sauce-labs-backpack');
    await expect(pm.product.cartButton).toBeVisible();
    await expect(pm.product.itemsNumberInTheCart).toHaveText('1');
    await expect(pm.product.addToCartButton('sauce-labs-bike-light')).toBeVisible({timeout: 3000});
    await pm.product.addToCart('sauce-labs-bike-light');
    await expect(pm.product.itemsNumberInTheCart).toHaveText('2');
    await expect(pm.product.removeButton('sauce-labs-backpack')).toBeVisible({timeout:2000});
    await pm.product.removeItemFromCart('sauce-labs-backpack');
    await expect(pm.product.itemsNumberInTheCart).toHaveText('1')
});

test('add item to cart via HTTP client', async ({ pm }) => {
    await pm.product.goto();
    await pm.httpClient.addItemToCart('4');
    let cart = await pm.httpClient.getCartContents();
    expect(cart).toContain('4');
    await pm.httpClient.addItemToCart('0')
    cart = await pm.httpClient.getCartContents();
    expect(cart).toEqual(['4', '0'])
    await pm.httpClient.clearCart();
});


