import {BasePage} from "./Basepage";
export class Elements extends BasePage
 {
private readonly element:string="//div[@class='card-body']//h5[text()='Elements']";
private readonly textBox:string="//span[text()='Text Box']";
private readonly FullName:string="#userName";
private readonly Email:string="#userEmail";
private readonly CurrentAddress:string="#currentAddress";
private readonly PermanentAddress:string="#permanentAddress";
private readonly submitButton:string="#submit";

public async clickOnElements()
{
   await this.page.click(this.element);
   await this.page.locator(this.textBox).click();
   await this.page.locator(this.FullName).fill("vishal");
    await this.page.locator(this.Email).fill("vishal.usei@gmail.com");
    await this.page.locator(this.CurrentAddress).fill("pune");
    await this.page.locator(this.PermanentAddress).fill("pune");
    await this.page.locator(this.submitButton).click(); 
    await this.page.waitForTimeout(5000);

}

 }