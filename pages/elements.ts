import { BasePage } from "./Basepage";
import { DBHelper } from '../utils/dbHelper';

export class Elements extends BasePage {

   
    private readonly element: string =  "//div[@class='card-body']//h5[text()='Elements']";
    private readonly textBox: string = "//span[text()='Text Box']";
    private readonly checBox: string = "//span[text()='Check Box']";
    private readonly radio: string = "//span[text()='Radio Button']";
    private readonly button: string = "//span[text()='Buttons']";
    private readonly FullName: string = "#userName";
    private readonly Email: string =  "#userEmail";
    private readonly CurrentAddress: string =  "#currentAddress";
    private readonly PermanentAddress: string ="#permanentAddress";
    private readonly submitButton: string = "#submit";

   
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

}