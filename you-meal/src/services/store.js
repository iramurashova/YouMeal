import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducer/dataReducer";
import { modalReducer } from "./modalReducer/modalReducer";

export const store = configureStore({
  reducer: {
    item: dataReducer,
    modal: modalReducer,
  },
});