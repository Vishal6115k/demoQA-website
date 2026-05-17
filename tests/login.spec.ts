import { test, expect } from '@playwright/test';
import { config } from '../config/env';

test('Login Test', async ({ page }) => {

    // Open environment URL
    await page.goto(config.baseURL);

    console.log("Running on:", config.baseURL);

});