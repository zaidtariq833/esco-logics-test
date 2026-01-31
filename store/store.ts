import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "@/slices/productSlice";

const reducer = combineReducers({
  product: productReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
