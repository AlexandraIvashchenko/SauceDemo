import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authStandardUserFile = path.join(__dirname, '.auth/authStandardUser.json');
const authLockedUserFile = path.join(__dirname, '.auth/authLockedUser.json');

setup('authenticate with standard user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page.locator('[name="user-name"]')).toBeVisible();
    await page.fill('[name="user-name"]', 'standard_user');
    await expect(page.locator('[name="password"]')).toBeVisible();
    await page.fill('[name="password"]', 'secret_sauce');
    await expect(page.locator('[name="login-button"]')).toBeVisible();
    await page.click('[name="login-button"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.context().storageState({ path: authStandardUserFile });
});

setup('authenticate with locked out user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page.locator('[name="user-name"]')).toBeVisible();
    await page.fill('[name="user-name"]', 'locked_out_user');
    await expect(page.locator('[name="password"]')).toBeVisible();
    await page.fill('[name="password"]', 'secret_sauce');
    await expect(page.locator('[name="login-button"]')).toBeVisible();
    await page.click('[name="login-button"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await page.context().storageState({ path: authLockedUserFile });
});
