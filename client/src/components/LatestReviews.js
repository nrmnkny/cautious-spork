import React from 'react';
import ReviewCard from './ReviewCard';

const LatestReviews = ({ reviews }) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;