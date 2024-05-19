import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../config';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/reviews`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-5 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 mt-12 font-header">Rhythmic Reviews</h1>
      {error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
              <Link to={`/review/${review.review_id}`} key={review.review_id}>
                <div className="bg-black p-6 rounded-lg shadow-lg">
                  {review.image_url && (
                    <img
                      src={review.image_url}
                      alt={review.title}
                      className="w-full h-48 mb-4 object-cover rounded-md"
                    />
                  )}
                  <h2 className="text-2xl font-semibold mb-2 font-header">{review.title}</h2>
                  <p className="text-gray-400 mb-4 truncate">{review.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No reviews available.</p>
        )
      )}
    </div>
  );
};

export default Reviews;
