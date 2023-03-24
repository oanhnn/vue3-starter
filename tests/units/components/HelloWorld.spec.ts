import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('components/HelloWorld.vue', () => {
  test('HelloWorld', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Tester' } })

    expect(wrapper.text()).toContain('Hello Tester')
    expect(wrapper.html()).toMatchSnapshot()

    const button = wrapper.find('button')
    expect(button.text()).toBe('count is: 0')

    // Dispatch a click event to our increment button.
    await button.trigger('click')

    expect(button.text()).toBe('count is: 1')

    await button.trigger('click')
    await button.trigger('click')

    expect(button.text()).toBe('count is: 3')
  })
})
