import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const updatedItems = state.items.concat(newItem);
      const updatedTotalPrice = state.totalPrice + newItem.price;
      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    },
    updateCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    clearCart(state) {
      state.cart = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
