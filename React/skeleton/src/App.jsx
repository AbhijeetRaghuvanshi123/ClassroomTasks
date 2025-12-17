import React from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the new products URL
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        // Introduce a 2-second artificial delay
        setTimeout(() => {
          // The products are in a 'products' array in the response
          setData(json.products);
          setLoading(false);
        }, 4000); // 2000 milliseconds = 2 seconds
      });
  }, []);
  if (loading) {
    return (
      <div className="flex flex-wrap justify-center">
        {/* Create an array of 9 items and map over it to render 9 skeleton cards */}
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        // Add a unique key and use 'description' from the new data structure
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default App;
