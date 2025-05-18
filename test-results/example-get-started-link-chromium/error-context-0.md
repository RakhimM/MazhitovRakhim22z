# Test info

- Name: get started link
- Location: D:\PP_2\KRB2\12345 — копия — копия\rater\e2e\example.spec.ts:10:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://playwright.dev/", waiting until "load"

    at D:\PP_2\KRB2\12345 — копия — копия\rater\e2e\example.spec.ts:11:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('has title', async ({ page }) => {
   4 |   await page.goto('https://playwright.dev/');
   5 |
   6 |   // Expect a title "to contain" a substring.
   7 |   await expect(page).toHaveTitle(/Playwright/);
   8 | });
   9 |
  10 | test('get started link', async ({ page }) => {
> 11 |   await page.goto('https://playwright.dev/');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  12 |
  13 |   // Click the get started link.
  14 |   await page.getByRole('link', { name: 'Get started' }).click();
  15 |
  16 |   // Expects page to have a heading with the name of Installation.
  17 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  18 | });
  19 |
```