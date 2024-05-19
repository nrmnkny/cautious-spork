import React, { useState } from 'react';
import API_URL from '../config';

const RoleManagement = () => {
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/api/user/profile/role`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ userId, role })
        })
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => setError(error.message));
    };

    return (
        <div>
            <h1>Role Management</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <label>
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="artist">Artist</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <button type="submit">Update Role</button>
            </form>
        </div>
    );
};

export default RoleManagement;
