import { test, expect } from '@playwright/test';
import { Environment } from '../config/env';

test('Login Test', async ({ page }) => {

    // Open environment URL
    await page.goto(Environment.baseURL);

    console.log("Running on:", Environment.baseURL);

});