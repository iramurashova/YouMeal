import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducer/dataReducer";
import { modalReducer } from "./modalReducer/modalReducer";
import { cartReducer } from "./cartReducer/cartReducer";

export const store = configureStore({
  reducer: {
    item: dataReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});