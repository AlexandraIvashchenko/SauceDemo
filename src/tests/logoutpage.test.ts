import { test } from "../fixtures/BaseFile";
import { expect } from "@playwright/test";

test('user logout from the website', async ({ pm }) => {
    await pm.Logout.goto();
    await expect(pm.Logout.getMenuToGetLogoutButton()).toBeVisible();
    await pm.Logout.openMenu();
    await expect(pm.Logout.getLogoutButton()).toBeVisible();
    await pm.Logout.clickLogout();
    expect(pm.Logout.getUrl()).toContain('https://www.saucedemo.com/');
});
