import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

const MobileHeader = ({ title, userName }) => {
  return (
    <div className="lg:hidden bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">DNX</span>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">{title}</h1>
            {userName && (
              <p className="text-xs text-gray-600">Hi, {userName}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-purple-600">DN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;