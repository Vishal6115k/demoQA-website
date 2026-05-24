import { BasePage } from "./Basepage";
import { DBHelper } from '../utils/DBHelper';

export class Elements extends BasePage {

   
    private readonly element: string =  "//div[@class='card-body']//h5[text()='Elements']";
    private readonly textBox: string = "//span[text()='Text Box']";
    private readonly FullName: string = "#userName";
    private readonly Email: string =  "#userEmail";
    private readonly CurrentAddress: string =  "#currentAddress";
    private readonly PermanentAddress: string ="#permanentAddress";
    private readonly submitButton: string = "#submit";

    public async clickOnElements() {

        await this.page.click(this.element);

        await this.page.locator(this.textBox).click();
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

}