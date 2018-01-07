import createReducer from '../lib/helpers';
import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  fetched: false,
  data: [],
  error: null
}

const classes = createReducer(initialState, {
  [types.GET_CLASSES](state, action) {
    const newState = { ...state, ...action.payload }

    return newState || state;
  }
});

export default classes;