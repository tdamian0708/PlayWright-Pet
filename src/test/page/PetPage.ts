import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';



export class PetPage extends BasePage {


    // Declarar los selectores como propiedades de la clase
    NameInput = '#name';
    birthDateInput = '#birthDate';
    typeInput = '#type';
    BtnAddPet = '//button[@class="btn btn-primary"]';
    dateInput = '#date';
    descriptionInput = '#description';
    BtnAddVisit = '//button[@class="btn btn-primary"]';
    txtUpdatePet = '//span[text()="Pet details has been edited"]';


    constructor(page: Page) {
        super(page);
    }


    async fillPetForm(name: string, birthDate: string, type: string) {
        await this.fillField(this.NameInput, name);
        await this.fillField(this.birthDateInput, birthDate);
        await this.page.selectOption(this.typeInput, { label: type });
    }

    async clickOnAddPetFinButton() {
        await this.clickOn(this.BtnAddPet);
    }

    async expectVisibleNewPetCreated(name: string): Promise<boolean> {
        try {
            await this.page.waitForSelector(`//dd[text()="${name}"]`, {});
            return true;
        } catch (error) {
            return false;
        }
    }

    async clickOnAddVisit(name: string) {
        await this.clickOn('//dd[text()="' + name + '"]/ancestor::tr//a[text()="Add Visit"]');
    }

    async fillVisitForm(date: string, description: string) {
        await this.fillField(this.dateInput, date);
        await this.fillField(this.descriptionInput, description);
    }

    async clickOnAddVisitFinButton() {
        await this.clickOn(this.BtnAddVisit);

    }

    async expectVisibleNewPetVisit(description: string, petName: string) {
        try {
            await this.page.waitForSelector('//dd[text()="'+petName+'"]/ancestor::tr//td[text()="'+description+'"]');
            return true;
        } catch (error) {
            return false;
        }
    }

    async clickOnEditPet(petName: string) {
        await this.clickOn('//dd[text()="' + petName + '"]/ancestor::tr//a[text()="Edit Pet"]');
    }

    async clickOnBtnUpdatePet() {
        await this.clickOn(this.BtnAddPet);
    }

    async expectVisibleAlertUpdatePet() {
        try {
            await this.page.waitForSelector(this.txtUpdatePet, { state: 'visible' });
            return true;
        } catch (error) {
            return false;
    }


}
}