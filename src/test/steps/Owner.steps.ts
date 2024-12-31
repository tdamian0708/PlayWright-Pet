import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { browser, page, ownerPage } from './hooks';

/*
Given('Navego en la web de Pet Clinic', async function () {
  await page.goto('https://petclinic-production.up.railway.app/');
});
*/

When('accedo al modulo de Find owners', async function () {
  await ownerPage.clickModuloFindOwners();
});

When('click al boton de Find Owner', async function () {
  await ownerPage.clickOnListOwnerButton();
});

Then('se validar una lista de todos los owners', async function () {
  const isOwnerCreatedVisible = await ownerPage.expectVisibleTableOwner();
  console.log('Se valida el listado de todos los owners');
  expect(isOwnerCreatedVisible).to.be.true;
  const screenshot = await page.screenshot({ path: `reports/screenshots/editOwner.png`, fullPage: true });
  this.attach(screenshot, 'image/png');
});

When('agrego un nuevo owner con los datos de {string}, {string}, {string}, {string}, {string}', async function (firstName, lastName, address, city, telephone) {
  console.log('Se creara existosamente el owner', firstName, lastName, address, city, telephone);

  await ownerPage.clickOnAddOwnerButton();
  await ownerPage.fillOwnerForm(firstName, lastName, address, city, telephone);
  await ownerPage.clickOnAddOwnerFinButton();
});

Then('se valida la alerta creacion del owner', async function () {
  const isOwnerCreatedVisible = await ownerPage.expectVisibleNewOwnerCreated();
  console.log('Se creara existosamente el owner');
  expect(isOwnerCreatedVisible).to.be.true;
});


Then('se busca el apellido del owner {string}', async function (lastName) {
  //console.log('Se creara existosamente el owner', lastName);
  await ownerPage.clickModuloFindOwners();
  await ownerPage.clickOnListOwnerButtonLastName(lastName);
  await ownerPage.clickOnListOwnerButton();
});

Then('se valida que el owner se encuentre en la lista de owners', async function () {
  const isOwnerCreatedVisible = await ownerPage.expectVisibleTxtOwnerInformation();
  console.log('Se creara existosamente el owner');
  expect(isOwnerCreatedVisible).to.be.true;
});

When('selecciono el primer owner de la busqueda', async function () {
  await ownerPage.clickPrimerOwner();

});

When('actualizo el primer nombre {string}', async function (firstName) {
  await ownerPage.fillUpdateFistname(firstName);
});

Then('se valida la alerta de edicion del owner', async function () {
  const isUpdateOwnerVisible = await ownerPage.expectVisibleTxtUpdateOwner();
  expect(isUpdateOwnerVisible).to.be.true;

  const screenshot = await page.screenshot({ path: `reports/screenshots/editOwner.png`, fullPage: true });
  this.attach(screenshot, 'image/png');
})


When('selecciono el boton en editar', async function () {
  await ownerPage.clickOnEditOwnerButton();
});


When('selecciono el boton en agregar mascota', async function () {
  await ownerPage.clickAddNewPet();
});




