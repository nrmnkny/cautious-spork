import React from 'react';

const Rating = ({ rating }) => {
    return (
        <div className="rating my-4 p-4 bg-gray-900 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-illuminatingLime mb-2">Rating</h2>
            <p className="text-md text-gray-400">Overall: {rating.overall}</p>
            <p className="text-md text-gray-400">Lyrics: {rating.lyrics}</p>
            <p className="text-md text-gray-400">Music: {rating.music}</p>
            <p className="text-md text-gray-400">Production: {rating.production}</p>
        </div>
    );
};

export default Rating;
