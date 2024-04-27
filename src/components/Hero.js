// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-8xl font-extrabold mb-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
          HELVENICA NEUE
        </h2>
        <p className="text-xl font-light mb-6">Discover in-depth reviews and insights into the latest music releases.</p>
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition-colors">
          Explore Reviews
        </button>
      </div>
    </section>
  );
};

export default Hero;
