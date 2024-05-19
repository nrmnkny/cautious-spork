import React from 'react';
import ReactPlayer from 'react-player';

const StudySection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-2">Study Mode</h2>
        <p className="mb-4">Enhance your study sessions with our curated playlist.</p>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LrC9IGf1Qm0"
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          light={true}  // Optional: enable to use the video's thumbnail as the play button
        />
      </div>
    </div>
  );
};

export default StudySection;
