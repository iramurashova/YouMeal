import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.counter = action.payload.length;
      state.list = action.payload;
    },
    removeItem: (state, action) => {
      state.counter = action.payload.length;
      state.list = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
