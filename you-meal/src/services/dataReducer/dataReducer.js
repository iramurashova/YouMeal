import { createSlice } from "@reduxjs/toolkit";


const initialState = {
item: null
  
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
export const {getItemData, removeItemData} = dataSlice.actions