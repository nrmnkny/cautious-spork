// src/components/Footer.js
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" px-5 py-8 bg-black text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

        <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()}
          <a href="https://twitter.com/eloview" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">
            @eloview
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://twitter.com/yourTwitter" className="text-gray-400">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/yourInstagram" className="ml-3 text-gray-400">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourLinkedIn" className="ml-3 text-gray-400">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/yourFacebook" className="ml-3 text-gray-400">
            <FaFacebookF className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
