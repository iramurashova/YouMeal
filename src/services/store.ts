import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducer/dataReducer";
import { modalReducer } from "./modalReducer/modalReducer";
import { cartReducer } from "./cartReducer/cartReducer";
import { orderReducer } from "./orderReducer/orderReducer";

const rootReducer = combineReducers({
  item: dataReducer,
  modal: modalReducer,
  cart: cartReducer,
  order: orderReducer,
})
export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;