// src/App.js
import React from 'react';
import Footer from './components/Footer';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedReview from './components/FeaturedReview';
import ReviewList from './components/ReviewList';


const mockReview = {
  id: 1,
  title: "The New Wave of Indie Music",
  excerpt: "An exploration into the melodies and lyrics that are shaping the future of music."
};

const mockReviews = [
  {
    id: 1,
    title: "Synthwave Revival: A Nostalgia Trip",
    summary: "A deep dive into the resurgence of synthwave and its cultural impact."
  },
  {
    id: 2,
    title: "The Rise of Lo-Fi Beats",
    summary: "Exploring the background and appeal of lo-fi beats to study/relax to."
  },
  {
    id: 3,
    title: "The era of AmaPIANO",
    summary: "Exploring the background and appeal of lo-fi beats to study/relax to."
  },
];


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedReview review={mockReview} />
      <ReviewList reviews={mockReviews} />
      <Footer />
    </div>
  );
}

export default App;
