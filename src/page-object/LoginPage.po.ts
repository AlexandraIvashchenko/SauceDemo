import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";
import {BasePagePo} from "./BasePage.po";


export class LoginPagePo extends BasePagePo{

    constructor( page: Page) {
        super(page, '/inventory.html')
    }

    get UsernameField(): Locator {
        return this.page.locator('[name="user-name"]');
    }

    get PasswordField(): Locator {
        return this.page.locator('[name="password"]');
    }

    get LoginButton(): Locator {
        return this.page.locator('[name="login-button"]');
    }

    get ErrorMessage(): Locator{
        return  this.page.locator('[data-test="error"]')
    }

    async loginWithCredentials(username: string, password: string) {
        await this.UsernameField.fill(username);
        await this.PasswordField.fill(password);
        await this.LoginButton.click();
    }
}