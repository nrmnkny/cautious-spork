import React from 'react';

const ReviewTitle = ({ title, artist, album, releaseDate, reviewer, reviewDate }) => {
    return (
        <div className="review-title mb-6">
            <h1 className="text-3xl font-bold text-illuminatingLime">{title}</h1>
            <p className="text-lg text-gray-500">by {artist}</p>
            <p className="text-md text-gray-600">{album} - Released on {releaseDate}</p>
            <p className="text-sm text-gray-700">Reviewed by {reviewer} on {reviewDate}</p>
        </div>
    );
};

export default ReviewTitle;
