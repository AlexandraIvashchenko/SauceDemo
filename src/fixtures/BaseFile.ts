import { test as base, Page } from '@playwright/test';
import { PageObjectManagerPo } from '../page-object/PageObjectManager.po';
import { STANDARD_USER, LOCKED_USER } from '../../globals';

type UserType = 'standard' | 'locked_out';

type UserFixtures = {
    loginAs: (type: UserType) => Promise<{ page: Page }>;
    pm: PageObjectManagerPo;
};

const userStorageMap: Record<UserType, string> = {
    standard: STANDARD_USER,
    locked_out: LOCKED_USER,
};

export const test = base.extend<UserFixtures>({
    // loginAs фикстура
    loginAs: async ({ browser }, use) => {
        const loginAs = async (type: UserType): Promise<{ page: Page }> => {
            const context = await browser.newContext({
                storageState: userStorageMap[type],
            });
            const page = await context.newPage();
            return { page };
        };
        await use(loginAs);
    },

    // pm фикстура
    pm: async ({ browser }, use, testInfo) => {
        const context = await browser.newContext({
            storageState: testInfo.project.use?.storageState || STANDARD_USER,
        });

        const page = await context.newPage();
        const pom = new PageObjectManagerPo(page);
        await use(pom);
    },
});
