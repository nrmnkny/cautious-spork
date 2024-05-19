import React from 'react';

const MediaSection = ({ coverImage, audioSample }) => {
    return (
        <div className="media-section my-4">
            {coverImage && <img src={coverImage} alt="Cover" className="w-full h-auto rounded-lg shadow-md mb-4" />}
            {audioSample && (
                <div className="audio-sample mt-4">
                    <audio controls className="w-full">
                        <source src={audioSample} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default MediaSection;
