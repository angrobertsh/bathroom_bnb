import React from 'react';
import { Provider } from 'react-redux';
import AppRouterContainer from './router/router_container';

const Root = ({store}) => (
   <Provider store={store}>
     <AppRouterContainer />
   </Provider>
);

// This provides the store to the router which holds App

export default Root;
