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
    const newState = { ...state, isFetching: true }

    return newState || state;
  },
  [types.GET_CLASSES_COMPLETE](state, action) {
    const newState = {
      ...state,
      isFetching: false,
      fetched: true,
      data: action.payload
    };

    return newState || state;
  },
  [types.GET_CLASSES_ERROR](state, action) {
    const newState = {
      ...state,
      isFetching: false,
      fetched: false,
      error: action.payload
    };

    return newState || state;
  },
});

export default classes;