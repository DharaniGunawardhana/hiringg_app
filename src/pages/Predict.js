import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Predict() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    education: '',
    experience: '',
    previousCompanies: '',
    distance: '',
    interviewScore: '',
    skillScore: '',
    personalityScore: '',
    recruitmentStrategy: '',
  });

  const [decision, setDecision] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(formData).map(([k, v]) => [k, parseFloat(v)])
          )
        )
      });
      const data = await response.json();
      setDecision(data.decision);
    } catch (error) {
      console.error('Error:', error);
      setDecision('Error fetching prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
        <h2 className="text-2xl font-bold text-white mb-4">Enter Candidate Features</h2>
        <form className="grid grid-cols-2 gap-4 mb-4 w-full max-w-2xl" onSubmit={handleSubmit}>
        {/* Age */}
        <div>
          <label className="block text-white mb-1">Age</label>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-white mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Select</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>

        {/* Education Level */}
        <div>
          <label className="block text-white mb-1">Education Level</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Select</option>
            <option value="1">Bachelor's (Type 1)</option>
            <option value="2">Bachelor's (Type 2)</option>
            <option value="3">Master's</option>
            <option value="4">PhD</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-white mb-1">Experience (Years)</label>
          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Previous Companies Worked */}
        <div>
          <label className="block text-white mb-1">Previous Companies Worked</label>
          <input
            name="previousCompanies"
            value={formData.previousCompanies}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Distance from Company */}
        <div>
          <label className="block text-white mb-1">Distance from Company</label>
          <input
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Interview Score */}
        <div>
          <label className="block text-white mb-1">Interview Score</label>
          <input
            name="interviewScore"
            value={formData.interviewScore}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Skill Score */}
        <div>
          <label className="block text-white mb-1">Skill Score</label>
          <input
            name="skillScore"
            value={formData.skillScore}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Personality Score */}
        <div>
          <label className="block text-white mb-1">Personality Score</label>
          <input
            name="personalityScore"
            value={formData.personalityScore}
            onChange={handleChange}
            type="number"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Recruitment Strategy */}
        <div>
          <label className="block text-white mb-1">Recruitment Strategy</label>
          <select
            name="recruitmentStrategy"
            value={formData.recruitmentStrategy}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Select</option>
            <option value="1">Aggressive</option>
            <option value="2">Moderate</option>
            <option value="3">Conservative</option>
          </select>
        </div>

        <button type="submit" className="col-span-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Predict
        </button>
      </form>


        {loading && (
          <div className="flex justify-center my-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {decision && !loading && (
          <div className="text-xl font-semibold text-green-400">
            Decision: {decision}
          </div>
        )}
      </div>
    </>
  );
}

export default Predict;
