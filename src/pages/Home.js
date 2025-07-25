import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import sampleImage from '../assets/home-3.jpg'; 

function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sampleImage})`,
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        {/* Animated Gradient Overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        
        {/* Content Container */}
        <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Hiring Decision
                </span>{' '}
                App
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              Leverage the power of AI to make smarter hiring decisions. 
              Predict candidate success with advanced machine learning algorithms.
            </p>
            
            {/* Feature Pills
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                🤖 AI-Powered
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                ⚡ Fast Results
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                📊 Data-Driven
              </span>
            </div> */}
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/predict">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-purple-500">
                  <span className="relative z-10">Start Prediction</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </Link>
              
              <Link to="/about">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </>
  );
}

export default Home;