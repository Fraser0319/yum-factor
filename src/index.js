import React from 'react'
import { render } from "react-dom";
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './Reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
