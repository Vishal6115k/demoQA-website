import { test, expect } from "@playwright/test";
import {Elements} from "../pages/elements";
import {Forms} from "../pages/forms";
import {Windows} from "../pages/windows";


let element:Elements;
let forms:Forms;
let windows:Windows;


test.beforeEach(async ({page}) => {
    element = new Elements(page);
    forms = new Forms(page);
    await element.openUrl();
    
});

test("verify the user can click on elements", async () => {
    await element.clickOnElements();
    await element.fillFormUsingDBData();
    expect(element.page.url()).toBe("https://demoqa.com/text-box");
});
test.skip("verify the user can click on forms", async () => {
    await forms.clickOnForms();
    expect(forms.page.url()).toBe("https://demoqa.com/automation-practice-form");
});
test.skip("verify the user can click on windows", async () => {
    const windows = new Windows(element.page);
    await windows.openUrl();
    await windows.windowsFunction();
    expect(element.page.url()).toBe("https://demoqa.com/browser-windows");
    console.log ("The current URL is: " + element.page.url());
});