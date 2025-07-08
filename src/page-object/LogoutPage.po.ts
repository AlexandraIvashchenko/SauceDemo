import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";
import {BasePagePo} from "./BasePage.po";

export class LogoutPagePo extends BasePagePo{
    constructor(page: Page) {
        super(page, '/inventory.html');
    }

    getMenuToGetLogoutButton(): Locator{
        return this.page.locator('[id="react-burger-menu-btn"]')
    }

    getLogoutButton(): Locator{
        return this.page.locator('[data-test="logout-sidebar-link"]')
    }

    async openMenu(): Promise<void> {
        await this.getMenuToGetLogoutButton().click();
    }

    async clickLogout(): Promise<void> {
        await this.getLogoutButton().click();
    }

    getUrl(): string {
        return this.page.url();
    }
}
