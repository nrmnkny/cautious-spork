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
            console.error('Registration failed:', error.message);
            setError(error.message || 'Unexpected error occurred');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            placeholder="Choose a username"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            placeholder="Enter your email"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            placeholder="Enter your password"
                            required 
                        />
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 
                                       hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
