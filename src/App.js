// App.js
import React from 'react';
import { ShoppingContextProvider } from './context/ShoppingContext';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';

const App = () => {
  return (
    <ShoppingContextProvider>
      <div className="container mx-auto p-4 sm:p-6 bg-gradient-to-r from-slate-900 to-gray-900 text-black rounded shadow-md">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-50 mb-6 sm:mb-16 text-center font-serif">
          Shopping List 🛒
        </h1>
        <AddItemForm />
        <ShoppingList />
      </div>
    </ShoppingContextProvider>
  );
};

export default App;
