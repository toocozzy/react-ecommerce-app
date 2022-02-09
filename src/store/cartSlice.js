import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    updateCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;

      state.totalQuantity++;

      state.items.push({
        id: newItem.id,
        name: newItem.name,
        img: newItem.img,
        enteredSize: newItem.size,
        price: newItem.price,
        quantity: 1,
      });

      state.totalPrice = state.totalPrice + newItem.price;

      console.log(current(state));
    },

    removeItemFromCart(state, action) {
      const removedItem = action.payload;
      state.items = state.items.filter((item) => item.id !== removedItem.id);
      state.totalPrice = state.totalPrice - removedItem.price;
      console.log(current(state));
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
