import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { page, homePage } from './hooks';
import config from 'config';

Given('Navego en la web de Pet Clinic', async function () {
  const BASE_URL = config.get('baseUrl') as string;
  await page.goto(BASE_URL, { timeout: 30000 }); // Aumentar el tiempo de espera a 30 segundos
  const isUpdateOwnerVisible = await homePage.expectVisibleHomePage();
  expect(isUpdateOwnerVisible).to.be.true;
});
