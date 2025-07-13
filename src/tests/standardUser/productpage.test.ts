import { expect } from '@playwright/test';
import { test } from '../../fixtures/BaseFile';
import {HttpClient} from "../../httpClient/HttpClient";

test('item can be added to the cart', async ({pm}) => {
    await pm.product.goto();
    expect(pm.product.getCurrentUrl()).toContain('/inventory.html')
    await expect(pm.product.getAddToCartButton('sauce-labs-backpack')).toBeVisible({timeout: 2000});
    await pm.product.addToCart('sauce-labs-backpack');
    await expect(pm.product.getCartButton()).toBeVisible();
    await expect(pm.product.getItemsNumberInTheCart()).toHaveText('1');
    await expect(pm.product.getAddToCartButton('sauce-labs-bike-light')).toBeVisible({timeout: 2000});
    await pm.product.addToCart('sauce-labs-bike-light');
    await expect(pm.product.getItemsNumberInTheCart()).toHaveText('2');
    await expect(pm.product.getRemoveButton('sauce-labs-backpack')).toBeVisible({timeout:2000});
    await pm.product.removeItemFromCart('sauce-labs-backpack');
    await expect(pm.product.getItemsNumberInTheCart()).toHaveText('1')
});

test('add item to cart via HTTP client', async ({ pm }) => {
    await pm.product.goto();
    await pm.httpClient.addItemToCart('4');
    const cart = await pm.httpClient.getCartContents();
    expect(cart).toContain('4');
    await pm.httpClient.clearCart();
});


