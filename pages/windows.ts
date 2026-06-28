import {BasePage} from "./Basepage";
export class Windows extends BasePage
{
  async verifyPageLoaded(): Promise<void> {
        await this.page.locator("//div//h5[text()='Alerts, Frame & Windows']").waitFor();
        console.log("Frames page loaded");
    }
  private readonly alertsFrameWindows:string="//div[@class='card-body']//h5[text()='Alerts, Frame & Windows']";
  private readonly browserWindows:string="//span[text()='Browser Windows']";  
  private readonly newTabButton:string="New Window Message";

  public async windowsFunction()
{
await this.page.click(this.alertsFrameWindows);
await this.page.locator(this.browserWindows).click();

//console.log("URL of the new tab:", url);
}
}