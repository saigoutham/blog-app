import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import PromiseMiddleware from 'redux-promise';

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);