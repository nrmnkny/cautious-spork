import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/reviews/${review_id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setReview(data))
            .catch(error => setError(error.message));
    }, [review_id]);

    return (
        <div className="pt-10 bg-gray-900 text-white min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : (
                    review && (
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            {review.image_url && (
                                <img
                                    src={review.image_url}
                                    alt={review.title}
                                    className="w-full h-auto mb-4 object-cover rounded-md"
                                />
                            )}
                            <h1 className="text-4xl font-semibold mb-4">{review.title}</h1>
                            <p className="text-gray-700 mb-4">{review.content}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ReviewDetail;
