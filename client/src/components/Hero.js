// import React from 'react';
// import { Link } from 'react-router-dom';
// import backgroundImg from '../assets/dark-pattern.webp';

// const Hero = () => {
//   return (
//     <div className="relative bg-dark text-white min-h-screen flex items-center justify-center">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative container mx-auto px-6 py-32 flex flex-col items-center justify-center text-center">
//         <h1 className="text-6xl font-header leading-tight mb-4">
//           Dive into the Rhythm
//         </h1>
//         <p className="text-lg mb-8 font-body">
//           Unravel the stories and emotions behind every beat. Join the community.
//         </p>
//         <Link to="/reviews" className="bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg border-2 border-red-500 hover:bg-red-700 hover:border-red-600 transition-colors duration-300">
//           Explore 
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/music-bg.mp4';

const Hero = () => {
  return (
    <div className="relative bg-dark text-white min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-header leading-tight mb-4">
          Join the Rhythm
        </h1>
        <p className="text-lg mb-8 font-body">
          Share the Passion.
        </p>
        <Link
          to="/reviews"
          className="bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg border-2 border-red-500 hover:bg-red-700 hover:border-red-600 transition-colors duration-300"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Hero;
