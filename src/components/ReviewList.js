import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Latest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
