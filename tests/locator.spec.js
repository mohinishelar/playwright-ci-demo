import { test, expect } from '@playwright/test';

test('Playwright Locators Live Demo', async ({ page }) => {

  // Open website
  await page.goto('https://the-internet.herokuapp.com/login');

  // Pause to show Inspector 
 //await page.pause();

  // getByLabel – Username
  await page.getByLabel('Username').fill('tomsmith');

  // getByPlaceholder – Password
    //await page.getByPlaceholder('Password')
 // .fill('SuperSecretPassword!');

  await page.getByLabel('Password')
 .fill('SuperSecretPassword!');

  // getByRole – Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // getByText – Success message validation
  await expect(
    page.getByText('You logged into a secure area!')
  ).toBeVisible();

  // CSS locator – Logout button
  await page.locator('a.button').click();

  // Final validation
  await expect(
    page.getByText('You logged out of the secure area!')
  ).toBeVisible();
});
