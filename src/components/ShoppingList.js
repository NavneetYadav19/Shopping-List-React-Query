import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useShoppingContext } from '../context/ShoppingContext';
import QuantityButtons from './QuantityButtons';

const ShoppingList = () => {
  const { state, removeItem, clearAllItems } = useShoppingContext();
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  const totalItems = state.items.length;

  return (
    <animated.div style={fade} className="mt-4">
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-blue-50 mb-2 sm:mb-0">
          {totalItems} {totalItems === 1 ? 'item' : 'items'} in the list.
        </p>
        {totalItems > 0 && (
          <button
            onClick={() => clearAllItems()}
            className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
          >
            Clear All
          </button>
        )}
      </div>
      {totalItems === 0 ? (
        <p className="text-blue-50 text-center">No items in the list.</p>
      ) : (
        <ul className="list-disc md:mr-4 pl-4 sm:pl-6">
          {state.items.map(item => (
            <li key={item.id} className="flex flex-col sm:flex-row items-center justify-between mr-4 mb-2 bg-white p-4 rounded shadow-md">
              <div className="flex items-center">
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="text-gray-500 ml-2 sm:ml-4">Quantity: {item.quantity}</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <QuantityButtons itemId={item.id} initialQuantity={item.quantity} />
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ml-2"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </animated.div>
  );
};

export default ShoppingList;
