import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  menuIsVisible: false,
  modalIsVisible: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleMenu(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
    toggleModal(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
    toggleLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
