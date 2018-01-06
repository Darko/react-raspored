import createReducer from '../lib/helpers';
import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  fetched: false,
  data: [],
  error: null
}

const classes = createReducer({}, {
  [types.GET_CLASSES](state, action) {
    const newState = {
      prettyXd: true
    }

    return newState;
  }
});

export default classes;