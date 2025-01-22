import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Desktop/codigos/formCadastro/formCadastro/index.html');
  await page.getByRole('button', { name: 'Enviar' }).click();
});