import { test } from '../fixtures/BaseFile';
import {expect} from "@playwright/test";


test('standard user login', async ({pm}) => {
    await pm.login.goto();
    expect(pm.login.getCurrentUrl()).toContain('/inventory.html')
});