import React from 'react';
import AudioPlayer from '../components/AudioPlayer';

const ReviewDetail = ({ match }) => {
  // some mock data for demonstration purposes.
  const reviewData = {
    title: "Album Review: Dreamscape Melodies",
    content: "A detailed review of the album...",
    tracks: [
      {
        name: 'Dreamscape',
        artist: 'The Dreamers',
        albumCover: 'path/to/album/cover.jpg',
        previewUrl: 'path/to/preview.mp3'
      },
      // ...more tracks
    ]
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">{reviewData.title}</h1>
      <p className="text-gray-700 mb-6">{reviewData.content}</p>
      {/* List tracks with audio player for each */}
      {reviewData.tracks.map((track, index) => (
        <AudioPlayer key={index} track={track} />
      ))}
    </div>
  );
};

export default ReviewDetail;
