import { test as setup, expect } from '@playwright/test';
import {PageObjectManagerPo} from "../page-object/PageObjectManager.po";
import {STANDARD_USER_PATH, LOCKED_USER_PATH, PROBLEM_USER_PATH} from "../../globals";
import dotenv from 'dotenv';

dotenv.config();

const standardUsername = process.env.STANDARD_USER!;
const standardPassword = process.env.STANDARD_PASSWORD!;

const lockedUsername = process.env.LOCKED_USER!;
const lockedPassword = process.env.LOCKED_PASSWORD!;

const problemUsername = process.env.PROBLEM_USER!;
const problemPassword = process.env.PROBLEM_PASSWORD!;

setup('authenticate with standard user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.getUsernameField()).toBeVisible();
    await expect(pm.login.getPasswordField()).toBeVisible();
    await expect(pm.login.getLoginButton()).toBeVisible();
    await pm.login.loginWithCredentials(standardUsername, standardPassword);
    await page.context().storageState({path: STANDARD_USER_PATH})
});

setup('authenticate with locked user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.getUsernameField()).toBeVisible();
    await expect(pm.login.getPasswordField()).toBeVisible();
    await expect(pm.login.getLoginButton()).toBeVisible();
    await pm.login.loginWithCredentials(lockedUsername, lockedPassword);
    await expect(pm.login.getErrorMessage()).toBeVisible();
    await page.context().storageState({path: LOCKED_USER_PATH});
});

setup('authenticate with problem user', async ({ page }) => {
    const pm = new PageObjectManagerPo(page);
    await pm.login.goto();
    await expect(pm.login.getUsernameField()).toBeVisible();
    await expect(pm.login.getPasswordField()).toBeVisible();
    await expect(pm.login.getLoginButton()).toBeVisible();
    await pm.login.loginWithCredentials(problemUsername, problemPassword);
    await page.context().storageState({path: PROBLEM_USER_PATH})
});
