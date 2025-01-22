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

test('formCadastro', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
});

test('teste Erro', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Enviar' }).click();
});

test('Teste Cadastro', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
  await page.waitForTimeout(2000);
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('a');
  await page.waitForTimeout(2000);
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('o@oi.com.br');
  await page.waitForTimeout(2000);
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('rafa');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Enviar' }).click();
});

test('teste duplicado', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('a');
  await page.waitForTimeout(2000);
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('o@oi.com.br');
  await page.waitForTimeout(2000);
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('rafa');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Enviar' }).click();
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('a');
  await page.waitForTimeout(2000);
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('o@oi.com.br');
  await page.waitForTimeout(2000);
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('rafa');
  await page.waitForTimeout(2000);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Enviar' }).click();
});

test('teste limpar', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('a');
  await page.waitForTimeout(2000);
  await page.getByLabel('Nome:').press('Enter');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('o@oi.com.br');
  await page.waitForTimeout(2000);
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('rafa');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Enviar' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Limpar Cadastros' }).click();
});