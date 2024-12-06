// import { test, Page, expect } from '@playwright/test';
// var path = require("path");

// test.describe.configure({ mode: 'serial' });

// var helper = require('../test_helper');

// //Reuse the page among the test cases in the test script file
// let page: Page;

// test.beforeAll(async ({ browser }) => {
//   // Create page once.
//   page = await browser.newPage();
// });

// test.afterAll(async () => {
//   await page.close();
// });

// test.beforeEach(async () => {
//   await page.goto(helper.site_url());
// });

// test('Can log in successfully', async () => {
//   await page.fill("#username", "agileway")  
//   await page.fill("#password", "testwise")
//   await page.click("input:has-text('Sign in')")
//   const flashText = await page.textContent('#flash_notice')
//   expect(flashText).toEqual('Signed in!')
  
// });

// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('should load the home page', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
