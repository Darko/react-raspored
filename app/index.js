import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger"
import reducers from './reducers/index';
import App from './router/index';

import { getClasses } from './actions/index';

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware);

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Main;