import { useState, useEffect } from "react";
import Card from "../components/Card";

const ProductList = ({ name, viewMode, sortBy }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.products || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [name]);
  
  // Sort data based on sortBy prop
  const getSortedData = () => {
    const sortedData = [...data];
    if (sortBy === 'price-low') {
      return sortedData.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      return sortedData.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating-low') {
      return sortedData.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === 'rating-high') {
      return sortedData.sort((a, b) => b.rating - a.rating);
    }
    return sortedData;
  };

  // Get grid columns based on view mode
  const getGridColumns = () => {
    if (viewMode === 'large') return 'repeat(auto-fill, minmax(450px, 1fr))';
    if (viewMode === 'medium') return 'repeat(auto-fill, minmax(300px, 1fr))';
    if (viewMode === 'compact') return 'repeat(auto-fill, minmax(220px, 1fr))';
    return 'repeat(auto-fill, minmax(300px, 1fr))';
  };
  
  if (loading) return <p className="text-center text-xl text-gray-500 p-8">Loading products...</p>;
  if (error) return <p className="text-center text-xl text-gray-500 p-8">Error fetching data: {error.message}</p>;
  
  const sortedData = getSortedData();
  
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid gap-6 mb-8" style={{ gridTemplateColumns: getGridColumns() }}>
        {sortedData.slice(0, 12).map((item) => (
          <Card key={item.id} product={item} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;