import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Banner */}
        <div className="relative h-64 w-full">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Teamwork"
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
            <p className="text-lg text-gray-200 mt-2">Empowering Data-Driven Hiring</p>
          </div>
        </div>

        {/* About Section */}
        <motion.div
          className="max-w-4xl mx-auto px-6 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed mb-6">
            With the advent of the 21st century, rapid technological development and widespread access to knowledge across all disciplines have significantly enhanced the capabilities of the workforce. However, the size of the industry has not expanded proportionally to accommodate this influx of skilled labor.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            To address this, <span className="text-blue-400 font-semibold">Company ABC</span> has implemented a thorough screening process to recruit the most suitable candidates. Our objective is to support ABC by developing a data-driven approach to identify and select the best talent for their workforce.
          </p>
        </motion.div>

        {/* Image and Mission */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto px-6 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QcBFKvVnDnxU_jeavF29t5NRsabFm4oSYg&s"
            alt="Analytics"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              To combine the power of machine learning and intuitive interfaces to provide a fair,
              fast, and efficient way of evaluating potential candidates for ABC, ensuring only the
              most suited individuals are recruited.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About;
