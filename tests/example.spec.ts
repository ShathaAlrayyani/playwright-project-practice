import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";
const URL = "https://playwright.dev/";
const javaDec = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. `;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});

test.describe("Testing Playwright Docs Page", () => {
  test("has title", async () => {
    // Expect a title "to contain" a substring.
    await homePage.assertPageTitle();
  });

  test("get started link", async ({ page }) => {
    await homePage.clickGetStarted();
    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });

  test("check Java page", async ({ page }) => {
    await homePage.clickGetStarted();
    await page.getByRole("button", { name: "Node.js", exact: true }).hover();
    await page.getByText("Java", { exact: true }).click();
    await expect(page).toHaveURL("https://playwright.dev/java/docs/intro");
    await expect(
      page.getByText("Installing Playwright", { exact: true }),
    ).not.toBeVisible();
    await expect(page.getByText(javaDec)).toBeVisible();
  });
});
