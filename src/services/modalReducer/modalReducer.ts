import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  isOpen: boolean;
  typeOfModal: "delivery" | "item" | "order" | null;
};

const initialState: TinitialState = {
  isOpen: false,
  typeOfModal: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.typeOfModal = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.typeOfModal = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
