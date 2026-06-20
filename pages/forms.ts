import {BasePage} from "./Basepage";
export class Forms extends BasePage
 {
   async verifyPageLoaded(): Promise<void> {
        await this.page.locator("//div[@class='card-body']//h5[text()='Forms']").waitFor();
    }
   private readonly forms:string= "//div[@class='card-body']//h5[text()='Forms']";
    private readonly practiceForm:string="//span[text()='Practice Form']";
    private readonly firstName:string="#firstName";
    private readonly lastName:string="#lastName";
    private readonly email:string="#userEmail";
    private readonly gender:string="//div//label[text()='Male']";
    private readonly mobileNumber:string="#userNumber";
    private readonly dateOfBirth:string="#dateOfBirthInput";
    private readonly subjects:string="#subjectsInput";
    private readonly Subjects:string="//div//input[@id='subjectsInput']";
   // private readonly hobbies:string="//div//label[text()='Sports']";

    private readonly currentAddress:string="#currentAddress";
    private readonly submitButton:string="#submit";
    private readonly fileUpload:string="#uploadPicture";

    public async clickOnForms()
    {
        await this.page.click(this.forms);
        await this.page.locator(this.practiceForm).click();
        await this.page.locator(this.firstName).fill("vishal");
        await this.page.locator(this.lastName).fill("kaku");
        await this.page.locator(this.email).fill("vishal.usei@gmail.com");  
        await this.page.locator(this.gender).click();
        await this.page.locator(this.mobileNumber).fill("1234567890");
        await this.page.locator(this.dateOfBirth).click();     
        await this.page.locator(".react-datepicker__month-select").selectOption("August");
        await this.page.locator(".react-datepicker__year-select").selectOption("1994");
        await this.page.locator("//div//div[@class='react-datepicker__day react-datepicker__day--029']").click();
        await this.page.locator(this.Subjects).fill("Maths");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.waitForTimeout(5000);
        //await this.page.locator(this.hobbies).click();
        await this.page.getByText("Sports").waitFor({state: 'visible'});
        await this.page.getByText("Sports").click();
        await this.page.locator(this.currentAddress).fill("pune");
         await this.page.waitForTimeout(2000);
       /*await this.page.locator("//div[@class='css-hlgwow']//div[text()='Select State']").click();
      await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
         await this.page.waitForTimeout(3000); 
        await this.page.locator("//div[@class='css-hlgwow']//div[text()='Select City']").click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
         await this.page.waitForTimeout(3000); */
         await this.page.locator(this.fileUpload).setInputFiles("C:\\Users\\vishal\\Desktop\\Personal\\test.png");;
       
       
        await this.page.waitForTimeout(2000);
         await this.page.locator(this.submitButton).click();
         await this.page.waitForTimeout(3000);
    }             






 }