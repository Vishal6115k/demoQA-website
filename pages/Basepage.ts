import { Page, Locator } from '@playwright/test';

export class BasePage {

     page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl() {
        await this.page.goto("https://demoqa.com/");
    }
}