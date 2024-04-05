import { createSlice } from "@reduxjs/toolkit";
import { TItem } from "../../utils/types";

type TItemState = {
  item: TItem | null;
};
const initialState:TItemState = {
  item: null,
};

const dataSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    getItemData: (state, action) => {
      state.item = action.payload;
    },
    removeItemData: (state) => {
      state.item = null;
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const { getItemData, removeItemData } = dataSlice.actions;
