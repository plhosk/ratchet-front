import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import ReduxActionLogToggle from './ReduxActionLogToggle'

describe('<App />', () => {
  const wrapper = shallow(<App />)

  it('renders a Router', () => {
    expect(wrapper.find(Router).length).to.equal(1)
  })

  it('renders three Routes', () => {
    expect(wrapper.find(Route).length).to.equal(3)
  })

  it('renders the Redux action log toggle', () => {
    expect(wrapper.find(ReduxActionLogToggle).length).to.equal(1)
  })
})
