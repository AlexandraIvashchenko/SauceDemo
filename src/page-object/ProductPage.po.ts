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

    getSortButton(): Locator{
        return this.page.locator('[data-test="product-sort-container"]')
    }

    async selectSortButton(){
        await this.getSortButton().click();
    }

    getSortElementPriceLowToHigh(): Locator{
        return this.page.locator('[data-test="product-sort-container"] option[value="lohi"]')
    }

    async selectPriceLowToHigh(){
        await this.getSortElementPriceLowToHigh().click();
    }

    async getAllProductPrices(): Promise<number[]> {
        const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
        return priceTexts.map(text => parseFloat(text.replace('$', '')));
    }

    async getMinProductPrice(): Promise<number> {
        const prices = await this.getAllProductPrices();
        return Math.min(...prices);
    }

    async getFirstProductPrice(): Promise<number> {
        const firstText = await this.page.locator('.inventory_item_price').first().textContent();
        return parseFloat(firstText?.replace('$', '') || '0');
    }
}
