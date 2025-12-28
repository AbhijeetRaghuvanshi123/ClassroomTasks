import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quick Shop</h1>
        <ul className="flex space-x-6 list-none m-0 p-0">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 flex items-center gap-2 no-underline">
              <FaHome /> Home
            </Link>
          </li>
          <li>
             <Link to="/cart" className="text-white hover:text-gray-300 flex items-center gap-2 no-underline relative">
              <div className="relative flex items-center">
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300 flex items-center gap-2 no-underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-300 flex items-center gap-2 no-underline">
              Sign Up
            </Link>
          </li> 
          <li>
            <Link to="/profile" className="text-white hover:text-gray-300 flex items-center gap-2 no-underline">
              <FaUser /> Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar
