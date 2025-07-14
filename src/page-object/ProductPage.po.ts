import { Page, Locator } from "@playwright/test";
import {BasePagePo} from "./BasePage.po";

export class ProductPagePo extends BasePagePo{

    constructor(page: Page) {
        super(page, '/inventory.html')
    }

    addToCartButton(itemName: string): Locator {
        return this.page.locator(`[data-test="add-to-cart-${itemName}"]`);
    }

    async addToCart(itemName: string) {
        await this.addToCartButton(itemName).click();
    }

    get cartButton(): Locator {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    get itemsNumberInTheCart(): Locator {
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }

    removeButton(itemName: string): Locator {
        return this.page.locator(`[data-test="remove-${itemName}"]`);
    }

    async removeItemFromCart(itemName: string) {
        await this.removeButton(itemName).click();
    }

}
