
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedReview = ({ review }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-4xl font-bold mb-6">{review.title}</h3>
          <p className="text-gray-700 mb-8">{review.excerpt}</p>
          <Link to={`/reviews/${review.id}`} className="inline-block bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
            Read full review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReview;
