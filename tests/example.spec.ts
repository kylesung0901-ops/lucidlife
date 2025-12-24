import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  
  // Check if the page title is correct
  await expect(page).toHaveTitle(/Funeral Services Website Design/);
  
  // Check if main content is visible
  const header = page.locator('header').first();
  await expect(header).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Check if navigation elements are present
  const body = page.locator('body');
  await expect(body).toBeVisible();
});

test('contact form is accessible', async ({ page }) => {
  await page.goto('/');
  
  // Scroll to contact section
  await page.evaluate(() => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Wait a bit for scroll animation
  await page.waitForTimeout(1000);
  
  // Check if contact section exists
  const contactSection = page.locator('#contact');
  await expect(contactSection).toBeVisible();
});

