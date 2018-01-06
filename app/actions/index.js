import * as types from './types';

export const getClasses(userId) {
  return {
    type: types.GET_CLASSES,
    payload: {
      userId
    }
  }
}