
import { test, expect } from '@playwright/test';

test('admin can view and update user page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByLabel('Email').fill('admin@example.com');
  await page.getByRole('button', { name: 'Sign in' }).click();

});

test('Student', async ({ page }) => {
  await page.goto('http://localhost:3000/api/auth/callback/nodemailer?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=4041f092e35f454964c80d3407bd973accbae1b801c5256a39caac1e5118e5d9&email=xxx%40xxx.com');

  await page.getByRole('link', { name: 'Студент' }).click();
});
test('user navigates through all menu items', async ({ page }) => {
    // Заходим на главную страницу
    await page.goto('http://localhost:3000/api/auth/callback/nodemailer?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fprofile%3Fpage%3D2&token=c107ae6da7701faedc87cfb78c35033949e332a7a7c13f3a4c5690516fa8b657&email=aaa%40aaa.ru');

 // email не трогаем, т.к. его менять не надо
 await page.getByRole('button', { name: 'Редактировать профиль' }).click(); // Заполняем остальные поля
 await page.locator('input[name="name"]').fill('Тестовое имя');
 await page.locator('input[name="surname"]').fill('Тестовая фамилия');
 await page.locator('input[name="image"]').fill('https://example.com/photo.jpg');

 // Отправляем форму
 await page.getByRole('button', { name: 'Обновить' }).click();
 await page.getByRole('link', { name: 'Каталог товаров' }).click();
 // Проверяем, что форма отправлена (например, редирект или сообщение об успехе)
 // Пример проверки — замени на актуальный селектор/текст
  });