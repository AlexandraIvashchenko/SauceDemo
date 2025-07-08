import { test as base, Page } from '@playwright/test';
import { PageObjectManagerPo } from '../page-object/PageObjectManager.po';
import {STANDARD_USER} from "../../globals";
import {LOCKED_USER} from "../../globals";

type UserFixtures = {
    // loginAs: (type: UserType) => Promise<{ page: Page }>;
    pm: PageObjectManagerPo;
};

export const test = base.extend<UserFixtures>({
    pm: async ({browser}, use) => {
        const context = await browser.newContext({
            storageState: STANDARD_USER
        });
        const page = await context.newPage();
        const pom = new PageObjectManagerPo(page);
        await use(pom);
    },

});
