import {BrowserContext, Page, test as base} from '@playwright/test';
import { PageObjectManagerPo } from '../page-object/PageObjectManager.po';
import { STANDARD_USER_PATH } from '../../globals';
import { HttpClient } from '../httpClient/HttpClient';

type UserFixtures = {
    pm: PageObjectManagerPo;
    http: HttpClient;
};

export const test = base.extend<UserFixtures & { context: BrowserContext, page: Page }>({
    context: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: STANDARD_USER_PATH });
        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },

    http: async ({ page }, use) => {
        const client = new HttpClient(page);
        await use(client);
    },

    pm: async ({ page }, use) => {
        const pom = new PageObjectManagerPo(page);
        await use(pom);
    },
});
