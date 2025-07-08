import { test as base, Page } from '@playwright/test';
import { PageObjectManagerPo } from '../page-object/PageObjectManager.po';

type UserType = 'standard' | 'locked_out';

type UserFixtures = {
    loginAs: (type: UserType) => Promise<{ page: Page }>;
    pm: PageObjectManagerPo;
};

let globalPage: Page;

export const test = base.extend<UserFixtures>({
    // loginAs: async ({ browser }, use) => {
    //     const loginAs = async (type: UserType): Promise<{ page: Page }> => {
    //         const states = {
    //             standard: '.auth/authStandardUser.json',
    //             locked_out: '.auth/authLockedUser.json',
    //         };
    //
    //         const context = await browser.newContext({
    //             storageState: states[type],
    //         });
    //
    //         const page = await context.newPage();
    //         globalPage = page;
    //         return { page };
    //     };
    //
    //     await use(loginAs);
    // },

    pm: async ({browser}, use) => {
        const context = await browser.newContext({
            storageState: '.auth/authStandardUser.json'
        });
        const page = await context.newPage();
        const pom = new PageObjectManagerPo(page);
        await use(pom);
    },

});
