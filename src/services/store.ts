import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducer/dataReducer";
import { modalReducer } from "./modalReducer/modalReducer";
import { cartReducer } from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  item: dataReducer,
  modal: modalReducer,
  cart: cartReducer,
})
export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;