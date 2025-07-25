import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from '../components/Navbar';

function Dashboard() {
  const genderChartRef = useRef(null);
  const factorsChartRef = useRef(null);
  const strategyPieChartRef = useRef(null);
  const skillsDistributionChartRef = useRef(null);
  const experienceChartRef = useRef(null);

  const chartsRef = useRef({});

  useEffect(() => {
    // Chart.js configuration
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.color = '#374151'; // Darker default color for better readability

    // Cleanup function to destroy existing charts
    const destroyCharts = () => {
      Object.values(chartsRef.current).forEach(chart => {
        if (chart) chart.destroy();
      });
      chartsRef.current = {};
    };

    // Gender Distribution Pie Chart
    if (genderChartRef.current) {
      chartsRef.current.gender = new Chart(genderChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Male', 'Female'],
          datasets: [{
            data: [51.5, 48.5],
            backgroundColor: ['#3b82f6', '#ec4899'],
            borderWidth: 0,
            hoverBackgroundColor: ['#2563eb', '#db2777']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true,
                color: '#374151',
                font: {
                  weight: '600'
                }
              }
            }
          },
          cutout: '60%'
        }
      });
    }

    // Key Factors Bar Chart
    if (factorsChartRef.current) {
      chartsRef.current.factors = new Chart(factorsChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Skills Assessment', 'Personality Score', 'Interview Score', 'Distance Impact'],
          datasets: [{
            label: 'Average Score',
            data: [65, 64.5, 64, -12],
            backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0,0,0,0.1)'
              },
              ticks: {
                color: '#374151',
                font: {
                  weight: '500'
                }
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#374151',
                font: {
                  weight: '500'
                }
              }
            }
          }
        }
      });
    }

    // Strategy Effectiveness Pie Chart
    if (strategyPieChartRef.current) {
      chartsRef.current.strategyPie = new Chart(strategyPieChartRef.current, {
        type: 'pie',
        data: {
          labels: ['Aggressive Strategy', 'Moderate Strategy', 'Conservative Strategy'],
          datasets: [{
            data: [45, 35, 20],
            backgroundColor: ['#3b82f6', '#74b9ff', '#a29bfe'],
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 15,
                usePointStyle: true,
                color: '#374151',
                font: {
                  weight: '600'
                }
              }
            }
          }
        }
      });
    }

    // Skills Distribution Histogram
    if (skillsDistributionChartRef.current) {
      chartsRef.current.skillsDistribution = new Chart(skillsDistributionChartRef.current, {
        type: 'bar',
        data: {
          labels: ['40-50', '50-60', '60-70', '70-80', '80-90', '90-100'],
          datasets: [{
            label: 'Number of Hires',
            data: [12, 45, 78, 65, 32, 18],
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Candidates',
                color: '#374151',
                font: {
                  weight: '600'
                }
              },
              ticks: {
                color: '#374151',
                font: {
                  weight: '500'
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Skills Score Range',
                color: '#374151',
                font: {
                  weight: '600'
                }
              },
              ticks: {
                color: '#374151',
                font: {
                  weight: '500'
                }
              }
            }
          }
        }
      });
    }

    // Experience vs Performance Scatter Plot
    if (experienceChartRef.current) {
      chartsRef.current.experience = new Chart(experienceChartRef.current, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Interview Score vs Experience',
            data: [
              {x: 1, y: 45}, {x: 2, y: 52}, {x: 3, y: 58}, {x: 4, y: 65}, 
              {x: 5, y: 68}, {x: 6, y: 70}, {x: 7, y: 69}, {x: 8, y: 66}, 
              {x: 9, y: 63}, {x: 10, y: 61}, {x: 11, y: 58}, {x: 12, y: 55},
              {x: 2.5, y: 55}, {x: 3.5, y: 62}, {x: 4.5, y: 67}, {x: 5.5, y: 71},
              {x: 6.5, y: 68}, {x: 7.5, y: 65}, {x: 8.5, y: 62}, {x: 9.5, y: 59}
            ],
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: '#3b82f6',
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Years of Experience',
                color: '#374151',
                font: {
                  weight: '600'
                }
              },
              min: 0,
              max: 13,
              ticks: {
                color: '#374151',
                font: {
                  weight: '500'
                }
              }
            },
            y: {
              title: {
                display: true,
                text: 'Interview Score',
                color: '#374151',
                font: {
                  weight: '600'
                }
              },
              min: 40,
              max: 75,
              ticks: {
                color: '#374151',
                font: {
                  weight: '500'
                }
              }
            }
          }
        }
      });
    }

    // Cleanup on component unmount
    return destroyCharts;
  }, []);

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

        <div className="max-w-7xl mx-auto p-5">
          {/* Header Section */}
          <div className="text-center text-white py-16 px-5 relative mb-10 rounded-3xl" style={{
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Hiring Insights Dashboard
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of our company's recruitment patterns, decision factors, and hiring strategies. 
              Discover the data-driven insights behind our talent acquisition process.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Gender Equality Card */}
            <div className="bg-white/98 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  ⚖️
                </div>
                Gender Equality in Hiring
              </h2>
              
              <div className="text-center">
                <p className="mb-5 text-lg text-white font-medium">
                  Our hiring process demonstrates balanced gender representation across all levels, reflecting our commitment to equality.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2" style={{ textShadow: '0 2px 4px rgba(59, 130, 246, 0.3)' }}>
                      51.5%
                    </div>
                    <div className="text-lg text-gray-700 font-semibold">Male Hires</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-2xl">
                    <div className="text-4xl font-bold text-pink-600 mb-2" style={{ textShadow: '0 2px 4px rgba(236, 72, 153, 0.3)' }}>
                      48.5%
                    </div>
                    <div className="text-lg text-gray-700 font-semibold">Female Hires</div>
                  </div>
                </div>
                
                <div className="h-48 relative mb-4">
                  <canvas ref={genderChartRef}></canvas>
                </div>
                
                <p className="italic text-white font-medium">
                  Our hiring process insights show that gender has minimal impact on final decisions, indicating fair evaluation procedures.
                </p>
              </div>
            </div>

            {/* Key Performance Factors Card */}
            <div className="lg:col-span-2 bg-white/98 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  📊
                </div>
                Key Performance Factors
              </h2>
              
              <p className="mb-5 text-white font-medium">Average scores of successful candidates across critical evaluation dimensions.</p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl text-center border-l-4 border-blue-500 shadow-md">
                  <h4 className="text-gray-900 mb-2 font-bold">Skills Assessment</h4>
                  <div className="text-2xl font-bold text-blue-600">65</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl text-center border-l-4 border-purple-500 shadow-md">
                  <h4 className="text-gray-900 mb-2 font-bold">Personality Score</h4>
                  <div className="text-2xl font-bold text-purple-600">64.5</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl text-center border-l-4 border-green-500 shadow-md">
                  <h4 className="text-gray-900 mb-2 font-bold">Interview Score</h4>
                  <div className="text-2xl font-bold text-green-600">64</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl text-center border-l-4 border-yellow-500 shadow-md">
                  <h4 className="text-gray-900 mb-2 font-bold">Graduate Degree</h4>
                  <div className="text-2xl font-bold text-yellow-600">82%</div>
                </div>
              </div>
              
              <div className="h-64 relative mb-4">
                <canvas ref={factorsChartRef}></canvas>
              </div>
              
              <p className="italic text-white font-medium">
                These factors consistently correlate with successful hiring outcomes in our evaluation process.
              </p>
            </div>

            {/* Strategy Effectiveness Card */}
            <div className="lg:col-span-2 bg-white/98 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  🎯
                </div>
                Recruitment Strategy Effectiveness
              </h2>
              
              <p className="mb-5 text-white font-medium">
                Analysis reveals that recruitment approach significantly influences hiring success rates. 
                <small className="text-gray-300 font-medium">(Pie chart shows proportion of total hires by strategy)</small>
              </p>
              
              <div className="h-64 relative mb-6">
                <canvas ref={strategyPieChartRef}></canvas>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-5 rounded-2xl text-center relative overflow-hidden shadow-lg">
                  <h4 className="mb-2 relative z-10 font-bold">Aggressive</h4>
                  <div className="text-2xl font-bold relative z-10">75%</div>
                  <small className="relative z-10 font-semibold">Success Rate</small>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-5 rounded-2xl text-center relative overflow-hidden shadow-lg">
                  <h4 className="mb-2 relative z-10 font-bold">Moderate</h4>
                  <div className="text-2xl font-bold relative z-10">58%</div>
                  <small className="relative z-10 font-semibold">Success Rate</small>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-5 rounded-2xl text-center relative overflow-hidden shadow-lg">
                  <h4 className="mb-2 relative z-10 font-bold">Conservative</h4>
                  <div className="text-2xl font-bold relative z-10">42%</div>
                  <small className="relative z-10 font-semibold">Success Rate</small>
                </div>
              </div>
            </div>

            {/* Skills Distribution Card */}
            <div className="bg-white/98 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  🎓
                </div>
                Skills Score Distribution
              </h2>
              
              <p className="mb-5 text-white font-medium">
                Distribution of skills assessment scores among hired candidates shows our quality standards.
              </p>
              
              <div className="h-72 relative mb-4">
                <canvas ref={skillsDistributionChartRef}></canvas>
              </div>
              
              <p className="italic text-white font-medium">
                Most successful candidates score between 60-70 on our comprehensive skills assessment.
              </p>
            </div>

            {/* Experience vs Performance Card */}
            <div className="bg-white/98 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  💼
                </div>
                Experience vs Performance
              </h2>
              
              <p className="mb-5 text-white font-medium">
                Correlation between years of experience and interview performance reveals interesting patterns.
              </p>
              
              <div className="h-72 relative mb-4">
                <canvas ref={experienceChartRef}></canvas>
              </div>
              
              <p className="italic text-white font-medium">
                Sweet spot appears to be 3-7 years of experience for optimal performance in our interview process.
              </p>
            </div>

            {/* Key Insights Card */}
            <div className="lg:col-span-2 bg-white/98 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
              
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  💡
                </div>
                Key Hiring Insights
              </h2>
              
              <p className="mb-5 text-white font-medium">Strategic insights from our comprehensive hiring process analysis.</p>
              
              <div className="space-y-3 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <strong className="text-green-800 font-bold">Strong Predictors of Hiring Success:</strong>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Recruitment strategy is the most influential factor - aggressive approaches yield 33% higher success rates</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Skills assessment scores consistently correlate with positive hiring outcomes</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Interview performance and personality alignment are key decision drivers</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Graduate degree holders represent 82% of our successful hires</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-gray-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <strong className="text-gray-900 font-bold">Minimal Impact Factors:</strong>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Gender shows negligible influence, confirming our unbiased evaluation process</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Distance from company has minor negative impact on selection probability</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Age demonstrates no significant correlation with hiring decisions</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:translate-x-1 transition-transform duration-200">
                  <span className="text-gray-800 font-semibold">✓ Previous company count contributes minimally to final evaluations</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center shadow-lg">
                <h4 className="text-green-800 mb-3 text-lg font-bold">Our Philosophy</h4>
                <div className="text-xl font-bold text-green-900 leading-relaxed italic">
                  "Great teams are built on merit, diversity, and shared vision. Our data-driven approach ensures we find the right talent while maintaining fairness at every step."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;