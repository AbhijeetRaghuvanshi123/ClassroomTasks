import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Abhijeet from "./components/Abhijeet";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div
      className="min-h-screen bg-green-200 font-sans"
      style={{ fontFamily: "'Comic Sans MS', cursive" }}
    >
      <Navbar />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="abhijeet" element={<Abhijeet />} />
          </Route>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
