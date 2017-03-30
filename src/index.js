import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';
import { fetchInvoices } from './actions/async';
import App from './App';
import './index.css';

var store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchInvoices());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
