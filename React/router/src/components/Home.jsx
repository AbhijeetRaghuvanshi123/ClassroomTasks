import React, { useState, useMemo } from "react";
import useFetch from "./Custom";
import { useCart } from "./context/CartContext.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 bg-red-200 text-red-900 p-4 rounded-lg border-4 border-dashed border-red-500">
        <p className="font-semibold">Error fetching products:</p>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-6xl font-black text-purple-600 mb-8 text-center animate-pulse">
        <marquee>!!! WELCOME 2 MYSTORE !!!</marquee>
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-yellow-200 border-4 border-blue-500 rounded-xl">
        <input
          type="text"
          placeholder="Search for stuff..."
          className="flex-grow p-3 border-4 border-pink-400 rounded-full text-xl focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-3 border-4 border-purple-400 rounded-full text-xl bg-white focus:outline-none"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default">Sort by...</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => {
            switch (sortType) {
              case "price-asc":
                return a.price - b.price;
              case "price-desc":
                return b.price - a.price;
              case "name-asc":
                return a.title.localeCompare(b.title);
              case "name-desc":
                return b.title.localeCompare(a.title);
              default:
                return 0;
            }
          })
          .map((product) => (
            <div
              key={product.id}
              className="bg-yellow-100 border-4 border-orange-400 rounded-lg overflow-hidden flex flex-col transition-transform hover:rotate-3 hover:scale-105"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover border-b-4 border-orange-400"
              />
              <div className="p-5 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-md mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4">
                  <p className="text-3xl font-black text-green-700">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-lg hover:bg-pink-700 transform hover:scale-110 transition-transform"
                  >
                    GIMME!
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
