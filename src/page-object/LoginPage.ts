import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";

export class LoginPage{

    constructor(private page: Page) {
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
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
