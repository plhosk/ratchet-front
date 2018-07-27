import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
// import sinon from 'sinon'

import store from '../store'
import AddItem from './AddItem'

describe('<AddItem />', () => {
  // sinon.spy(Items.prototype, 'componentDidMount')
  const wrapper = shallow(<AddItem store={store} />).dive()

  // it('runs componentDidMount', () => {
  //   expect(Items.prototype.componentDidMount.calledOnce).to.equal(true)
  // })
  it('renders an input', () => {
    expect(wrapper.find('input')).to.have.lengthOf(1)
  })
  it('renders a select', () => {
    expect(wrapper.find('select')).to.have.lengthOf(1)
  })
  it('renders a button', () => {
    expect(wrapper.find('button')).to.have.lengthOf(1)
  })
  it('changes its state when the button is clicked', () => {
    expect(wrapper.state('validationMessage')).to.equal('')
    wrapper.find('button').simulate('click')
    expect(wrapper.state('validationMessage')).to.have.string('Please')
  })
  it('properly updates a controlled input component', () => {
    expect(wrapper.state('title')).to.equal('')
    wrapper.find('input').prop('onChange')({ target: { value: 'this is a test' } })
    expect(wrapper.state('title')).to.equal('this is a test')
  })
})
