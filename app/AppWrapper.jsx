import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import store from './store'
import App from './App'

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default hot(module)(AppWrapper)
