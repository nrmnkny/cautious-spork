// src/components/AudioPlayer.js
import React from 'react';

const AudioPlayer = ({ track }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto my-8">
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full" src={track.albumCover} alt={track.album} />
        <div>
          <h5 className="text-xl font-bold">{track.name}</h5>
          <p className="text-gray-500">{track.artist}</p>
        </div>
      </div>
      <audio controls className="w-full mt-4" preload="none">
        <source src={track.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
