import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from './reducers';

// Create the Redux store using the reducer and initial state
const store = createStore(reducer);

// Create a provider component to wrap your app and provide access to the store
const StoreProvider = (props) => {
  return <Provider store={store}{...props} />;
};

export default StoreProvider;

