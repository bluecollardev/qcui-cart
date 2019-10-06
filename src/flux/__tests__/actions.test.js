import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'

import { CartActions, ActionTypes }  from '../actions'

configure({ adapter: new Adapter() })
describe('Test Actions', () => {
  test('is truthy', () => {
    expect(CartActions).toBeTruthy()
  })
})
