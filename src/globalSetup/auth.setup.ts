import { test as setup, expect } from '@playwright/test';
import {PageObjectManagerPo} from "../page-object/PageObjectManager.po";

const authStandardUserFile = '.auth/authStandardUser.json';
const authLockedUserFile = '.auth/authLockedUser.json';

setup('authenticate with standard user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.getUsernameField()).toBeVisible();
    await pm.login.getUsernameField().fill('standard_user');
    await expect(pm.login.getPasswordField()).toBeVisible();
    await pm.login.getPasswordField().fill( 'secret_sauce');
    await expect(pm.login.getLoginButton()).toBeVisible();
    await pm.login.getLoginButton().click();
    expect(pm.login.getCurrentUrl()).toContain('/inventory.html');
    await page.context().storageState({ path: authStandardUserFile });
});

setup('authenticate with locked out user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.getUsernameField()).toBeVisible();
    await pm.login.getUsernameField().fill( 'locked_out_user');
    await expect(pm.login.getPasswordField()).toBeVisible();
    await pm.login.getPasswordField().fill('secret_sauce');
    await expect(pm.login.getLoginButton()).toBeVisible();
    await pm.login.getLoginButton().click();
    expect(pm.login.getCurrentUrl()).toContain('https://www.saucedemo.com/');
    await expect(pm.login.getErrorMessage()).toBeVisible();
    await page.context().storageState({ path: authLockedUserFile });
});
