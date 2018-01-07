import * as types from './types';

export const getClasses = function(userId) {
  return function(dispatch) {
    dispatch({ type: types.GET_CLASSES });

    fetch('https://api.chucknorris.io/jokes/random') // Some random api i found for testing
    .then(result => {
      console.log(result.body)
      return dispatch({ type: types.GET_CLASSES_COMPLETE, payload: result });
    })
    .catch(error => {
      return dispatch({ type: types.GET_CLASSES_ERROR, payload: error });
    })
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