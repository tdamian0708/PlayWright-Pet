import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { browser, page, petPage } from './hooks';


When('agrego mascota al owner {string}, {string}, {string}', async function (petName1, petBirthDate1, petType1) {
    await petPage.fillPetForm(petName1, petBirthDate1, petType1);
    await petPage.clickOnAddPetFinButton();
    // Tomar captura de pantalla


});


Then('se valida la mascota agregada {string} en el owner', async function (petName) {
    const isUpdateOwnerVisible = await petPage.expectVisibleNewPetCreated(petName);
    expect(isUpdateOwnerVisible).to.be.true;
    // Tomar captura de pantalla
    const screenshot = await page.screenshot({ path: `reports/screenshots/${petName}.png`, fullPage: true });
    this.attach(screenshot, 'image/png');
});


Then('selecciono el boton en agregar visita de la {string}', async function (petName) {
  await petPage.clickOnAddVisit(petName);
});


Then('agrego visita a la mascota {string}, {string}',  async function (date, description) {
    await petPage.fillVisitForm(date, description);
});

Then('se seleccionar el boton add visit',  async function () {
    await petPage.clickOnAddVisitFinButton();
    // Tomar captura de pantalla
    //const screenshot = await page.screenshot({ path: `reports/screenshots/visit.png`, fullPage: true });
    //this.attach(screenshot, 'image/png');
});


Then('se valida la description de la visita agregada {string} en la mascota {string}',async function (description, petName) {
   

    const isVisitPetVisible = await petPage.expectVisibleNewPetVisit(description, petName);
    expect(isVisitPetVisible).to.be.true;
    // Tomar captura de pantalla
    const screenshot = await page.screenshot({ path: `reports/screenshots/${description}.png`, fullPage: true });
    this.attach(screenshot, 'image/png');
});

Then('selecciono el boton en editar mascota {string}', async function (petName) {
   await petPage.clickOnEditPet(petName);
});


Then('actualizo la mascota {string}, {string}, {string}', async function (UpdatepetName, UpdatepetBirthDate, UpdatepetType) {
    await petPage.fillPetForm(UpdatepetName, UpdatepetBirthDate, UpdatepetType);
});

Then('se seleccionar el boton update pet', async function () {
    await petPage.clickOnBtnUpdatePet();
    const screenshot = await page.screenshot({ path: `reports/screenshots/updatePet.png`, fullPage: true });
    this.attach(screenshot, 'image/png');
});

Then(`se valida la alerta de edicion de la mascota`, async function () {
    const isVisibleAlert = await petPage.expectVisibleAlertUpdatePet();
    expect(isVisibleAlert).to.be.true;
});