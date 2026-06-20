import { Page, Locator } from '@playwright/test';

export abstract class BasePage {

     page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl() {
        await this.page.goto("https://demoqa.com/");
    }
    abstract verifyPageLoaded(): Promise<void>;
}