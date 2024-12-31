import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { OwnerPage } from '../page/OwnerPage';
import { PetPage } from '../page/PetPage';
import { HomePage } from '../page/HomePage';
import config from 'config';

let browser: Browser;
let page: Page;
let ownerPage: OwnerPage;
let petPage: PetPage;
let homePage: HomePage;

const BASE_URL = config.get('baseUrl') as string;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    page.setDefaultTimeout(30000);
    await page.goto(BASE_URL);
    ownerPage = new OwnerPage(page);
    petPage = new PetPage(page);
    homePage = new HomePage(page);
});

After(async () => {
    await browser.close();
});

export { browser, page, ownerPage, petPage, homePage };