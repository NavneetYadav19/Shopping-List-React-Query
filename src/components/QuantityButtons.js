import React from 'react';
import { useShoppingContext } from '../context/ShoppingContext';

const QuantityButtons = ({ itemId, initialQuantity }) => {
  const { updateQuantity } = useShoppingContext();

  const handleQuantityChange = (amount) => {
    const newQuantity = initialQuantity + amount;
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-center"> 
      <button
        onClick={() => handleQuantityChange(1)}
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 mr-2"
      >
        +
      </button>
      <span className="px-2">{initialQuantity}</span>
      <button
        onClick={() => handleQuantityChange(-1)}
        className={`p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ml-2 ${initialQuantity <= 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={initialQuantity <= 1}
      >
        -
      </button>
    </div>
  );
};

export default QuantityButtons;
