import { expect } from 'chai'

import { reducer } from './itemsDuck'

describe('itemsDuck redux reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      itemList: [],
      search: '',
    })
  })

  it('should return updated state when ITEMS_LIST_FULFILLED is dispatched', () => {
    const action = {
      type: 'ITEMS_LIST_FULFILLED',
      payload: [{
        title: 'test item',
        column: 1,
      }],
    }
    expect(reducer(undefined, action)).to.deep.equal({
      itemList: action.payload,
      search: '',
    })
  })
})
