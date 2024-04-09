import { createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "../../utils/types";
type TOrderState = {
  way: "Самовывоз" | "Доставка" | null;
  details: {
    name:string,
    tel: string,
    adress: string,
    level: string,
    doorphone: string,
  } | null;
  list: TCartItem[] | [];
};

const initialState: TOrderState = {
  way: null,
  details: null,
  list: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.way = action.payload.way;
      state.details = action.payload.details;
      state.list = action.payload.list;
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const { addOrder } = orderSlice.actions;