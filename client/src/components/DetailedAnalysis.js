import React from 'react';

const DetailedAnalysis = ({ analysis, tracks }) => {
    return (
        <div className="detailed-analysis my-4 p-4 bg-gray-900 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-illuminatingLime mb-2">Detailed Analysis</h2>
            <p className="text-md text-gray-400 mb-4">{analysis}</p>
            <ul className="list-disc list-inside text-gray-400">
                {tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedAnalysis;
