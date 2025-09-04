import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TasksPage from './components/TasksPage';
import taskData from './components/TaskData';
import TaskDetail from './components/TaskDetail';
import Mentors from './components/Mentors';
import Messages from './components/Messages';
import Settings from './components/Settings';
import MobileNavigation from './components/MobileNavigation';
import MobileDashboard from './components/MobileDashboard';
import MobileTaskList from './components/MobileTaskList';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleUpload = async (file, taskId) => {
    console.log('Upload requested', { name: file?.name, taskId });
    // TODO: wire to backend upload endpoint
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderPage = () => {
    if (isMobile) {
      switch (currentPage) {
        case 'overview':
          return <MobileDashboard />;
        case 'task':
          return <MobileTaskList />;
        case 'task-detail':
          return <TaskDetail setCurrentPage={setCurrentPage} />;
        case 'mentors':
          return <Mentors setCurrentPage={setCurrentPage} />;

          
        case 'messages':
          return <Messages />;
        case 'settings':
          return <Settings />;
        default:
          return <MobileDashboard />;
      }
    }

    switch (currentPage) {
      case 'overview':
        return <Dashboard setCurrentPage={setCurrentPage} setSelectedDate={setSelectedDate} />;
      case 'task':
        return <TasksPage taskData={taskData} onUpload={handleUpload} />;
      case 'task-detail':
        return <TaskDetail setCurrentPage={setCurrentPage} />;
      case 'mentors':
        return <Mentors setCurrentPage={setCurrentPage} />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="pb-16">
          {renderPage()}
        </main>
        <MobileNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-hidden">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;