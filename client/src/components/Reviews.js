import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://rhythmicsrvr.vercel.app/api/reviews')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setReviews(data))
            .catch(error => setError(error.message));
    }, []);

    return (
        <div className="pt-10 bg-gray-900 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-center mb-12 font-header">Rhythmic Views</h1>
                {error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : (
                    reviews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reviews.map(review => (
                                <Link to={`/review/${review.review_id}`} key={review.review_id}>
                                    <div className="bg-white text-black p-6 rounded-lg shadow-lg h-full">
                                        {review.image_url && (
                                            <img
                                                src={review.image_url}
                                                alt={review.title}
                                                className="w-full h-48 mb-4 object-cover rounded-md"
                                            />
                                        )}
                                        <h2 className="text-2xl font-semibold mb-2">{review.title}</h2>
                                        <p className="text-gray-700 mb-4 truncate">{review.content}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No reviews available.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Reviews;
