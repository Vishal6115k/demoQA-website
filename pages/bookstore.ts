import { BasePage } from "./Basepage";

export class Booksstore extends BasePage {
    async verifyPageLoaded(): Promise<void> {
    }
    private readonly bookstorelink: string = "Book Store Application";
    private readonly loginbutton: string = "Login";
    private readonly username: string ="UserName";
    private readonly password: string = "Password";
    private readonly loginButton: string = "//button[@id='login']";
    private readonly registerButton: string = "New User";
    private readonly firstName: string = "First Name";
    private readonly lastName: string = "Last Name";
    private readonly userName: string = "UserName";
    private readonly passwordField: string = "Password";
    private readonly registeredButton: string = "Register";


    public async regisrterUser(): Promise<void> {
        await this.page.getByText(this.bookstorelink).click();
      await this.page.waitForTimeout(5000);
      await this.page.getByText(this.loginbutton).nth(0).click();
      await this.page.getByText(this.registerButton).nth(0).click();
      await this.page.getByPlaceholder(this.firstName).fill("vishal");
      await this.page.getByPlaceholder(this.lastName).fill("kaku");
      await this.page.getByPlaceholder(this.userName).fill("testuser");
      await this.page.getByPlaceholder(this.passwordField).fill("password123");
         await this.page.waitForTimeout(3000);
      await this.page.getByText(this.registeredButton).nth(0).click();
      console.log("User registered successfully.");
    }

     // Implementation for logging into the bookstore
    public async loginToBookstore(): Promise<void> {
      await this.page.getByText(this.bookstorelink).click();
      await this.page.waitForTimeout(5000);
      await this.page.getByText(this.loginbutton).nth(0).click();
      await this.page.getByPlaceholder(this.username).fill("testuser");
      await this.page.getByPlaceholder(this.password).fill("password123");
      await this.page.locator(this.loginButton).click();
      console.log("Logged into the bookstore successfully.");

      await this.page.pause();

    }

        
    }