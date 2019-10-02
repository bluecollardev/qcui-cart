import 'jsdom-global/register'

import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme'

import ExampleComponent from './'

configure({ adapter: new Adapter() })
describe('ExampleComponent', () => {
  test('is truthy', () => {
    expect(ExampleComponent).toBeTruthy()
  })

  test('the component renders the text inside it', () => {
    const component = mount(<ExampleComponent />)
    console.log(component)
    expect(component.props().text).toEqual('My Component')
    expect(component.find('div').text()).toEqual(`Example Component: ${component.props().text}`)
  })
})
