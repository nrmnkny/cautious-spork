// src/components/RhythmicVine.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../services/api';

const RhythmicVine = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news items:', error.message);
      }
    };

    getNews();
  }, []);

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-red-600">Rhythmic News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 bg-gray-800">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <Link to={`/news/${item.id}`} className="text-red-600 hover:underline">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RhythmicVine;
