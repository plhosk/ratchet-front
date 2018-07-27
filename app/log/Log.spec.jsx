import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import store from '../store'
import Log from './Log'

describe('<Log />', () => {
  sinon.spy(Log.prototype, 'componentDidMount')
  const wrapper = shallow(<Log store={store} />).dive()

  it('runs componentDidMount', () => {
    expect(Log.prototype.componentDidMount.calledOnce).to.equal(true)
  })
  it('renders a div', () => {
    expect(wrapper.find('div').length).to.be.above(0)
  })
})
