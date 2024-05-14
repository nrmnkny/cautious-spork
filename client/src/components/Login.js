import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';  
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await loginUser(credentials);
            if (response.token) {
                login(response.token);
                navigate('/'); 
                setError('');
            } else {
                throw new Error('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            setError(error.message || "Login failed. Please check your credentials and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            value={credentials.username}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div>
                        <button 
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 
                                       hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
