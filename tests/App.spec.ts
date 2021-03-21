import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import App from '@/App.vue'

describe('App.spec.js', () => {
  it('renders', async () => {
    const wrapper = await mount(App, { attachTo: '#app' })
    expect(wrapper.html()).to.contain('Hello')
  })
})
