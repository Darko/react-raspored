import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Schedule from './reducers/index';
import App from './router/index';

import { getClasses } from './actions/index';

const store = createStore(Schedule);

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Main;