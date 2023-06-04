import { test, expect } from '@playwright/experimental-ct-vue'
import HelloWorld from '../HelloWorld.vue'

test('foo', async ({ mount }) => {
  const component = await mount(HelloWorld)
  await expect(component).toBeVisible()
})
