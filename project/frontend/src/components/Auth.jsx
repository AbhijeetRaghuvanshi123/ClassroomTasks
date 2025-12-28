import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  // Initialize state based on URL
  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [location.pathname])

  const toggleAuth = () => {
    const newState = !isLogin
    setIsLogin(newState)
    // Update URL without full reload
    navigate(newState ? '/login' : '/signup', { replace: true })
  }

  // Login Logic
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLogin
  } = useForm()

  const onLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", data, { withCredentials: true })
      console.log(response.data)
      alert("User logged in successfully")
      navigate("/")
    } catch (error) {
      console.error(error)
      alert("User login failed")
    }
    resetLogin()
  } 

  // Register Logic
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: resetRegister
  } = useForm()

  const onRegister = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", data, { withCredentials: true })
      console.log(response.data)
      alert("User registered successfully")
      toggleAuth() // Slide to login view
    } catch (error) {
      console.error(error)
      alert("User registration failed")
    }
    resetRegister()
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl min-h-[600px]">
        
        {/* Sign Up Form - Fixed to Right Side */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-10">
             <form onSubmit={handleRegisterSubmit(onRegister)} className="bg-white flex flex-col items-center justify-center h-full px-10 text-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">Create Account</h1>
              <p className="text-gray-500 mb-6">Use your email for registration</p>
              
              <input
                type="text"
                {...registerRegister("name", { required: true })}
                placeholder="Name"
                className="w-full bg-gray-100 border-none p-3 mb-3 rounded outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {registerErrors.name && <span className="text-red-500 text-sm w-full text-left mb-2">*Name* is mandatory</span>}

              <input
                type="email"
                {...registerRegister("email", { required: true })}
                placeholder="Email"
                className="w-full bg-gray-100 border-none p-3 mb-3 rounded outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {registerErrors.email && <span className="text-red-500 text-sm w-full text-left mb-2">*Email* is mandatory</span>}

              <input
                type="password"
                {...registerRegister("password", { required: true })}
                placeholder="Password"
                className="w-full bg-gray-100 border-none p-3 mb-4 rounded outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {registerErrors.password && <span className="text-red-500 text-sm w-full text-left mb-2">*Password* is mandatory</span>}

              <button type="submit" className="bg-cyan-400 text-white font-bold py-3 px-10 rounded-full uppercase tracking-wider hover:bg-cyan-500 transition-colors mt-4 shadow-lg">
                Sign Up
              </button>
            </form>
        </div>

        {/* Login Form - Fixed to Left Side */}
        <div className="absolute top-0 left-0 w-1/2 h-full z-10">
            <form onSubmit={handleLoginSubmit(onLogin)} className="bg-white flex flex-col items-center justify-center h-full px-10 text-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h1>
              <p className="text-gray-500 mb-6">Use your email account</p>
              
              <input
                type="email"
                {...loginRegister("email", { required: true })}
                placeholder="Email"
                className="w-full bg-gray-100 border-none p-3 mb-3 rounded outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {loginErrors.email && <span className="text-red-500 text-sm w-full text-left mb-2">*Email* is mandatory</span>}

              <input
                type="password"
                {...loginRegister("password", { required: true })}
                placeholder="Password"
                className="w-full bg-gray-100 border-none p-3 mb-4 rounded outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {loginErrors.password && <span className="text-red-500 text-sm w-full text-left mb-2">*Password* is mandatory</span>}

              <a href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900 mb-6">Forgot your password?</a>

              <button type="submit" className="bg-cyan-400 text-white font-bold py-3 px-10 rounded-full uppercase tracking-wider hover:bg-cyan-500 transition-colors shadow-lg">
                Sign In
              </button>
            </form>
        </div>

        {/* Overlay Container */}
        <div 
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-50
          ${isLogin ? 'translate-x-0' : '-translate-x-[100%]'} `} 
          /* 
            Logic:
            - isLogin=true: Overlay at Right (left: 50%, translate: 0). Covers Signup (Right). Exposes Login (Left).
            - isLogin=false: Overlay at Left (left: 50%, translate: -100% -> Moves to 0%). Covers Login (Left). Exposes Signup (Right).
          */
        >
          <div 
            className={`bg-gradient-to-r from-cyan-400 to-blue-500 text-white relative -left-[100%] h-full w-[200%] transform transition-transform duration-700 ease-in-out flex items-center justify-center
            ${isLogin ? 'translate-x-0' : 'translate-x-[50%]'} `}
          >
            {/* Overlay Left (Visible when Signup Active - Overlay on Left) */}
            <div className="flex-1 h-full flex flex-col items-center justify-center px-10 text-center">
               <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
               <p className="mb-8">To keep connected with us please login with your personal info</p>
               <button 
                onClick={toggleAuth}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full uppercase tracking-wider hover:bg-white hover:text-cyan-500 transition-colors"
               >
                 Sign In
               </button>
            </div>

            {/* Overlay Right (Visible when Login Active - Overlay on Right) */}
            <div className="flex-1 h-full flex flex-col items-center justify-center px-10 text-center">
               <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
               <p className="mb-8">Enter your personal details and start journey with us</p>
               <button 
                 onClick={toggleAuth}
                 className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full uppercase tracking-wider hover:bg-white hover:text-cyan-500 transition-colors"
                >
                 Sign Up
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
