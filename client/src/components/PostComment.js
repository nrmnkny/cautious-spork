import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const PostComment = ({ reviewId }) => {
    const { isAuthenticated } = useAuth();
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isAuthenticated) {
            setError('You must be logged in to post a comment.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/api/reviews/${reviewId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ content })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to post comment');
            }

            setContent('');
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <label>
                Comment:
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Post Comment</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default PostComment;
