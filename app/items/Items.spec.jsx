import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import store from '../store'
import Items from './Items'
import AddItem from './AddItem'
import Search from './Search'
import ColumnComponent from './Column'

describe('<Items />', () => {
  sinon.spy(Items.prototype, 'componentDidMount')
  const wrapper = shallow(<Items store={store} />).dive()

  it('runs componentDidMount', () => {
    expect(Items.prototype.componentDidMount.calledOnce).to.equal(true)
  })
  it('renders AddItem', () => {
    expect(wrapper.find(AddItem)).to.have.lengthOf(1)
  })
  it('renders Search', () => {
    expect(wrapper.find(Search)).to.have.lengthOf(1)
  })
  it('renders two Columns', () => {
    expect(wrapper.find(ColumnComponent)).to.have.lengthOf(2)
  })
})
