import { Page, expect } from '@playwright/test';
export class BasePage {
    protected readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async loadWeb(url: string) {
        await this.page.goto(url);
    }

    async clickOn(locator: string) {
        await this.page.click(locator);
    }
    async fillField(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }
    async selectOption(locator: string, text: string) {
        await this.page.locator(locator).selectOption(text);
    }
    async getByText(text: string) {
        return this.page.locator(`//span[text()="${text}"]`);
    }

    async expectVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }
}