import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
// import sinon from 'sinon'

import store from '../store'
import Search from './Search'

describe('<Search />', () => {
  const wrapper = shallow(<Search store={store} />).dive()

  it('renders an input', () => {
    expect(wrapper.find('input')).to.have.lengthOf(1)
  })
})
