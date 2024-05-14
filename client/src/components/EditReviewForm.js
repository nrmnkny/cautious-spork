import React, { useState } from 'react';
import { updateReview } from '../services/api';

const EditReviewForm = ({ review, onReviewUpdated }) => {
    const [formData, setFormData] = useState({
        title: review.title,
        content: review.content
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedReview = await updateReview(review.id, formData);
            onReviewUpdated(updatedReview); // Call the callback function with the updated review
        } catch (error) {
            console.error('Failed to update review:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                />
            </label>
            <label>
                Content:
                <textarea
                    value={formData.content}
                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                />
            </label>
            <button type="submit">Update Review</button>
        </form>
    );
};

export default EditReviewForm;
