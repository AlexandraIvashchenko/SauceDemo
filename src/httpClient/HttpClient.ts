import { Page } from '@playwright/test';

export class HttpClient {
    constructor(private page: Page) {}

    async addItemToCart(itemId: string): Promise<void> {
        await this.page.evaluate((id) => {
            const currentCart = JSON.parse(localStorage.getItem('cart-contents') || '[]');
            if (!currentCart.includes(id)) {
                currentCart.push(id);
                localStorage.setItem('cart-contents', JSON.stringify(currentCart));
            }
        }, itemId);
    }

    async getCartContents(): Promise<string[]> {
        return this.page.evaluate(() => {
            return JSON.parse(localStorage.getItem('cart-contents') || '[]');
        });
    }

    async clearCart(): Promise<void> {
        await this.page.evaluate(() => {
            localStorage.removeItem('cart-contents');
        });
    }
}