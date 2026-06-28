import { BasePage } from "./Basepage";


export class Dates extends BasePage { 
    async verifyPageLoaded(): Promise<void> {
        await this.page.locator("//div//h5[text()='Widgets']").waitFor();
        console.log("dates page loaded");
    }

private readonly widgets: string= "//div//h5[text()='Widgets']";
private readonly datepicker: string= "//span[text()='Date Picker']";
private readonly time: string= "//input[@id='dateAndTimePickerInput']";


    public async dateTest()
    {
await this.page.locator(this.widgets).click();
await this.page.locator(this.datepicker).click();
await this.page.locator("//input[@id='datePickerMonthYearInput']").click();
await this.page.locator("//select[@class='react-datepicker__month-select']").selectOption({ label: "August" });
await this.page.locator("//select[@class='react-datepicker__year-select']").selectOption({ label: "1994" });
await this.page.waitForTimeout(5000);
await this.page.getByLabel("Choose Monday, August 29th, 1994").click();
await this.page.waitForTimeout(5000);
    }

public async timeTest()
    {
        await this.page.locator(this.widgets).click();
        await this.page.locator(this.datepicker).click();
        await this.page.locator(this.time).click();
    
        await this.page.locator("//span[@class='react-datepicker__month-read-view--down-arrow']").click();
        await this.page.locator("//div[@class='react-datepicker__month-dropdown']//div[text()='August']").click();
         await this.page.locator("//span[@class='react-datepicker__year-read-view--down-arrow']").click();
         await this.page.keyboard.press("ArrowDown");
         await this.page.keyboard.press("ArrowDown");
         await this.page.keyboard.press("Enter");

         await this.page.locator
         ("//div[@class='react-datepicker__time-box']//ul[@role='listbox']//li[text()='01:30']").scrollIntoViewIfNeeded()
      
          await this.page.locator
         ("//div[@class='react-datepicker__time-box']//ul[@role='listbox']//li[text()='01:30']").click();
         //await this.page.pause()
        
    }

}