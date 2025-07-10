import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";
import {BasePagePo} from "./BasePage.po";


export class LoginPagePo extends BasePagePo{

    constructor( page: Page) {
        super(page, '/inventory.html')
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

    getErrorMessage(): Locator{
        return  this.page.locator('[data-test="error"]')
    }

    async loginWithCredentials(username: string, password: string) {
        await this.getUsernameField().fill(username);
        await this.getPasswordField().fill(password);
        await this.getLoginButton().click();
    }
}