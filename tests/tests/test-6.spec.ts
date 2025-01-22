import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('a');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('o@oi.com.br');
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('rafa');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('a');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('o@oi.com.br');
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('rafa');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Enviar' }).click();
});