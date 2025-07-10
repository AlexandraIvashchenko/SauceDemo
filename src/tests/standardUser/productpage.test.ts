import { expect } from '@playwright/test';
import { test } from '../../fixtures/BaseFile';
import * as timers from "node:timers";

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

test('sort items from low to high', async ({pm}) => {
    await pm.product.goto();
    expect(pm.product.getCurrentUrl()).toContain('/inventory.html');

    // Получаем цены до сортировки
    const firstPrice = await pm.product.getFirstProductPrice();

    // Проверка, что кнопка сортировки видима
    await expect(pm.product.getSortButton()).toBeVisible({timeout: 2000});
    await pm.product.selectSortButton();

    // Проверка, что пункт "Price (low to high)" появился
    await expect(pm.product.getSortElementPriceLowToHigh()).toBeVisible({timeout: 2000});
    await pm.product.selectPriceLowToHigh();

    //получаем цену после сортировки
    const minPrice = await pm.product.getMinProductPrice();

    // Проверяем, что первая цена после сортировки — минимальная
    expect(firstPrice).toBe(minPrice);
});


