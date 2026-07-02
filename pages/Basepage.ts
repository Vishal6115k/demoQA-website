import { Page, Locator } from '@playwright/test';
import { Environment } from '../config/env';

export abstract class BasePage {

     page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl() {
        await this.page.goto(Environment.baseURL);
    }
    abstract verifyPageLoaded(): Promise<void>;
}