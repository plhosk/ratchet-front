import { call, put, takeLatest } from 'redux-saga/effects'

import { apiHost, statusHandler } from '../api'

const reducer = (state = {
  itemList: [],
  loading: false,
}, action) => {
  switch (action.type) {
    case 'ITEMS_LIST':
      return {
        ...state,
        loading: true,
      }
    case 'ITEMS_LIST_FULFILLED':
      return {
        ...state,
        itemList: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

const itemsListApi = () => fetch(`${apiHost}/items`)
  .then(statusHandler)
  .then(response => response.json())

function* itemsList() {
  try {
    const result = yield call(itemsListApi)
    yield put({ type: 'ITEMS_LIST_FULFILLED', payload: result })
  } catch (e) {
    yield put({ type: 'ITEMS_LIST_ERROR', payload: e })
    // yield call(error => console.log(`Items list error: ${error.message || ''}`), e) // eslint-disable-line no-console
  }
}

function* sagas() {
  yield takeLatest('ITEMS_LIST', itemsList)
}

export {
  reducer,
  sagas,
}
