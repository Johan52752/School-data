import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './routes/app';
import reducer from './reducers'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
