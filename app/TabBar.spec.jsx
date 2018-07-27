import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
// import sinon from 'sinon'
// import { Link } from 'react-router-dom'

import TabBar from './TabBar'

describe('<TabBar />', () => {
  it('renders one link', () => {
    const wrapper = shallow(<TabBar location={{ pathname: '/' }} />)
    expect(wrapper.find('#link')).to.have.lengthOf(1)
  })

  it('shows the correct title on /', () => {
    const wrapper = shallow(<TabBar location={{ pathname: '/' }} />)
    expect(wrapper.find('span').text()).to.have.string('Add An Item')
  })

  it('shows the correct title on /log', () => {
    const wrapper = shallow(<TabBar location={{ pathname: '/log' }} />)
    expect(wrapper.find('span').text()).to.have.string('Log')
  })
})
