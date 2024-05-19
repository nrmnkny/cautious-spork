import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darker text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()}
          <a href="https://twitter.com/cellfien" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">
            Rhythmic
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://twitter.com/rhythmicviews" className="text-gray-400 hover:text-red transition-colors duration-300">
            <FaTwitter className="w-5 h-5" />
          </a>
          {/* <a href="https://instagram.com/yourInstagram" className="ml-3 text-gray-400 hover:text-red transition-colors duration-300">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourLinkedIn" className="ml-3 text-gray-400 hover:text-red transition-colors duration-300">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/yourFacebook" className="ml-3 text-gray-400 hover:text-red transition-colors duration-300">
            <FaFacebookF className="w-5 h-5" />
          </a> */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
