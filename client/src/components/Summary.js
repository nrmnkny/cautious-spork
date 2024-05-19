import React from 'react';

const Summary = ({ summary }) => {
    return (
        <div className="summary my-4 p-4 bg-gray-100 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
            <p className="text-md text-gray-700">{summary}</p>
        </div>
    );
};

export default Summary;
