import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditProfile = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/auth/profile', { withCredentials: true })
                const { name, email } = response.data
                setValue('name', name)
                setValue('email', email)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching profile", error)
                alert("Failed to load profile. Please login.")
                navigate('/login')
            }
        }
        fetchProfile()
    }, [setValue, navigate])

    const onSubmit = async (data) => {
        try {
            await axios.put('http://localhost:3000/api/auth/profile', data, { withCredentials: true })
            alert("Profile Updated Successfully!")
            navigate('/profile')
        } catch (error) {
            console.error("Error updating profile", error)
            alert("Failed to update profile")
        }
    }

    if (loading) return <div className="text-center py-10">Loading...</div>

    return (
        <div className="flex justify-center items-center min-h-[60vh] py-12 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Edit Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input 
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-cyan-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input 
                            type="email"
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-cyan-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button 
                            type="button" 
                            onClick={() => navigate('/profile')}
                            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="flex-1 bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition-colors font-semibold"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
