import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // show browser
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.amazon.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 1,
  reporter: 'html',
});
