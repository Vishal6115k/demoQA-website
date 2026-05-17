import {BasePage} from "./Basepage";
export class Windows extends BasePage
{
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