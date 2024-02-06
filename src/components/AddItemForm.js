import React, { useState } from 'react';
import { useShoppingContext } from '../context/ShoppingContext';
import { useSpring, animated } from 'react-spring';

const AddItemForm = () => {
  const { addItem } = useShoppingContext();
  const [itemName, setItemName] = useState('');
  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() !== '') {
      addItem({ id: Date.now(), name: itemName, quantity: 1 });
      setItemName('');
    }
  };

  return (
    <animated.div style={slideIn} className="mb-4 text-center">
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ml-2"
        >
          Add Item
        </button>
      </form>
    </animated.div>
  );
};

export default AddItemForm;
