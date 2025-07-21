import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import sampleImage from '../assets/home1.png'; 

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center min-h-screen bg-gradient-to-b from-black to-gray-600 pl-16">
        
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Hiring Decision App</h1>
          <p className="text-gray-300 mb-8">Use our AI to predict if a candidate should be hired!</p>
          <Link to="/predict">
            <button className="px-6 py-3 bg-gray-800 text-white rounded shadow hover:bg-gray-700 transition duration-300">
              Go to Prediction
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-2/3 flex justify-end">
          <img
            src={sampleImage}
            alt="AI hiring illustration"
            className="w-full max-w-xl object-contain "
          />
        </div>
      </div>
    </>
  );
}

export default Home;
