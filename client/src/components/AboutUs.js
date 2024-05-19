import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { FaPlayCircle, FaBookOpen, FaMusic } from 'react-icons/fa';

const tales = [
  {
    id: 1,
    title: "The Birth of Jazz",
    description: "Explore how jazz emerged as a defining genre of the 20th century.",
    image: "/path_to_jazz_image.jpg",
    link: "/classic-tales/jazz"
  },
  {
    id: 2,
    title: "The Beatles' Revolution",
    description: "Discover the stories behind The Beatles and their influence on rock and roll.",
    image: "/path_to_beatles_image.jpg",
    link: "/classic-tales/beatles"
  },
  {
    id: 3,
    title: "The Evolution of Hip-Hop",
    description: "Trace the roots and explosive growth of hip-hop music and culture.",
    image: "/path_to_hiphop_image.jpg",
    link: "/classic-tales/hiphop"
  }
];

const artists = [
  {
    id: 1,
    name: "Host",
    description: "Brief description of the artist or band.",
    link: "/featured-artists/artist-name"
  },
  {
    id: 2,
    name: "J7",
    description: "Brief description of the artist or band.",
    link: "/featured-artists/artist-name"
  },
  {
    id: 3,
    name: "Waka",
    description: "Brief description of the artist or band.",
    link: "/featured-artists/artist-name"
  }
];

const AboutUs = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="pt-10 bg-dark text-white min-h-screen">
      <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 font-header">The Rhythmic Study</h2>
            <p className="text-gray-400">Explore our in-depth analysis tools and resources that help you learn through music.</p>
            <button onClick={() => setPlay(!play)} className="mt-4 flex items-center justify-center text-red-500">
              <FaPlayCircle className="text-4xl hover:text-red-600 cursor-pointer" />
            </button>
            {play && (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LrC9IGf1Qm0"
                playing={play}
                controls={true}
                width="100%"
                height="100%"
                className="hidden"
              />
            )}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 font-header">The Rhythmic Classic</h2>
            {tales.map(tale => (
              <Link key={tale.id} to={tale.link} className="block p-4 hover:bg-gray-700 rounded-lg">
                <FaBookOpen className="inline mr-2 text-red-500" />
                <span className="text-gray-300">{tale.title}</span>
              </Link>
            ))}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 font-header">The Rhythmic Artist</h2>
            {artists.map(artist => (
              <Link key={artist.id} to={artist.link} className="block p-4 hover:bg-gray-700 rounded-lg">
                <FaMusic className="inline mr-2 text-red-500" />
                <span className="text-gray-300">{artist.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
