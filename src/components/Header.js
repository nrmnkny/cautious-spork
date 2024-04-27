import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-6">
      <h1 className="text-3xl font-bold">eloview</h1>
      <nav>
        <ul className="flex space-x-4 text-lg">
          <li><a href="/" className="hover:text-red-600">Home</a></li>
          <li><a href="/reviews" className="hover:text-red-600">Reviews</a></li>
          <li><a href="/about" className="hover:text-red-600">About</a></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
