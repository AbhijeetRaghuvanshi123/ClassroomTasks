import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseQuantity, decreaseQuantity, clearCart } from '../redux/reducers/cartSlice'
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShoppingBag } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'  

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // 10% tax example
  const total = subtotal + tax
  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate('/Checkout');
  } 

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 px-4 text-gray-500">
        <FaShoppingBag className="text-6xl text-gray-200 mb-4 mx-auto" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="inline-block px-8 py-3 bg-gray-800 text-white rounded font-semibold hover:bg-gray-700 transition-colors">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4">
      <h1 className="text-3xl mb-8 text-gray-800">Shopping Cart ({cartItems.length} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
        {/* Cart Items List */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
              
              <div className="flex-1">
                <h3 className="text-lg text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-500 font-semibold">${item.price}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded">
                  <button 
                    onClick={() => dispatch(decreaseQuantity(item))}
                    className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-800 hover:scale-110 active:scale-95 transition-transform"
                  >
                    <FaMinus size={10} />
                  </button>
                  <span className="min-w-[20px] text-center font-bold text-gray-800">{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(increaseQuantity(item))}
                    className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-800 hover:scale-110 active:scale-95 transition-transform"
                  >
                    <FaPlus size={10} />
                  </button>
                </div>
                
                <div className="font-bold text-lg text-gray-800 min-w-[80px] text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button 
                  onClick={() => dispatch(decreaseQuantity({ ...item, quantity: item.quantity }))} 
                  className="bg-transparent border-0 text-red-500 cursor-pointer text-base p-2 flex items-center hover:text-red-700 transition-colors"
                  title="Decrease/Remove"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => dispatch(clearCart())} 
            className="self-start mt-4 px-4 py-2 border border-red-500 text-red-500 bg-transparent rounded cursor-pointer font-semibold hover:bg-red-50 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-5">
          <h2 className="text-2xl mb-6 text-gray-800">Order Summary</h2>
          <div className="flex justify-between mb-4 text-gray-500">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-gray-500">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="h-px bg-gray-100 my-4"></div>
          <div className="flex justify-between mb-6 text-xl font-bold text-gray-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <button onClick={handleCheckout} className="w-full p-4 bg-gray-800 text-white border-0 rounded cursor-pointer text-lg font-semibold mb-4 hover:bg-gray-700 transition-colors">
            Proceed to Checkout
          </button>
          
          <Link to="/" className="flex items-center justify-center gap-2 text-gray-500 font-medium hover:text-gray-800 no-underline">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
