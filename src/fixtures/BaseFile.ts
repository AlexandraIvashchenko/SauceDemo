import { test as base } from "@playwright/test";

// Указываем тип фикстуры
type Fixtures = {
    validUserData: { username: string; password: string };
    invalidUserData: { username: string; password: string };
};

// Расширяем base с типами
export const test = base.extend<Fixtures>({
    validUserData: async ({}, use) => {
        const user = { username: 'standard_user', password: 'secret_sauce' };
        await use(user);
    },

    invalidUserData: async({}, use) => {
        const user = {username : 'test', password: 'test'};
        await use(user)
    }
});
