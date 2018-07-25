import { call, put, takeLatest } from 'redux-saga/effects'

import apiHost from '../apiHost'

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

function* logFetch() {
  try {
    const result = yield call(() => fetch(`${apiHost}/api/log`).then(response => response.json()))
    yield put({ type: 'LOG_FETCH_FULFILLED', result })
  } catch (e) {
    yield put({ type: 'LOG_FETCH_ERROR', payload: e })
    yield call(error => console.log(`Log fetch error: ${error.message || ''}`), e) // eslint-disable-line no-console
  }
}

function* sagas() {
  yield takeLatest('LOG_FETCH', logFetch)
}

export {
  reducer,
  sagas,
}
