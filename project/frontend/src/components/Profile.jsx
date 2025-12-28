import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'


const Profile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', {
          withCredentials: true // Important to send cookies
        })
        setUser(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Profile fetch error:", err)
        setError("Failed to load profile. Please login.")
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true })
    } catch (error) {
      console.error("Logout error", error)
    }
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
     return (
        <div className="text-center py-10">
           <h2 className="text-xl text-red-500 mb-4">{error}</h2>
           <button onClick={() => navigate('/login')} className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
             Go to Login
           </button>
        </div>
     )
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-32"></div>
        <div className="px-8 pb-8">
            <div className="relative -top-16 text-center">
                <div className="inline-block p-1 bg-white rounded-full">
                   <FaUserCircle className="text-9xl text-gray-300 bg-white rounded-full" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">{user.name}</h1>
                <p className="text-gray-500 font-medium">{user.email}</p>
            </div>

            <div className="border-t border-gray-100 pt-6">
                <h3 className="text-gray-400 uppercase tracking-wider text-sm font-semibold mb-4">Account Details</h3>
                <div className="flex items-center gap-4 text-gray-700 mb-3">
                    <FaEnvelope className="text-cyan-500 text-xl" />
                    <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                     <FaUserCircle className="text-cyan-500 text-xl" />
                     <span className="font-medium">User I.D: {user.id}</span>
                </div>
            </div >

            <div className="mt-8 flex justify-start">
                <button 
                  onClick={() => navigate('/edit-profile')}
                  className="flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors"
                >
                  <FaUserCircle /> Edit Profile
                </button>
            </div>

            <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-50 text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-red-100 transition-colors"
                >
                  <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
