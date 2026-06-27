import { BasePage } from "./Basepage";
import { test, expect } from "@playwright/test";

export class Dynamicelements extends BasePage {
     async verifyPageLoaded(): Promise<void> {
        
    }
    public element: string =  "//div[@class='card-body']//h5[text()='Elements']";
  public button: string = "//span[text()='Buttons']";
  public dymanicproperties: string="//span[text()='Dynamic Properties']" 
 public visibleButton: string = "//button[text()='Visible After 5 Seconds']";
 public enableButton: string = "//button[text()='Will enable 5 seconds']";

public  dynamic(buttonName: string): string {
        
    return `//button[text()='${buttonName}']`;
}
public async dynamicEle(buttonName: string): Promise<void> {



    await this.page.locator(
        this.dynamic(buttonName)
    ).click();
}

public async elementVisibleAfterSomeTime()
{
    await this.page.locator(this.element).click()
    await this.page.locator(this.dymanicproperties).click();
    //await this.page.waitForTimeout(2000);
   let element:any = await this.page.locator(this.visibleButton);
      await element.waitFor({ state: 'visible' });
  await element.scrollIntoViewIfNeeded();
  await this.page.waitForTimeout(1000);
  await element.click();
}

public async elementEnableAfterSometime()
{
     await this.page.locator(this.element).click()
    await this.page.locator(this.dymanicproperties).click();
   let element:any = await this.page.locator(this.enableButton);
      expect(element).toBeEnabled({timeout:6000});
  await element.scrollIntoViewIfNeeded();
  await this.page.waitForTimeout(1000);
  await element.click();
}
}
