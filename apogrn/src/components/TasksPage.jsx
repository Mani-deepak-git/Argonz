import React from 'react';
import TaskCard from './TaskCard';
import TaskDetail from './TaskDetail';
import AssignedTask from './AssignedTask';

const TasksPage = ({ taskData, onUpload }) => {
  const isMobile = window.innerWidth < 1024;

  if (isMobile) {
    return (
      <div className="p-4 space-y-4">
        <TaskCard data={taskData} />
        <TaskDetail data={taskData} />
        <AssignedTask data={taskData} onUpload={onUpload} />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 overflow-auto p-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <TaskDetail data={taskData} />
        </div>
        <div className="col-span-4 space-y-6">
          <TaskCard data={taskData} />
          <AssignedTask data={taskData} onUpload={onUpload} />
        </div>
      </div>
    </div>
  );
};

export default TasksPage;