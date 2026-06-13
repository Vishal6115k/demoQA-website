import { BasePage } from "./Basepage";
import { DBHelper } from '../utils/dbHelper';

export class Elements extends BasePage {

   
    private readonly element: string =  "//div[@class='card-body']//h5[text()='Elements']";
    private readonly textBox: string = "//span[text()='Text Box']";
    private readonly checBox: string = "//span[text()='Check Box']";
    private readonly radio: string = "//span[text()='Radio Button']";
    private readonly button: string = "//span[text()='Buttons']";
    private readonly table: string = "//span[text()='Web Tables']";
    private readonly FullName: string = "#userName";
    private readonly Email: string =  "#userEmail";
    private readonly CurrentAddress: string =  "#currentAddress";
    private readonly PermanentAddress: string ="#permanentAddress";
    private readonly submitButton: string = "#submit";
    private readonly links: string = "//span[text()='Links']";
    private readonly upload: string = "//span[text()='Upload and Download']";
    private readonly download: string = "//span[text()='Upload and Download']";

   
    public async testBox() {

        await this.page.click(this.element);

        await this.page.locator(this.textBox).click();
        await this.page.waitForTimeout(5000);
    }

    // DB Driven Form Fill
    public async fillFormUsingDBData() {

        const result = await DBHelper.executeQuery(
            'select * from "TextBox"'
        );

        const data = result[0];

        console.log(data);

        await this.page.locator(this.FullName) .fill(data.FullName);
        await this.page.locator(this.Email) .fill(data.Email);
        await this.page.locator(this.CurrentAddress).fill(data.Address);
        await this.page.locator(this.PermanentAddress).fill(data.Permanent_Address);
     await this.page.locator(this.submitButton).click();
     await this.page.waitForTimeout(5000);
    }

    public async checkBox()
    {
         await this.page.click(this.element);
        await this.page.locator(this.checBox).click();
        await this.page.getByLabel('Select Home').click();
         await this.page.waitForTimeout(5000);
    }
            public async radioButton()
            {
                await this.page.click(this.element);
                await this.page.locator(this.radio).click();
                await this.page.locator("//div[@class='col-auto form-check']//input[@id='yesRadio']").click();
                await this.page.waitForTimeout(5000);
            }
              public async Buttons()
            {
                await this.page.click(this.element);
                await this.page.locator(this.button).click();
                await this.page.locator("//div[@class='mt-4']//button[text()='Click Me']").click();
                await this.page.waitForTimeout(3000);
                await this.page.getByText('Right Click Me').click({button:'right'});
                await this.page.waitForTimeout(3000);
                await this.page.getByText('Double Click Me').dblclick();    
                await this.page.waitForTimeout(5000);
            }
            public async addRecord()
            {
                await this.page.click(this.element);
                await this.page.locator(this.table).click();
                await this.page.waitForTimeout(2000);
                await this.page.locator("//button[@id='addNewRecordButton']").scrollIntoViewIfNeeded;
                   await this.page.locator("//button[@id='addNewRecordButton']").click();
                await this.page.locator("#firstName").fill("John");
                await this.page.locator("#lastName").fill("Doe");
                await this.page.locator("#userEmail").fill("john.doe@example.com");
                await this.page.locator("#age").fill("30");
                await this.page.locator("#salary").fill("50000");
                await this.page.locator("#department").fill("Engineering");
                await this.page.locator("#submit").click();
                await this.page.waitForTimeout(5000);

                
            }

            public async readData()
            {
                 await this.page.click(this.element);
                await this.page.locator(this.table).click();
                await this.page.waitForTimeout(2000);
              let values =  await this.page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//thead//tr//th").allTextContents();
              console.log(values[0] +" , "+values[4]);
              for (let i = 0; i < values.length; i++) 
                {
                    let tvalue  = await this.page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//tbody//tr["+i+"]//td").allTextContents();
if(parseInt(tvalue[4])>=10000)
{
                    console.log(tvalue[0] +" , "+tvalue[4]);
}


            }

}
public async clickOnLinks()
{
    await this.page.click(this.element);
     await this.page.waitForTimeout(3000);
    await this.page.locator(this.links).click();
    
    
    let pagePromise= this.page.context().waitForEvent('page');
    await this.page.locator("//a[@id='simpleLink']").click();
    
    let page2 = await pagePromise;
    
   // await this.page.locator("//div//h5[text()='Elements']").waitFor({ state: 'visible'});
    
    await page2.locator("//div//h5[text()='Elements']").click();
    
    console.log(await page2.url());
    await this.page.bringToFront();
     await this.page.waitForTimeout(3000);
     await this.page.locator(this.textBox).click();
     await this.page.waitForTimeout(3000);
     await page2.bringToFront();
     await this.page.waitForTimeout(3000);
}

public async fileUpload()
{
    await this.page.click(this.element);
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.upload).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('//input[@id=\'uploadFile\']').setInputFiles('C:\\Users\\vishal\\Desktop\\Playwright\\allurereport.txt');
  
}
public async fileDwnload()
{
    await this.page.click(this.element);  
    await this.page.waitForTimeout(3000);    
    await this.page.locator(this.download).click();
    let pagePromise = this.page.context().waitForEvent('download');  
    await this.page.locator('#downloadButton').click();   
    let download = await pagePromise;     
    await download.saveAs(`C:\\Users\\vishal\\Desktop\\Playwright\\${"downloadedFile.jpeg"}`);
 await this.page.waitForTimeout(3000); 
}

}