
import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
  return (
    <div className="border-2 border-transparent rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white hover:border-red-500">
      <h4 className="text-2xl font-bold mb-3">{review.title}</h4>
      <p className="text-gray-600 mb-4">{review.summary}</p>
      <a href={`/reviews/${review.id}`} className="text-black-600 hover:text-red-800">
        Read more
      </a>
    </div>
  );
};

export default ReviewCard;
