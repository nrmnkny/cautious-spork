import React from 'react';

const Comments = ({ comments }) => {
    return (
        <div className="comments my-4 p-4 bg-gray-900 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-illuminatingLime mb-2">Comments</h2>
            {comments.length === 0 ? (
                <p className="text-md text-gray-400">No comments yet.</p>
            ) : (
                comments.map((comment, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-md text-gray-400"><strong>{comment.user}:</strong> {comment.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Comments;
