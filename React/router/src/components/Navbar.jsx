import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./context/CartContext.jsx"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const activeLinkStyle = {
    color: "#ec4899", // pink-500
    textDecoration: "underline",
    transform: "rotate(-5deg)",
  };

  const navLinkClasses =
    "block py-2 px-4 text-lg font-bold text-purple-700 hover:bg-yellow-200";
  const desktopNavLinkClasses =
    "text-blue-600 hover:text-pink-500 text-2xl font-extrabold transition-transform hover:scale-125";

  return (
    <nav className="bg-yellow-300 border-b-8 border-double border-pink-500 shadow-lg sticky top-0 z-10 p-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-4xl font-black text-orange-600"
              style={{ textShadow: "2px 2px #4ade80" }}
            >
              MyStore
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className={desktopNavLinkClasses}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className={desktopNavLinkClasses}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className={desktopNavLinkClasses}
              >
                Contact
              </NavLink>
              <NavLink
                to="/cart"
                className={`${desktopNavLinkClasses} relative`}
              >
                Cart
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-ping">
                  {cartItems.length}
                </span>
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-purple-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-yellow-100 border-4 border-dashed border-purple-500"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Cart ({cartItems.length})
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
