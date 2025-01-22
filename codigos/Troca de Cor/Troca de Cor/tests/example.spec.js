// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('troca de cor', async ({ page }) => {
  await page.goto(file:///C:/Users/Aluno_Noite/AppData/Local/Temp/307516f5-43b1-4c70-9ea4-87145cdedb42_Troca%20de%20Cor.zip.Troca%20de%20Cor.zip/Troca%20de%20Cor/index.html);

  const button = 'button';
  const title = 'h1'

  let text = '';

  while(text !== 'background-color: BLUE'){
      await page.click(button);
      text = await page.locator(title).innerText();

      await page.waitForTimeout(3000);

      console.log(`titulo atual: ${text}`);
  }

  const backgroundColor = await page.evaluate(() => {
    return getComputedStyle(document.body).backgroundColor;
  });

  expect(backgroundColor).toBe('rgb(0,0,255)')
  expect(text).toBe('background-color: BLUE');
});
