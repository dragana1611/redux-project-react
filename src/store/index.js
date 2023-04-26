// import { legacy_createStore as createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

//We should NEVER MUTATE the state, the existing state. We should never change the existing state. Instead, always override it by returning a brand new state object.
