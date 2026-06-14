import { BasePage } from "./Basepage";


export class Alerts extends BasePage {

private readonly alerts: string= "//div//h5[text()='Alerts, Frame & Windows']";
private readonly alertButton: string = "//span[text()='Alerts']";
private readonly alert1: string = "//button[@id='alertButton']"
private readonly alert2: string = "//button[@id='confirmButton']"

public async alertsTest()
{
    await this.page.click(this.alerts);
    await this.page.locator(this.alertButton).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.alert1).scrollIntoViewIfNeeded();
      this.page.on("dialog", async(d)=>{
    await this.page.waitForTimeout(3000);
    await d.accept()
    console.log( d.message())
   
   })
   await this.page.locator(this.alert1).click();
   
}
public async rejectAlert()
{
 await this.page.click(this.alerts);
    await this.page.locator(this.alertButton).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.alert2).scrollIntoViewIfNeeded();
      this.page.on("dialog", async(d)=>{
    await this.page.waitForTimeout(3000);
    await d.dismiss()
  
    console.log( d.message())
   
   })
   await this.page.locator(this.alert2).click();
     await this.page.waitForTimeout(3000);
}




}