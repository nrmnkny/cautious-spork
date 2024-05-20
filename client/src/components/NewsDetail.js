import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsById } from '../services/api';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const getNewsItem = async () => {
      try {
        const data = await fetchNewsById(id);
        setNewsItem(data);
      } catch (error) {
        console.error('Error fetching news item:', error.message);
      }
    };

    getNewsItem();
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-8 text-center text-gray-800">{newsItem.title}</h1>
        <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto mb-6 rounded-lg" />
        <div className="text-lg mb-4 text-justify text-gray-700" style={{ columnCount: 2, columnGap: '40px' }}>
          {newsItem.description}
        </div>
        <div className="text-center mt-8">
          <a href={newsItem.link} className="inline-block bg-red-600 text-black font-bold py-3 px-6 rounded-full text-lg border-2 border-red-500 hover:bg-red-100 hover:border-red-600 transition-colors duration-300">
            Read the full article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
