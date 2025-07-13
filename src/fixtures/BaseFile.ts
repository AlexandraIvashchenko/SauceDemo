import { test as base, request, APIRequestContext } from '@playwright/test';
import { PageObjectManagerPo } from '../page-object/PageObjectManager.po';
import { STANDARD_USER_PATH } from '../../globals';
import { HttpClient } from '../httpClient/HttpClient';

type UserFixtures = {
    pm: PageObjectManagerPo;
    http: HttpClient;
};

export const test = base.extend<UserFixtures>({
    pm: async ({ browser }, use) => {
        const context = await browser.newContext({
            storageState: STANDARD_USER_PATH,
        });
        const page = await context.newPage();
        const pom = new PageObjectManagerPo(page);
        await use(pom);
    },

    http: async ({}, use) => {
        const apiContext: APIRequestContext = await request.newContext({
            storageState: STANDARD_USER_PATH,
        });
        const client = new HttpClient(apiContext);
        await use(client);
        await apiContext.dispose();
    }
});
