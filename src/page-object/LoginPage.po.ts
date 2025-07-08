import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";
import {BasePagePo} from "./BasePage.po";

export class LoginPagePo extends BasePagePo{

    constructor( page: Page) {
        super(page, '/')
    }

    getUsernameField(): Locator {
        return this.page.locator('[name="user-name"]');
    }

    getPasswordField(): Locator {
        return this.page.locator('[name="password"]');
    }

    getLoginButton(): Locator {
        return this.page.locator('[name="login-button"]');
    }

    async clickLoginButton() {
        await this.getLoginButton().click();
    }

    getErrorMessage(): Locator{
        return  this.page.locator('[data-test="error"]')
    }
}