import React from 'react'
import App from './App'
import { configure } from 'enzyme'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const wrap = (props = {}, state = null) => {
  return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
test('renders without error', () => {
  const wrapper = wrap()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = wrap()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = wrap()
  const display = findByTestAttr(wrapper, 'counter-display')
  expect(display.length).toBe(1)
})

test('counter starts at zero', () => {
  const wrapper = wrap()
  const display = findByTestAttr(wrapper, 'counter-display')
  expect(display.text()).toBe('0')
})

test('clicking button increments the counter on display', () => {
  const wrapper = wrap()
  const button = findByTestAttr(wrapper, 'increment-button')

  button.simulate('click')
  const display = findByTestAttr(wrapper, 'counter-display')

  expect(display.text()).toBe('1')
})
