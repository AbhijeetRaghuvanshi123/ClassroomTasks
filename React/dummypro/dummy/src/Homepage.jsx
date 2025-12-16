import React from "react";
import Custom from "./Custom";

const Homepage = () => {
  const { data, isLoading, error } = Custom("https://dummyjson.com/products");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg text-gray-700">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white text-red-600 text-lg">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data &&
            data.products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-shadow hover:shadow-md"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex-grow flex flex-col">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-xl font-medium text-gray-900">
                      ${product.price}
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-sm tracking-wide hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
