import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { apiSlice } from '../api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import riteReducer from './riteReducer'

export const store = configureStore({
  reducer: {
    rite: riteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch)

