/*import 'core-js/fn/object/assign';*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/insure/app';
import {  Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducer"


let store = createStore(reducer);
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>

),document.getElementById('app'));

store.dispatch({type:'GETPRODUCTLIST'});