import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Congrats from './Congrats'
import { findByTestAttr } from './testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Congrats', () => {
  const wrapper = shallow(<Congrats />)
  const component = findByTestAttr(wrapper, 'component-congrats')

  it('renders without error', () => {
    expect(component.length).toBe(1)
  })

  it('renders no text when success prop is false', () => {
    expect(component.text()).toBe('')
  })

  it('renders no empty congrats when success prop is true', () => {
    wrapper.setProps({ success: true })
    const msg = findByTestAttr(wrapper, 'congrats-message')
    expect(msg.text().length).not.toBe(0)
  })
})
