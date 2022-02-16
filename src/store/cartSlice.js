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
      state.totalQuantity = action.payload.totalQuantity;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.enteredSize === newItem.size && item.id === newItem.id
      );

      state.totalQuantity++;
      state.totalPrice = state.totalPrice + newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          enteredSize: newItem.size,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },

    removeItemFromCart(state, action) {
      const removedItem = action.payload;

      const existingItem = state.items.findIndex(
        (item) =>
          item.enteredSize === removedItem.size && item.id === removedItem.id
      );
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - removedItem.price;
      if (state.items[existingItem].quantity === 1) {
        state.items = state.items.filter(
          (item, index) => index !== existingItem
        );
      } else {
        state.items[existingItem].quantity--;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
