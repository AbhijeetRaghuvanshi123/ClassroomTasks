import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/reducers/cartSlice'

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)

    // Calculate totals matches Cart logic
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const tax = subtotal * 0.1
    const total = subtotal + tax

    const handlePayment = (e) => {
        e.preventDefault()
        setIsProcessing(true)

        // Dummy payment simulation
        setTimeout(() => {
            alert('Payment Successful! Order Placed for $' + total.toFixed(2))
            handleClearCart()
        }, 1500)
    }

    const handleClearCart = () => {
        dispatch(clearCart())
        navigate('/')
    }

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-16 px-4">
               <h2 className="text-2xl font-bold text-gray-800 mb-4">No items to checkout</h2>
               <p className="text-gray-600 mb-6">Please add items to your cart before proceeding.</p>
               <button onClick={() => navigate('/')} className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">Return to Home</button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Shipping & Payment Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4 text-gray-700">Shipping Details</h2>
                    <form onSubmit={handlePayment} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="123 Main St" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="New York" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="10001" />
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Payment (Dummy)</h2>
                            <div className="bg-blue-50 p-4 rounded text-sm text-blue-700 mb-4 border border-blue-100">
                                ℹ️ This is a simulation. No real payment will be processed.
                            </div>
                            <button 
                                type="submit" 
                                disabled={isProcessing}
                                className={`w-full py-3 px-4 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-all ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                            >
                                {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Simplified Order Summary */}
                <div className="h-fit">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-4">
                        <h2 className="text-xl font-bold mb-4 text-gray-700">Order Summary</h2>
                        <div className="flex flex-col gap-3 mb-4 max-h-[300px] overflow-auto custom-scrollbar">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2 last:border-0">
                                    <span className="text-gray-600 truncate mr-2 flex-1">{item.title} (x{item.quantity})</span>
                                    <span className="font-medium whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax (10%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-gray-900 mt-2 pt-2 border-t border-gray-200">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Checkout