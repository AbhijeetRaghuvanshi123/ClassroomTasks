import React from "react";
import { useCart } from "./context/CartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-10 bg-yellow-200 border-4 border-dashed border-red-500 rotate-[-2deg]">
        <h1
          className="text-5xl font-black text-purple-700"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          Your Cart is Empty!
        </h1>
        <p className="mt-4 text-2xl text-green-600">Go buy something weird!</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-pink-500 text-white font-bold py-3 px-6 rounded-full animate-bounce hover:bg-pink-700"
        >
          Shop Now!
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 bg-blue-100 border-8 border-green-400">
      <h1
        className="text-6xl font-extrabold text-center text-orange-500 mb-8"
        style={{ fontFamily: "'Comic Sans MS', cursive" }}
      >
        YOUR LOOT
      </h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white border-4 border-pink-400 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-full border-4 border-yellow-400"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-bold text-purple-800">
                {item.title}
              </h2>
              <p className="text-gray-600">
                ${item.price} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white font-mono px-4 py-2 rounded-lg hover:bg-red-700"
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right p-6 bg-green-200 border-4 border-dashed border-blue-500">
        <h2 className="text-4xl font-bold text-pink-600">
          Total: ${total.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
