import { BasePage } from "./Basepage";

export class Booksstore extends BasePage {
    async verifyPageLoaded(): Promise<void> {
    }
    private readonly bookstorelink: string = "Book Store Application";
    private readonly loginbutton: string = "Login";
    private readonly username: string ="UserName";
    private readonly password: string = "Password";
    private readonly loginButton: string = "Login";

     // Implementation for logging into the bookstore
    public async loginToBookstore(): Promise<void> {
      await this.page.getByText(this.bookstorelink).click();
      await this.page.waitForTimeout(5000);
      await this.page.getByText(this.loginbutton).nth(0).click();
      await this.page.getByPlaceholder(this.username).fill("testuser");
      await this.page.getByPlaceholder(this.password).fill("password123");
      await this.page.getByText(this.loginButton).nth(0).click();
      console.log("Logged into the bookstore successfully.");

    }

        
    }