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

test("verify the user can click on textbox", async () => {
    await element.testBox();
      await element.fillFormUsingDBData();
    expect(element.page.url()).toBe("https://demoqa.com/text-box");
});
test("verify the user can click on checkbox", async () => {
    await element.checkBox();
    expect(await element.page.locator("//div[@id='result']//span[text()='desktop']")).toBeVisible();
    //expect(element.page.url()).toBe("https://demoqa.com/text-box");
});
test("verify the user can click on radio button", async () => {
    await element.radioButton();
    expect(await element.page.locator("//p[text()='You have selected ']")).toBeVisible();
    });
    test("verify the user can click on buttons", async () => {
    await element.Buttons();
    expect(await element.page.locator("//p[text()='You have done a double click']")).toBeVisible();
    });
test("verify the user can click on forms", async () => {
    await forms.clickOnForms();
    expect(forms.page.url()).toBe("https://demoqa.com/automation-practice-form");
});
test("verify the user can click on windows", async () => {
    const windows = new Windows(element.page);
    await windows.openUrl();
    await windows.windowsFunction();
    expect(element.page.url()).toBe("https://demoqa.com/browser-windows");
});
