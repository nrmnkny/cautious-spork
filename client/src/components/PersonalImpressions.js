import React from 'react';

const PersonalImpressions = ({ impressions }) => {
    return (
        <div className="personal-impressions my-4 p-4 bg-gray-900 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-illuminatingLime mb-2">Personal Impressions</h2>
            <p className="text-md text-gray-400">{impressions}</p>
        </div>
    );
};

export default PersonalImpressions;
