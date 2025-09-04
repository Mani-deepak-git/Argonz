import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Bell, MoreHorizontal } from 'lucide-react';

const Dashboard = ({ setCurrentPage, setSelectedDate }) => {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hi, Dennis Nzioki</h1>
            <p className="text-gray-600 text-sm mt-1">Let's finish your task today!</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-8 space-y-6">
            {/* Top Row - Running Task and Activity */}
            <div className="grid grid-cols-2 gap-6">
              {/* Running Task */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-6">Running Task</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold mb-2">65</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-semibold">45%</span>
                      <span className="text-gray-300">100</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Task</div>
                  </div>
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
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

              {/* Activity */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
                  <span className="text-xs bg-gray-900 text-white px-3 py-1 rounded-full">This Week</span>
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium">
                    2 Task
                  </div>
                  <div className="h-32 flex items-end">
                    <svg viewBox="0 0 280 80" className="w-full h-full">
                      <polyline
                        points="20,60 60,45 100,30 140,35 180,20 220,25 260,15"
                        fill="none"
                        stroke="#1f2937"
                        strokeWidth="2"
                      />
                      <circle cx="20" cy="60" r="3" fill="#1f2937" />
                      <circle cx="60" cy="45" r="3" fill="#1f2937" />
                      <circle cx="100" cy="30" r="3" fill="#1f2937" />
                      <circle cx="140" cy="35" r="3" fill="#1f2937" />
                      <circle cx="180" cy="20" r="3" fill="#1f2937" />
                      <circle cx="220" cy="25" r="3" fill="#1f2937" />
                      <circle cx="260" cy="15" r="3" fill="#1f2937" />
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
            </div>

            {/* Monthly Mentors */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Monthly Mentors</h3>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Curious George"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Curious George</h4>
                    <p className="text-sm text-gray-500">UI UX Designer</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-xs">📋</span>
                        </div>
                        <span className="text-sm text-gray-600">40 Task</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-900 font-medium">4.7 (750 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    + Follow
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Abraham Lincoln"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Abraham Lincoln</h4>
                    <p className="text-sm text-gray-500">3D Designer</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-xs">📋</span>
                        </div>
                        <span className="text-sm text-gray-600">32 Task</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-900 font-medium">4.9 (510 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm font-medium">
                    Followed
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Task */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Upcoming Task</h3>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
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
                          <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Creating Perfect Website"
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Creating Perfect Website</h4>
                    <p className="text-sm text-gray-500 mb-3">Web Developer</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900 font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <span>⏰</span>
                          <span>4 Days Left</span>
                        </div>
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-4 space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">July 2022</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
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
                      onClick={() => {
                        if (day > 0 && day <= 31) {
                          const now = new Date();
                          const date = new Date(now.getFullYear(), now.getMonth(), day);
                          setSelectedDate?.(date.toISOString().slice(0, 10));
                          setCurrentPage?.('task');
                        }
                      }}
                      className={`cursor-pointer text-sm p-2 ${
                        day <= 0 || day > 31
                          ? 'text-gray-300'
                          : isToday
                          ? 'bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto'
                          : 'text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto'
                      }`}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Task Today */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Task Today</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Creating Awesome Mobile Apps"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Creating Awesome Mobile Apps</h4>
                  <p className="text-sm text-gray-500 mb-3">UI/UX Designer</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <span>⏰</span>
                        <span>1 Hour</span>
                      </div>
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail Task */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-semibold text-gray-900">Detail Task</h5>
                    <span className="text-xs text-gray-500">UI/UX Designer</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                      <span className="text-sm text-gray-700">Understanding the tools in Figma</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        2
                      </div>
                      <span className="text-sm text-gray-700">Understand the basics designs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">
                        3
                      </div>
                      <span className="text-sm text-gray-500">Design a mobile application with figma</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
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

export default Dashboard;