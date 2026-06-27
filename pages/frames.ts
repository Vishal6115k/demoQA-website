import { BasePage } from "./Basepage";


export class Frames extends BasePage {
  async verifyPageLoaded(): Promise<void> {
        await this.page.locator("//div//h5[text()='Alerts, Frame & Windows']").waitFor();
        console.log("Frames page loaded");
    }
private readonly frame: string= "//div//h5[text()='Alerts, Frame & Windows']";
private readonly frameButton: string = "//span[text()='Frames']";
public readonly frameLocator: string = "//iframe[@id='frame1']";
public readonly frameContent: string = "//h1[@id='sampleHeading']";
public async frameTest()
{
 await this.page.click(this.frame);
 await this.page.locator(this.frameButton).click();
let frame = await this.page.frameLocator(this.frameLocator)
let frameContext = await frame.locator(this.frameContent).nth(0).textContent();
console.log(frameContext);

}








}