import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  items: [],
};

// Reducer function
const shoppingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_ALL_ITEMS':
      return {
        ...state,
        items: [],
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };
    default:
      return state;
  }
};

// Create context
const ShoppingContext = createContext();

// Custom hook to use the context
const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShoppingContext must be used within a ShoppingContextProvider');
  }
  return context;
};

// Context provider component
const ShoppingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const addItem = item => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = itemId => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearAllItems = () => {
    dispatch({ type: 'CLEAR_ALL_ITEMS' });
  };

  const updateQuantity = (itemId, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, newQuantity } });
  };

  const value = {
    state,
    addItem,
    removeItem,
    clearAllItems,
    updateQuantity,
  };

  return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
};

export { ShoppingContextProvider, useShoppingContext };
