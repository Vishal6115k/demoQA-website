import { test, expect } from "@playwright/test";
import {Elements} from "../pages/elements";
import {Forms} from "../pages/forms";
import {Windows} from "../pages/windows";
import {Alerts} from "../pages/alerts";
import {Frames} from "../pages/frames";
import {Dates} from "../pages/dates";
import{Dynamicelements} from "../pages/dynamicelements"


let element:Elements;
let forms:Forms;
let windows:Windows;
let alert:Alerts;
let frame:Frames;
let dates:Dates;
let dynamic:Dynamicelements;

test.beforeEach(async ({page}) => {
    element = new Elements(page);
    forms = new Forms(page);
    windows = new Windows(page);
    alert = new Alerts(page);
    frame = new Frames(page);
    dates = new Dates(page);
    dynamic = new Dynamicelements(page);
    await element.openUrl();
    
});

test("verify the user can click on elements", async () => {
    await element.verifyPageLoaded();

    await element.testBox();
  //  await element.fillFormUsingDBData();
    expect(element.page.url()).toBe("https://demoqa.com/text-box");
});
test("verify the user can click on forms", async () => {
    await forms.clickOnForms();
    expect(forms.page.url()).toBe("https://demoqa.com/automation-practice-form");
});
test.skip("verify the user can click on textbox", async () => {

    await element.testBox();
      await element.fillFormUsingDBData();
    expect(element.page.url()).toBe("https://demoqa.com/text-box");
});
test("verify the user can click on checkbox", async () => {

    await element.checkBox();
    //expect(await element.page.locator("//div[@id='result']//span[text()='desktop']")).toBeVisible();
    //expect(element.page.url()).toBe("https://demoqa.com/text-box");
    await expect(element.page.getByLabel('Select Home')).toBeChecked();
});
test("verify the user can click on radio button", async () => {

    await element.radioButton();
    expect(await element.page.locator("//p[text()='You have selected ']")).toBeVisible();
    });
test("verify the user can click on buttons", async () => {

    await element.Buttons();
    expect(await element.page.locator("//p[text()='You have done a double click']")).toBeVisible();
    });
    
test("verify the user can click on windows", async () => {

    await windows.windowsFunction();
    expect(element.page.url()).toBe("https://demoqa.com/browser-windows");
    console.log ("The current URL is: " + element.page.url());
});
test("verify the user can add new record", async () => {
 
    await element.addRecord();
   // expect(await element.page.locator("//div[@class='rt-tbody']//div[@class='rt-tr-group'][1]//div[@class='rt-td'][1]")).toBeVisible(); 
});
test("reading the data", async () => {
 
    await element.readData();
   });
test("working with links", async () => {
 
    await element.clickOnLinks();
   });
   test("Uploading the file", async () => {
    await element.verifyPageLoaded();
    await element.fileUpload();
    expect(await element.page.locator("//p[@id='uploadedFilePath']")).toBeVisible();
   });
test("downloading the file", async () => {
 
    await element.fileDownload();
    expect(await element.page.locator("//a[@id='downloadButton']")).toBeVisible();
   
   });

test("working with alerts", async () => {
    await alert.verifyPageLoaded();
    await alert.alertsTest();
    expect(alert.page.url()).toBe("https://demoqa.com/alerts");
   
});

test("working with rejectAlerts", async () => {

    await alert.rejectAlert();
   expect(alert.page.url()).toBe("https://demoqa.com/alerts");
   
});
test("working with textAlerts", async () => {

    await alert.textAlert();
  expect(alert.page.locator("//span[@id='promptResult']")).toContainText("Automation");
   
});
test("working with singleFrames", async () => {
    await frame.verifyPageLoaded();
    await frame.frameTest();
    let iframe=await frame.page.frameLocator(frame.frameLocator);
   await  expect(iframe.locator(frame.frameContent).nth(0)).toContainText("This is a sample page");
   
});

test("working with dates", async () => {
    await dates.verifyPageLoaded();
    await dates.dateTest();
   
});
test("working with date AndTime", async () => {

    await dates.timeTest();
   
});
test("dynamic elements", async ({page}) => {
   // await dynamic.verifyPageLoaded();
   await page.locator(dynamic.element).click();
await page.locator(dynamic.button).click();
    await dynamic.dynamicEle("Click Me")
        await page.waitForTimeout(3000);
     await dynamic.dynamicEle("Right Click Me")
     await page.waitForTimeout(3000);
      await dynamic.dynamicEle("Double Click Me")
        await page.waitForTimeout(3000);
})

test("element visisble after some time test", async () => {
    await dynamic.elementVisibleAfterSomeTime();
    expect(await dynamic.page.locator(dynamic.visibleButton).isVisible()).toBe(true);
   
})
test("element enable after some time test", async () => {
   
    await dynamic.elementEnableAfterSometime();
    expect(await dynamic.page.locator(dynamic.enableButton).isVisible()).toBe(true);
   
});
   