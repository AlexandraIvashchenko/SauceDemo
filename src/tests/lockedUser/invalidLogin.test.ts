import { test } from '../../fixtures/BaseFile';
import {expect} from "@playwright/test";
import {LOCKED_USER} from "../../../globals";

test.describe('login with locked user',  () => {
    test.use({ storageState: LOCKED_USER });
    test('locked user login', async ({pm}) =>{
        await pm.login.goto();
        await pm.login.getUsernameField().click();
        await pm.login.getPasswordField().click();
        await pm.login.getLoginButton().click();
        await expect(pm.login.getErrorMessage()).toBeVisible();
    });
})


