import { test, expect } from "@playwright/test";
import {Elements} from "../pages/elements";
import {Forms} from "../pages/forms";
import {Windows} from "../pages/windows";
import {Alerts} from "../pages/alerts";
import {Frames} from "../pages/frames";
import {Dates} from "../pages/dates";
import{Dynamicelements} from "../pages/dynamicelements"
import { Booksstore } from "../pages/bookstore"


let element:Elements;
let forms:Forms;
let windows:Windows;
let alert:Alerts;
let frame:Frames;
let dates:Dates;
let dynamic:Dynamicelements;
let bookstore:Booksstore;

test.beforeEach(async ({page}) => {
    element = new Elements(page);
    forms = new Forms(page);
    windows = new Windows(page);
    alert = new Alerts(page);
    frame = new Frames(page);
    dates = new Dates(page);
    dynamic = new Dynamicelements(page);
    bookstore = new Booksstore(page);
    await element.openUrl();
    
});

test ("register to bookstore Applicxation", async({page}) => {
  //  await bookstore.verifyPageLoaded();
    await bookstore.regisrterUser();
    await expect(bookstore.page.url()).toBe("https://demoqa.com/register");
});

test("login to bookstore", async ({page}) => {
   // await bookstore.verifyPageLoaded();
    await bookstore.loginToBookstore();
    await expect(bookstore.page.url()).toBe("https://demoqa.com/login");
});


   