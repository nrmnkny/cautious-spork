import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/vapourwave.jpg';

const Hero = () => {
  return (
    <div className="relative bg-vaporwaveDark text-white min-h-screen flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-header leading-tight mb-4">
          Dive into the Rhythm
        </h1>
        <p className="text-lg mb-8 font-body">
          Unravel the stories and emotions behind every beat. Join the community.
        </p>
        <Link to="/reviews" className="bg-vaporwavePurple text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-vaporwavePink transition-colors duration-300">
          Explore 
        </Link>
      </div>
    </div>
  );
};

export default Hero;
