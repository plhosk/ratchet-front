import { call, put, takeLatest } from 'redux-saga/effects'

import { apiHost, statusHandler } from '../api'

const reducer = (state = {
  itemList: [],
  search: '',
}, action) => {
  switch (action.type) {
    case 'ITEMS_LIST_FULFILLED':
      return {
        ...state,
        itemList: action.payload,
      }
    case 'ITEMS_SEARCH':
      return {
        ...state,
        search: action.payload,
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


const itemsAddApi = item => fetch(`${apiHost}/items`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(item),
})
  .then(statusHandler)
  .then(response => response.json())

function* itemsAdd(action) {
  try {
    const result = yield call(itemsAddApi, action.payload)
    yield put({ type: 'ITEMS_ADD_FULFILLED', payload: result })
    yield put({ type: 'ITEMS_LIST' })
  } catch (e) {
    yield put({ type: 'ITEMS_ADD_ERROR', payload: e })
  }
}


const itemsDeleteApi = id => fetch(`${apiHost}/items/${id}`, {
  method: 'DELETE',
})
  .then(statusHandler)
  .then(response => response.json())

function* itemsDelete(action) {
  try {
    const result = yield call(itemsDeleteApi, action.payload)
    yield put({ type: 'ITEMS_DELETE_FULFILLED', payload: result })
    yield put({ type: 'ITEMS_LIST' })
  } catch (e) {
    yield put({ type: 'ITEMS_DELETE_ERROR', payload: e })
  }
}


function* sagas() {
  yield takeLatest('ITEMS_LIST', itemsList)
  yield takeLatest('ITEMS_ADD', itemsAdd)
  yield takeLatest('ITEMS_DELETE', itemsDelete)
}

export {
  reducer,
  sagas,
}
