import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";

export class LogoutPage{
    constructor(private page: Page){

    }
    clickMenuToGetLogoutButton(): Locator{
        return this.page.locator('[id="react-burger-menu-btn"]')
    }

    getLogoutButton(): Locator{
        return this.page.locator('[data-test="logout-sidebar-link"]')
    }

    clickLogoutButton(): Locator{
        return this.page.locator('[data-test="logout-sidebar-link"]')
    }

}
