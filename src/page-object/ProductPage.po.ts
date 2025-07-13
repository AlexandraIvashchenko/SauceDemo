import { Page, Locator } from "@playwright/test";
import {BasePagePo} from "./BasePage.po";

export class ProductPagePo extends BasePagePo{

    constructor(page: Page) {
        super(page, '/inventory.html')
    }

    getAddToCartButton(itemName: string): Locator {
        return this.page.locator(`[data-test="add-to-cart-${itemName}"]`);
    }

    async addToCart(itemName: string) {
        await this.getAddToCartButton(itemName).click();
    }

    getCartButton(): Locator {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    getItemsNumberInTheCart(): Locator {
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }

    getRemoveButton(itemName: string): Locator {
        return this.page.locator(`[data-test="remove-${itemName}"]`);
    }

    async removeItemFromCart(itemName: string) {
        await this.getRemoveButton(itemName).click();
    }

}
