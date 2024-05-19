import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_URL from '../config';
import Review from './Review';

const ReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`${API_URL}/api/reviews/${review_id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReview(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReview();
  }, [review_id]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!review) {
    return <div className="text-center">Loading...</div>;
  }

  return <Review review={review} />;
};

export default ReviewPage;
