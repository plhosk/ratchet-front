import { combineReducers } from 'redux'
import { take, select, all } from 'redux-saga/effects'

import { reducer as itemsReducer, sagas as itemsSagas } from './items/itemsDuck'
import { reducer as logReducer, sagas as logSagas } from './log/logDuck'

const reduxActionLogReducer = (state = {
  show: false,
}, action) => {
  switch (action.type) {
    case 'REDUX_ACTION_LOG_TOGGLE':
      return {
        ...state,
        show: !state.show,
      }
    default:
      return state
  }
}

const appReducer = combineReducers({
  items: itemsReducer,
  log: logReducer,
  reduxActionLog: reduxActionLogReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_RESET_STORE') {
    state = undefined // eslint-disable-line no-param-reassign
  }
  return appReducer(state, action)
}

/**
 * Initialize sagas
 */

// Log every redux action

function* logActions() {
  if (process.env.NODE_ENV === 'production') {
    return
  }
  while (true) { // eslint-disable-line no-constant-condition
    const action = yield take()
    const state = yield select()
    if (state.reduxActionLog && state.reduxActionLog.show) {
      console.log(action.type, 'Action: ', action, 'State: ', state) // eslint-disable-line no-console
    }
  }
}

function* rootSaga() {
  yield all([
    logActions(),
    itemsSagas(),
    logSagas(),
  ])
}

export { rootReducer, rootSaga }
