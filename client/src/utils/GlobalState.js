import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from './reducers';
import store from './store';

// Create a provider component to wrap your app and provide access to the store
export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
};


