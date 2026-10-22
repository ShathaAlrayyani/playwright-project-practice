import { type Page, type Locator, expect } from "@playwright/test";

export class HomePage {
  // var
  readonly page!: Page;
  readonly getStartedBtn!: Locator;
  readonly title!:RegExp;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.getByRole("link", { name: "Get started" });
    this.title= /Playwright/
  }

  //methods
  async clickGetStarted() {
    await this.getStartedBtn.click();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.title)
  }
}

export default HomePage