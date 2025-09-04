import React, { useState } from 'react';
import { Menu, Bell, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const MobileTaskList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const timeLimitTasks = [
    {
      id: '1',
      title: 'Creating Awesome Mobile Apps',
      category: 'UI UX Design',
      progress: 90,
      timeLeft: '1 Hour',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const newTasks = [
    {
      id: '2',
      title: 'Creating Mobile App Design',
      category: 'UI UX Design',
      progress: 75,
      timeLeft: '3 Days Left',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Header */}
      <div className="bg-white border-b border-gray-100 p-4">
        <div className="flex items-center justify-between mb-4">
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
        <h1 className="text-xl font-bold text-gray-900">Explore Task</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Time Limit Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Time Limit</h2>
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
            {timeLimitTasks.map((task) => (
              <div key={task.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={task.image}
                    alt={task.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{task.category}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <span>⏰</span>
                        <span>{task.timeLeft}</span>
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
            ))}
          </div>
        </div>

        {/* New Task Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">New Task</h2>
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
            {newTasks.map((task) => (
              <div key={task.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-blue-200">
                <div className="relative">
                  <img
                    src={task.image}
                    alt={task.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{task.category}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <span>⏰</span>
                        <span>{task.timeLeft}</span>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTaskList;