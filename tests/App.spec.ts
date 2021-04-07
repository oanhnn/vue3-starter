import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import App from '../src/App.vue'

describe('App.spec.js', function () {
  it('renders', async function () {
    const wrapper = await mount(App, { attachTo: '#app' })
    expect(wrapper.html()).to.contain('Hello')
  })
})
