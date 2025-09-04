import React from 'react';
import { BarChart3, MessageCircle, Settings, Users, CheckSquare, Home } from 'lucide-react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'task', label: 'Task', icon: CheckSquare },
    { id: 'mentors', label: 'Mentors', icon: Users },
    { id: 'messages', label: 'Message', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DNX</span>
          </div>
          <span className="font-bold text-xl text-gray-900">DNX</span>
        </div>
      </div>

      <nav className="flex-1 pt-8 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center px-4 py-3 mb-2 text-left transition-all duration-200 rounded-lg ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Help Center */}
      <div className="p-4">
        <div className="bg-gray-900 rounded-xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">?</span>
            </div>
            <h3 className="font-semibold mb-2 text-lg">Help Center</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Having trouble in Learning? Please contact us for more questions.
            </p>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Go To Help Center
            </button>
          </div>
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;