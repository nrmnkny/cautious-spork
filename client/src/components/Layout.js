import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-vaporwavePurple text-vaporwaveNeonPink py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold font-header">
                        <Link to="/">Rhythmic Reviews</Link>
                    </h1>
                    <nav>
                        <Link to="/" className="px-3 py-2 rounded hover:bg-vaporwaveBlue">Home</Link>
                        <Link to="/reviews" className="px-3 py-2 rounded hover:bg-vaporwaveBlue">Reviews</Link>
                        <Link to="/about" className="px-3 py-2 rounded hover:bg-vaporwaveBlue">About</Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto flex-1 p-4 bg-vaporwaveDark text-vaporwaveLight">
                {children}
            </main>
            <footer className="bg-vaporwavePurple text-vaporwaveNeonPink py-4 mt-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Rhythmic Reviews. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
