import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            navigate('/login'); // Redirect to the login page after successful registration
        } catch (error) {
            console.error('Registration failed:', error.response?.data?.error || error.message);
            setError(error.response?.data?.error || 'Unexpected error occurred');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-pattern bg-cover bg-center">
            <div className="max-w-md w-full bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-300">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Choose a username"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Enter your email"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Enter your password"
                            required 
                        />
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 
                                       hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Register
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;
