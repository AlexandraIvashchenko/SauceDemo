import {Page} from "@playwright/test";
import {ProductPagePo} from "./ProductPage.po";
import {LogoutPagePo} from "./LogoutPage.po";
import {LoginPagePo} from "./LoginPage.po";

export class PageObjectManagerPo{
    constructor(private page: Page) {
    }

    get Login(): LoginPagePo{
        return new LoginPagePo(this.page);
    }

    get Product(): ProductPagePo{
        return new ProductPagePo(this.page);
    }

    get Logout(): LogoutPagePo{
        return new LogoutPagePo(this.page)
    }
}