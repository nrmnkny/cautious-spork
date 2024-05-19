import React, { useState, useEffect } from 'react';
import API_URL from '../config';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
    const [profile, setProfile] = useState({ username: '', email: '', role: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { token } = useAuth();

    useEffect(() => {
        fetch(`${API_URL}/api/user/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => setError(error.message));
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/api/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(profile)
        })
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => setError(error.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-pattern bg-cover bg-center">
            <div className="max-w-md w-full bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">User Profile</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {message && <p className="text-green-500 text-center">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-300">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={profile.username}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 
                                       hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
