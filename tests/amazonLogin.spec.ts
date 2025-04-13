import { test, expect } from '@playwright/test';

test('Amazon Login and Homepage Validation', async ({ page }) => {
  await page.goto('/');

  await page.hover('#nav-link-accountList'); 
  await page.click('text=Sign in');

  await page.fill('input#ap_email', 'your-email@example.com'); // please add your username here
  await page.click('input#continue');

  await page.fill('input#ap_password', 'your-password');
  await page.click('input#signInSubmit');

  await page.waitForSelector('#nav-link-accountList-nav-line-1', { timeout: 10000 });

  // Validate homepage title
  await expect(page).toHaveTitle(/Amazon\.com: /);
});
