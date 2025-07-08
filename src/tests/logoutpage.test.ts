import { test } from "../fixtures/BaseFile";
import { expect } from "@playwright/test";

test('user logout from the website', async ({ pm }) => {
    await pm.Logout.goto('/inventory.html');
    await expect(pm.Logout.getMenuToGetLogoutButton()).toBeVisible({timeout:2000});
    await pm.Logout.openMenu();
    await expect(pm.Logout.getLogoutButton()).toBeVisible({timeout:2000});
    await pm.Logout.clickLogout();
    pm.Logout.getCurrentUrl();
    expect(pm.Logout.getUrl()).toContain('https://www.saucedemo.com/');
});
