import { expect } from '@playwright/test';
import { test } from '../fixtures/BaseFile';

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
