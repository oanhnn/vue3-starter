import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import App from '@/App.vue'

describe('App', () => {
  test('render', async () => {
    const wrapper = await mount(App)
    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
