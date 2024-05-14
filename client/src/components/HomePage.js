import React, { useEffect, useState } from 'react';
import FeaturedReview from './FeaturedReview';
import ReviewCard from './ReviewCard';
import { fetchReviews } from '../services/api';

const HomePage = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchReviews().then(setReviews).catch(() => setError('Failed to fetch reviews'));
    }, []);

    return (
        <div>
            {error && <p className="error">{error}</p>}
            {reviews.length > 0 && (
                <FeaturedReview review={reviews[0]} />
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reviews.slice(1).map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
