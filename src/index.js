import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import apiMiddleware from './store/apiMiddleware';
import reducers from './store/reducers';
import App from './components/App';

const middleware = applyMiddleware(apiMiddleware);
const store = createStore(reducers, middleware);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
