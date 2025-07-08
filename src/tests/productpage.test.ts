import { expect } from '@playwright/test';
import { test } from '../fixtures/BaseFile';

test('item can be added to the cart', async ({pm}) => {
    await pm.Product.goto();
    await expect(pm.Product.getAddToCartButton('sauce-labs-backpack')).toBeVisible({timeout: 2000});
    await pm.Product.addToCart('sauce-labs-backpack');
    await expect(pm.Product.getCartButton()).toBeVisible();
    await expect(pm.Product.getItemsNumberInTheCart()).toHaveText('1');
    await expect(pm.Product.getAddToCartButton('sauce-labs-bike-light')).toBeVisible({timeout: 2000});
    await pm.Product.addToCart('sauce-labs-bike-light');
    await expect(pm.Product.getItemsNumberInTheCart()).toHaveText('2');
    await expect(pm.Product.getRemoveButton('sauce-labs-backpack')).toBeVisible({timeout:2000});
    await pm.Product.removeItemFromCart('sauce-labs-backpack');
    await expect(pm.Product.getItemsNumberInTheCart()).toHaveText('1')
});
