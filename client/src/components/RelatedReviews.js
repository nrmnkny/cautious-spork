import React from 'react';

const RelatedReviews = ({ relatedReviews }) => {
    return (
        <div className="related-reviews my-4 p-4 bg-gray-900 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-illuminatingLime mb-2">Related Reviews</h2>
            <ul className="list-disc list-inside text-gray-400">
                {relatedReviews.map((review, index) => (
                    <li key={index}>
                        <a href={`/review/${review.id}`} className="hover:text-mantis transition-colors duration-300">
                            {review.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedReviews;
