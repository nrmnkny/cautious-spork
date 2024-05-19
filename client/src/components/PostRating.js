import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import API_URL from '../config';

const PostRating = ({ reviewId }) => {
    const { isAuthenticated } = useAuth();
    const [rating, setRating] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isAuthenticated) {
            setError('You must be logged in to post a rating.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/reviews/${reviewId}/rating`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ rating })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to post rating');
            }

            setRating(0);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="rating-form">
            <label>
                Rating:
                <input
                    type="number"
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    min="1"
                    max="5"
                    required
                />
            </label>
            <button type="submit">Post Rating</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default PostRating;
