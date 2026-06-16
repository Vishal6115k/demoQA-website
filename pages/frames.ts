import { BasePage } from "./Basepage";


export class Frames extends BasePage {
private readonly frame: string= "//div//h5[text()='Alerts, Frame & Windows']";
private readonly frameButton: string = "//span[text()='Frames']";
private readonly frameLocator: string = "//iframe[@id='frame1']";
private readonly frameContent: string = "//h1[@id='sampleHeading']";
public async frameTest()
{
 await this.page.click(this.frame);
 await this.page.locator(this.frameButton).click();
let frame = await this.page.frameLocator(this.frameLocator)
let frameContent = await frame.locator(this.frameContent).nth(0).textContent();
console.log(frameContent);

}








}