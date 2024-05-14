import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'} bg-opacity-80 text-white shadow-lg`}>
      <div className="container mx-auto flex justify-around items-center px-4 py-2 font-general">
        <h1 className="text-xl font-header leading-none tracking-tighter animate-pulse" style={{ fontFamily: 'Pacifico, cursive' }}>
          Rhyth <FontAwesomeIcon icon={faMicrophone} size="lg" />
        </h1>
        <nav>
          <ul className="flex space-x-8 text-sm items-center" style={{ fontFamily: 'Roboto Mono, monospace' }}>
            <li>
              <Link to="/" className="hover:text-vaporwavePurple transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-vaporwavePurple transition-colors duration-300">
                Rhythmic
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-vaporwavePurple transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-vaporwavePurple transition-colors duration-300">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
