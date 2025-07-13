import {Page} from "@playwright/test";
import {LoginPagePo} from "./LoginPage.po";
import {ProductPagePo} from "./ProductPage.po";
import {LogoutPagePo} from "./LogoutPage.po";
import {HttpClient} from "../httpClient/HttpClient";

export class PageObjectManagerPo {
    constructor(
        private page: Page) {

    }

    get login(): LoginPagePo {
        return new LoginPagePo(this.page);
    }

    get product(): ProductPagePo {
        return new ProductPagePo(this.page);
    }

    get logout(): LogoutPagePo {
        return new LogoutPagePo(this.page);
    }

    get httpClient(): HttpClient {
        return new HttpClient(this.page);
    }
}
