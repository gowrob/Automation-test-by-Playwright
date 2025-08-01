// tests/test.spec.js
import { test, expect } from '@playwright/test';
//test part 1 
test('User Registration', async ({ page }) => {
  // Navigate to registration page
  await page.goto('https://farazi.staging.dokandev.com/register');

  // Fill registration form
  await page.fill('input[name="first_name"]', 'gowrob');
  await page.fill('input[name="last_name"]', 'sarkar');
  await page.fill('input[name="email"]', 'gowrob.bauet@gmail.com');
  await page.fill('input[name="password"]', 'gowrob123');
  await page.fill('input[name="password_confirmation"]', 'gowrob123');

  // Click Create Account button
  await page.click('button[type="submit"]');

  
  await expect(page).toHaveURL(/.*dashboard.*/); // adjust target page

});
// test part 2 

test('Login with valid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('https://farazi.staging.dokandev.com/login');

  // Fill login form
  await page.fill('input[name="email"]', 'gowrob.bauet@gmail.com');
  await page.fill('input[name="password"]', 'gowrob123@');

  // Click login button
  await page.click('button[type="submit"]');


  await expect(page).toHaveURL(/.*dashboard.*/);


});

//Visit my account and give phone number and save changes
test('Update customer profile mobile number', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://farazi.staging.dokandev.com/login');
  await page.fill('input[name="email"]', 'gowrob.bauet@gmail.com');
  await page.fill('input[name="password"]', 'gowrob123@');
  await page.click('button[type="submit"]');

  // Step 2: Go to profile page
  await page.goto('https://farazi.staging.dokandev.com/customers/profile');

  // Step 3: Fill mobile number
  await page.fill('input[name="mobile"]', '01766943332');

  // Step 4: Click Save Changes
  await page.click('button[type="submit"]');

  // Step 5: Assert success message or updated field
  await expect(page.locator('.alert-success')).toContainText('Profile updated');
  // OR check value persists
  await expect(page.locator('input[name="mobile"]')).toHaveValue('01766943332');
});
// SIDE QUEST ***

test('Add new address', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://farazi.staging.dokandev.com/login');
  await page.fill('input[name="email"]', 'gowrob.bauet@gmail.com');
  await page.fill('input[name="password"]', 'gowrob123@');
  await page.click('button[type="submit"]');

  // Step 2: Navigate to addresses page
  await page.goto('https://farazi.staging.dokandev.com/customers/addresses');

  // Step 3: Click Add Address button
  await page.click('/html/body/main/div/div[1]/div/button');

  // Step 4: Fill in address form
  await page.fill('input[name="first_name"]', 'gowrob');
  await page.fill('input[name="last_name"]', 'sarkar');
  await page.selectOption('select[name="country"]', { label: 'Bangladesh' });
  await page.fill('input[name="address"]', 'mirpur2,dhaka');

  // Step 5: Click Save button using XPath
  await page.click('//*[@id="headlessui-dialog-:r32:"]/div/div[2]/div[3]/div/button[2]');

  
  await expect(page).toHaveURL(/customers\/addresses/);

});