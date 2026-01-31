const { test, expect } = require('@playwright/test');
test('Check Google title', async ({ page }) => {
await page.goto('https://www.google.com');
await expect(page).toHaveTitle(/Google/);
});
