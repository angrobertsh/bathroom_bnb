import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ACTIONS from './actions/bathroom_actions';
import * as ACTIONS2 from './actions/review_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store;
  let preloadedState;
  if (window.currentUser){
    preloadedState = {session: {currentUser: window.currentUser}}
  }
  store = configureStore(preloadedState);
  window.store = store;
  window.all = ACTIONS.requestAllBathrooms;
  window.one = ACTIONS.requestSingleBathroom;


  ReactDOM.render(<Root store={ store }/>, root);
});
