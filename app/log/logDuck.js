import { call, put, takeLatest } from 'redux-saga/effects'

import { apiHost, statusHandler } from '../api'

const reducer = (state = {
  log: [],
}, action) => {
  switch (action.type) {
    case 'LOG_FETCH_FULFILLED':
      return {
        ...state,
        log: action.payload,
      }
    default:
      return state
  }
}

const logFetchApi = () => fetch(`${apiHost}/log`)
  .then(statusHandler)
  .then(response => response.json())

function* logFetch() {
  try {
    const result = yield call(logFetchApi)
    yield put({ type: 'LOG_FETCH_FULFILLED', payload: result })
  } catch (e) {
    yield put({ type: 'LOG_FETCH_ERROR', payload: e })
  }
}

function* sagas() {
  yield takeLatest('LOG_FETCH', logFetch)
}

export {
  reducer,
  sagas,
}
