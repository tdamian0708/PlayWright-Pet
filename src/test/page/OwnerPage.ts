import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';



export class OwnerPage extends BasePage {

    // Declarar los selectores como propiedades de la clase
    firstNameInput = '#firstName';
    lastNameInput = '#lastName';
    addressInput = '#address';
    cityInput = '#city';
    telephoneInput = '#telephone';
    ModuloFindOwners = '//a[@title="find owners"]';
    BtnFinOwner = '//button[@class="btn btn-primary]"';
    BtnAddOwnwer = '//a[@class="btn btn-primary"]';
    BtnAddOwnerFin = '//button[@class="btn btn-primary"]';
    NewOwnerCreated = '//span[text()="New Owner Created"]';
    tableOwner = '//table[@id="owners"]';
    txtOwnerInformacion = '//h2[text()="Owners"]'
    txtPrimerOwner = '//tbody//tr//td//a';
    btnEditOwner = '//a[@class="btn btn-primary"]';
    txtUpdateOwner = '//span[text()="Owner Values Updated"]'

    constructor(page: Page) {
        super(page);
    }


    async clickModuloFindOwners() {
        await this.clickOn(this.ModuloFindOwners);

    }
    async clickOnAddOwnerButton() {
        await this.clickOn(this.BtnAddOwnwer);
    }
    async fillOwnerForm(firstName: string, lastName: string, address: string, city: string, telephone: string) {
        await this.fillField(this.firstNameInput, firstName);
        await this.fillField(this.lastNameInput, lastName);
        await this.fillField(this.addressInput, address);
        await this.fillField(this.cityInput, city);
        await this.fillField(this.telephoneInput, telephone);
    }



    async clickOnAddOwnerFinButton() {
        await this.clickOn(this.BtnAddOwnerFin);
    }
    async expectVisibleNewOwnerCreated(): Promise<boolean> {
        try {
            await this.page.waitForSelector(this.NewOwnerCreated, { state: 'visible' });
            return true;
        } catch (error) {
            return false;
        }
    }



    async clickOnListOwnerButton() {
        await this.clickOn(this.BtnAddOwnerFin);
    }

    async clickOnListOwnerButtonLastName(LastName: string) {
        await this.fillField(this.lastNameInput, LastName);
        
    }

    async expectVisibleTableOwner() {
        try {
            await this.page.waitForSelector(this.tableOwner, { state: 'visible' });
            return true;
        } catch (error) {
            return false;
        }
    }

    async expectVisibleTxtOwnerInformation() {
        try {
            await this.page.waitForSelector(this.txtOwnerInformacion, { state: 'visible' });
            return true;
        } catch (error) {
            return false;
        }
    }

    async clickPrimerOwner() {
        await this.clickOn(this.txtPrimerOwner);
    }

    async clickOnEditOwnerButton() {
        await this.page.locator(this.btnEditOwner).nth(0).click();
    }

    async fillUpdateFistname(firstName: string) {
        await this.fillField(this.firstNameInput, firstName);
        await this.clickOn(this.BtnAddOwnerFin);
    }



    async expectVisibleTxtUpdateOwner() {
        try {
            await this.page.waitForSelector(this.txtUpdateOwner, { state: 'visible' });
            return true;
        } catch (error) {
            return false;
        }
    }

    async clickAddNewPet() {
        await this.page.locator(this.btnEditOwner).nth(1).click();
     
    }



}