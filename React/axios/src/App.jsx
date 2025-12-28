import React, { use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        //const data = await response.json();
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      return data;
    };
    fetchData();
  });
  return <div>App</div>;
};

export default App;
