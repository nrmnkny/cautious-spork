import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/rhythmic.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-darker' : 'bg-dark'} bg-opacity-80 shadow-lg`}>
      <div className="container mx-auto flex justify-around items-center px-4 py-2 font-general">
        <Link to="/" className="text-xl font-header leading-none tracking-tighter">
          <img src={logo} alt="Rhythmic Logo" className="w-10 h-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-8 text-sm items-center">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-red-500 transition-colors duration-300">
                Rhythmic
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition-colors duration-300">
                About Us
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="hover:text-red-500 transition-colors duration-300">
                    <FaUser className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="hover:text-red-500 transition-colors duration-300">
                    <FaSignOutAlt className="text-2xl" />
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-red-500 transition-colors duration-300">
                  <FaUser className="text-2xl" />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
