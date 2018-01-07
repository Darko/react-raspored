import * as types from './types';

export const getClasses = function(userId) {
  return {
    type: types.GET_CLASSES,
    payload: {
      isFetching: true
    }
  }
}

const subscribeToClass = function() {
  return {
    type: types.SUBSCRIBE_TO_CLASS,
    payload: {
      dx: false,
      xd: true
    }
  }
}