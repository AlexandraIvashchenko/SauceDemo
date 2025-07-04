import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";

export class ProductPage{

    constructor(private page: Page) {
    }

    getAddToCartButton(addToCart: String): Locator {
        return this.page.locator(`[data-test="add-to-cart-${addToCart}"]`);
    }

    // async addItemToTheCart(addToCArt: string){
    //     await this.getAddToCartButton(addToCArt).click();
    // }

    getCartButton(): Locator{
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    getItemsNumberInTheCart(): Locator{
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }

    getRemoveButton(itemName: string): Locator {
        return this.page.locator(`[data-test="remove-${itemName}"]`);
    }

    async removeItemFromCart(itemName: string) {
        await this.getRemoveButton(itemName).click();
    }

}