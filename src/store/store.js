import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userSlice,
  product: productSlice,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
