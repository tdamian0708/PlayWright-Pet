import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    // Declarar los selectores como propiedades de la clase
    lblHomePage = '//h2[text()="Bienvenido"]';

    async expectVisibleHomePage() {
        try {
            await this.page.waitForSelector(this.lblHomePage, { state: 'visible' });
            return true;
        } catch (error) {
            return false;
        }
    }


}