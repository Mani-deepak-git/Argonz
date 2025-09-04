import React from 'react';
import { Menu, Bell, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const MobileDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Header */}
      <div className="bg-white border-b border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <button className="p-2 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Greeting */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">Hi, Dennis</h1>
          <h2 className="text-xl font-bold text-gray-900">Nzioki</h2>
          <p className="text-gray-600 text-sm mt-1">Let's finish your task today!</p>
        </div>

        {/* Running Task Card */}
        <div className="bg-gray-900 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Running Task</h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold mb-2">65</div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold">45%</span>
                <span className="text-gray-300 text-lg">100</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">Task</div>
            </div>
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="45, 100"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
            <span className="text-xs bg-gray-900 text-white px-3 py-1 rounded-full">This Week</span>
          </div>
          <div className="relative">
            <div className="absolute top-4 left-4 bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium">
              2 Task
            </div>
            <div className="h-24 flex items-end">
              <svg viewBox="0 0 280 60" className="w-full h-full">
                <polyline
                  points="20,45 60,35 100,25 140,30 180,15 220,20 260,10"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="2"
                />
                <circle cx="20" cy="45" r="2" fill="#1f2937" />
                <circle cx="60" cy="35" r="2" fill="#1f2937" />
                <circle cx="100" cy="25" r="2" fill="#1f2937" />
                <circle cx="140" cy="30" r="2" fill="#1f2937" />
                <circle cx="180" cy="15" r="2" fill="#1f2937" />
                <circle cx="220" cy="20" r="2" fill="#1f2937" />
                <circle cx="260" cy="10" r="2" fill="#1f2937" />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
          </div>
        </div>

        {/* Monthly Mentors */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Mentors</h3>
            <div className="flex space-x-2">
              <button className="p-1">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Curious George"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Curious George</h4>
              <p className="text-sm text-gray-500">UI UX Designer</p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <span className="text-xs">📋</span>
                  <span className="text-xs text-gray-600">40 Task</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-xs">⭐</span>
                  <span className="text-xs text-gray-900 font-medium">4.7 (750 Reviews)</span>
                </div>
              </div>
            </div>
            <button className="text-blue-600 text-sm font-medium">
              + Follow
            </button>
          </div>
        </div>

        {/* Upcoming Task */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Task</h3>
            <div className="flex space-x-2">
              <button className="p-1">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Creating Mobile App Design"
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Creating Mobile App Design</h4>
              <p className="text-sm text-gray-500 mb-3">UI UX Design</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <span>⏰</span>
                    <span>3 Days Left</span>
                  </div>
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-blue-400 rounded-full border border-white"></div>
                    <div className="w-5 h-5 bg-green-400 rounded-full border border-white"></div>
                    <div className="w-5 h-5 bg-orange-400 rounded-full border border-white"></div>
                    <div className="w-5 h-5 bg-purple-400 rounded-full border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">July 2022</h3>
            <div className="flex space-x-2">
              <button className="p-1">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-4">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className="text-xs font-medium text-gray-500 p-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6;
              const isToday = day === 14;
              return (
                <div
                  key={i}
                  className={`text-sm p-2 ${
                    day <= 0 || day > 31
                      ? 'text-gray-300'
                      : isToday
                      ? 'bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto'
                      : 'text-gray-700 w-8 h-8 flex items-center justify-center mx-auto'
                  }`}
                >
                  {day > 0 && day <= 31 ? day : ''}
                </div>
              );
            })}
          </div>

          {/* Task Today */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-900">Task Today</h4>
              <button className="p-1">
                <MoreHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Creating Awesome Mobile Apps"
                  className="w-full h-24 object-cover rounded-xl"
                />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 text-sm mb-1">Creating Awesome Mobile Apps</h5>
                <p className="text-xs text-gray-500 mb-2">UI/UX Designer</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900 font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>⏰</span>
                      <span>1 Hour</span>
                    </div>
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 bg-blue-400 rounded-full border border-white"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full border border-white"></div>
                      <div className="w-4 h-4 bg-orange-400 rounded-full border border-white"></div>
                      <div className="w-4 h-4 bg-purple-400 rounded-full border border-white"></div>
                    </div>
                  </div>
                </div>

                {/* Detail Task */}
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center mb-2">
                    <h6 className="text-xs font-semibold text-gray-900">Detail Task</h6>
                    <span className="text-xs text-gray-500">UI/UX Designer</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                      <span className="text-xs text-gray-700">Understanding the tools in Figma</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        2
                      </div>
                      <span className="text-xs text-gray-700">Understand the basics designs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">
                        3
                      </div>
                      <span className="text-xs text-gray-500">Design a mobile application with figma</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium">
                    Go To Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;