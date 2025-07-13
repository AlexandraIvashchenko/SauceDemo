import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseHttpClient {
    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(url: string): Promise<APIResponse> {
        return this.request.get(url);
    }

    async post(url: string, data: any): Promise<APIResponse> {
        return await this.request.post(url,{data});
    }

    async put(url: string, data: any): Promise<APIResponse> {
        return await this.request.put(url,{data});
    }

    async delete(url: string): Promise<APIResponse> {
        return await this.request.delete(url);
    }
}