import {Page} from "@playwright/test";

export abstract class BasePagePo{
    constructor( protected page: Page,  protected uri: string) {
    }

    async goto(){
        console.log('>> GOTO:', this.uri);
         await this.page.goto(this.uri);
    }
}