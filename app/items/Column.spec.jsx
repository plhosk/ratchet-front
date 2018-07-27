import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
// import sinon from 'sinon'

// import store from '../store'
import { Column } from './Column'

describe('<Column /> with a columnNumber prop', () => {
  const props = {
    itemList: [],
    columnNumber: 2,
    search: '',
    dispatch: () => {},
  }

  const wrapper = shallow(<Column {...props} />)

  it('displays the given column number in the title', () => {
    expect(wrapper.find('div#header').text()).to.have.string('Column')
    expect(wrapper.find('div#header').text()).to.have.string('2')
  })
})

describe('<Column /> with an itemList', () => {
  const props = {
    itemList: [{
      _id: '123456',
      title: 'Test Item',
      column: 1,
    }],
    columnNumber: 1,
    search: '',
    dispatch: () => {},
  }

  const wrapper = mount(<Column {...props} />)
  it('renders the item in the appropriate column', () => {
    expect(wrapper.find('#item-title').text()).to.have.string('Test Item')
  })
})

describe('<Column /> with an item that does not match its column number', () => {
  const props = {
    itemList: [{
      _id: '123456',
      title: 'Test Item',
      column: 1,
    }],
    columnNumber: 2,
    search: '',
    dispatch: () => {},
  }

  const wrapper = mount(<Column {...props} />)
  it('does not render the item', () => {
    expect(wrapper.find('#item-title')).to.have.lengthOf(0)
  })
})
