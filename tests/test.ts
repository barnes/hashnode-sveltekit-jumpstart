import { expect, test } from '@playwright/test';
import { dotenv } from 'dotenv'

dotenv.config();

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('title')).toBeVisible();
});
