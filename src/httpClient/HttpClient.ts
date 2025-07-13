import { BaseHttpClient } from './BaseHttpClient';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class HttpClient extends BaseHttpClient {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async getInventoryPage(): Promise<string> {
        const response = await this.get('/inventory.html');
        return response.text();
    }

    async addItemToCart(itemId: string): Promise<APIResponse> {
        return this.post('/api/cart/add', {itemId});
    }

    async updateItemInTheCart(itemId: string):Promise<APIResponse> {
        return this.put('/api/cart/update', {itemId})
    }
}
