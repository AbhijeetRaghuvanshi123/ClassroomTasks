import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Profile from './components/Profile'
import Auth from './components/Auth'
import Checkout from './components/Checkout'
import ForgotPassword from './components/ForgotPassword'
import EditProfile from './components/EditProfile'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} /> 
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />  
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App