import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import App from './App'
import AppWrapper from './AppWrapper'

describe('<AppWrapper />', () => {
  const wrapper = shallow(<AppWrapper />)

  it('renders an App', () => {
    expect(wrapper.find(App).length).to.equal(1)
  })

  it('provides a Provider', () => {
    expect(wrapper.find(Provider).length).to.equal(1)
  })
})
