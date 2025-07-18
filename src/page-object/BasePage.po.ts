import {Page} from "@playwright/test";

export abstract class BasePagePo{
    protected constructor(protected page: Page, protected uri: string) {
    }

    async goto(){
         await this.page.goto(this.uri);
    }

    getCurrentUrl(){
        return this.page.url();
    }
}