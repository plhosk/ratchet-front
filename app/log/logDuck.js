import { call, put, takeLatest } from 'redux-saga/effects'

import { apiHost, statusHandler } from '../api'

const reducer = (state = {
  log: [],
}, action) => {
  switch (action.type) {
    case 'LOG_FETCH':
      return {
        ...state,
        loading: true,
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
    // yield call(error => console.log(`Log fetch error: ${error.message || ''}`), e) // eslint-disable-line no-console
  }
}

function* sagas() {
  yield takeLatest('LOG_FETCH', logFetch)
}

export {
  reducer,
  sagas,
}
