import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";
import {BasePagePo} from "./BasePage.po";

export class LogoutPagePo extends BasePagePo{
    constructor(page: Page) {
        super(page, '/inventory.html');
    }

    get MenuToGetLogoutButton(): Locator{
        return this.page.locator('[id="react-burger-menu-btn"]')
    }

    get LogoutButton(): Locator{
        return this.page.locator('[data-test="logout-sidebar-link"]')
    }

    async openMenu(): Promise<void> {
        await this.MenuToGetLogoutButton.click();
    }

    async clickLogout(): Promise<void> {
        await this.LogoutButton.click();
    }

    get Url(): string {
        return this.page.url();
    }
}
