import ContextApi from "./context-api";
import { useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const ContextProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    cartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    cartAction({
      type: "ADD",
      id: id,
    });
  };

  const contextApi = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ContextApi.Provider value={contextApi}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
