import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:3000'

test.describe('Homepage', () => {
  test('It has hello text', async ({ page }) => {
    await page.goto(`${BASE_URL}/`)

    expect(await page.textContent('#app > h1')).toBe(
      'Hello Vue 3 + TypeScript + Vite'
    )
  })

  test('It has button', async ({ page }) => {
    await page.goto(`${BASE_URL}/`)

    expect(await page.textContent('#app > button')).toBe(' count is: 0')

    await page.click('#app > button')
    expect(await page.textContent('#app > button')).toBe(' count is: 1')
  })
})
