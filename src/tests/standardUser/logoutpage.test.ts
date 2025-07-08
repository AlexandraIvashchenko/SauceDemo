import { test } from "../../fixtures/BaseFile";
import { expect } from "@playwright/test";

test('user logout from the website', async ({ pm }) => {
    await pm.logout.goto();
    expect (pm.logout.getCurrentUrl()).toContain('/inventory.html')
    await expect(pm.logout.getMenuToGetLogoutButton()).toBeVisible({timeout:2000});
    await pm.logout.openMenu();
    await expect(pm.logout.getLogoutButton()).toBeVisible({timeout:2000});
    await pm.logout.clickLogout();
    pm.logout.getCurrentUrl();
    expect(pm.logout.getUrl()).toContain('https://www.saucedemo.com/');
});
