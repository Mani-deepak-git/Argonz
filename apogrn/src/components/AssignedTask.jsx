import React, { useRef, useState } from 'react';

const AssignedTask = ({ data, onUpload }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async () => {
    if (!file) return;
    try {
      setUploading(true);
      await onUpload?.(file, data.id);
      setFile(null);
      if (inputRef.current) inputRef.current.value = '';
    } finally {
      setUploading(false);
    }
  };

  return (
    <aside className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      <div>
        <h4 className="text-sm font-semibold text-gray-900">Assigned Assignments</h4>
        <h2 className="text-lg font-bold text-gray-900">{data.taskTitle}</h2>
        <p className="text-sm text-gray-500">{data.category}</p>
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-900">Detail Student</h4>
        <p className="text-sm text-gray-700">Name: {data.assignedStudent.name}</p>
        <p className="text-sm text-gray-700">Class: {data.assignedStudent.class}</p>
        <p className="text-sm text-gray-700">Number: {data.assignedStudent.number}</p>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-900">File Task</h4>
        <p className="text-xs text-gray-500">Last Modified: {data.lastModified}</p>

        <label htmlFor="task-file" className="text-sm text-gray-700">Upload your work</label>
        <input
          ref={inputRef}
          id="task-file"
          type="file"
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={handleFileChange}
        />
        <button
          disabled={!file || uploading}
          onClick={handleSubmit}
          className={`w-full py-2 rounded-lg text-sm font-medium ${
            !file || uploading
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </div>
    </aside>
  );
};

export default AssignedTask;