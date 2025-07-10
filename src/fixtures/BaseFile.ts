import { test as base, Page } from '@playwright/test';
import { PageObjectManagerPo } from '../page-object/PageObjectManager.po';
import {STANDARD_USER_PATH} from '../../globals';

type UserFixtures = {
    pm: PageObjectManagerPo;
};

export const test = base.extend<UserFixtures>({
    pm: async ({ browser }, use, testInfo) => {
        const context = await browser.newContext({
            storageState: STANDARD_USER_PATH,
        });
        const page = await context.newPage();
        const pom = new PageObjectManagerPo(page);
        await use(pom);
    },
});

