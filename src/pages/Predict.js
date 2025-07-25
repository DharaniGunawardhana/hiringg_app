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
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1e3a8a 100%)',
        position: 'relative'
      }}>
        {/* Background overlay */}
        <div 
          className="fixed inset-0 pointer-events-none" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
            `,
            zIndex: -1
          }}
        />

        <div className="max-w-4xl mx-auto p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              🔮 Hiring Prediction System
            </h1>
            <p className="text-xl text-gray-300">
              Enter candidate details to predict hiring decision
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Candidate Information */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  🧍‍♂️
                </div>
                Candidate Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Age */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Age</label>
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter age"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px'
                    }}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </select>
                </div>

                {/* Education Level */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Education Level</label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px'
                    }}
                    required
                  >
                    <option value="">Select Education</option>
                    <option value="1">Bachelor's (Type 1)</option>
                    <option value="2">Bachelor's (Type 2)</option>
                    <option value="3">Master's</option>
                    <option value="4">PhD</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Years of Experience</label>
                  <input
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter years"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Previous Companies */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Number of Previous Companies</label>
                  <input
                    name="previousCompanies"
                    value={formData.previousCompanies}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter number"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Distance */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Distance from Company</label>
                  <input
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter distance (km)"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Assessment Scores */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30">
              <div className="border-t-4 border-gradient-to-r from-green-500 to-teal-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-green-500 to-teal-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  🧪
                </div>
                Assessment Scores
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Interview Score */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Interview Score</label>
                  <input
                    name="interviewScore"
                    value={formData.interviewScore}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter score (0-100)"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Skill Score */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Skill Assessment Score</label>
                  <input
                    name="skillScore"
                    value={formData.skillScore}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter score (0-100)"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Personality Score */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Personality Assessment Score</label>
                  <input
                    name="personalityScore"
                    value={formData.personalityScore}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter score (0-100)"
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Recruitment Details */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30">
              <div className="border-t-4 border-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-purple-500 to-pink-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  📝
                </div>
                Recruitment Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Recruitment Strategy */}
                <div className="max-w-md">
                  <label className="block text-gray-800 font-semibold mb-2">Recruitment Strategy</label>
                  <select
                    name="recruitmentStrategy"
                    value={formData.recruitmentStrategy}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px'
                    }}
                    required
                  >
                    <option value="">Select Strategy</option>
                    <option value="1">Aggressive</option>
                    <option value="2">Moderate</option>
                    <option value="3">Conservative</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Predicting...
                  </div>
                ) : (
                  '🔮 Predict Hiring Decision'
                )}
              </button>
            </div>
          </form>

          {/* Results Section */}
          {decision && !loading && (
            <div className="mt-8">
              <div
                className={`p-8 rounded-2xl shadow-2xl text-center transition-all duration-500 transform hover:scale-105 ${
                  decision === 'Selected'
                    ? 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200'
                    : 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200'
                }`}
              >
                <div className="text-6xl mb-4">
                  {decision === 'Selected' ? '✅' : '❌'}
                </div>
                <h2 className={`text-3xl font-bold mb-2 ${
                  decision === 'Selected' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {decision === 'Selected'
                    ? '🎉 Candidate Should Be Hired!'
                    : ' Candidate Should Not Be Hired'}
                </h2>
                <p className={`text-lg ${
                  decision === 'Selected' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {decision === 'Selected'
                    ? 'This candidate meets the criteria for successful hiring based on our predictive model.'
                    : 'This candidate does not meet the recommended criteria for hiring based on our analysis.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Predict;