import { test as setup, expect } from '@playwright/test';
import {PageObjectManagerPo} from "../page-object/PageObjectManager.po";
import {STANDARD_USER_PATH, LOCKED_USER_PATH, PROBLEM_USER_PATH} from "../../globals";
import {getEnvironmentVariable} from "../helpers/env";

const standardUsername = getEnvironmentVariable('STANDARD_USER', true);
const standardPassword = getEnvironmentVariable('STANDARD_PASSWORD', true)

const lockedUsername = getEnvironmentVariable('LOCKED_USER', true)
const lockedPassword = getEnvironmentVariable('LOCKED_PASSWORD', true)

const problemUsername = getEnvironmentVariable('PROBLEM_USER', true)
const problemPassword = getEnvironmentVariable('PROBLEM_PASSWORD',true)



setup('authenticate with standard user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.UsernameField).toBeVisible();
    await expect(pm.login.PasswordField).toBeVisible();
    await expect(pm.login.LoginButton).toBeVisible();
    await pm.login.loginWithCredentials(standardUsername, standardPassword);
    await page.context().storageState({path: STANDARD_USER_PATH})
});

setup('authenticate with locked user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.UsernameField).toBeVisible();
    await expect(pm.login.PasswordField).toBeVisible();
    await expect(pm.login.LoginButton).toBeVisible();
    await pm.login.loginWithCredentials(lockedUsername, lockedPassword);
    await expect(pm.login.ErrorMessage).toBeVisible();
    await page.context().storageState({path: LOCKED_USER_PATH});
});

setup('authenticate with problem user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.UsernameField).toBeVisible();
    await expect(pm.login.PasswordField).toBeVisible();
    await expect(pm.login.LoginButton).toBeVisible();
    await pm.login.loginWithCredentials(problemUsername, problemPassword);
    await page.context().storageState({path: PROBLEM_USER_PATH})
});
