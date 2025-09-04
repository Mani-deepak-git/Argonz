const TaskCard = ({ data }) => {
  const percent = Math.round(data.progress * 100);
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <img src={data.imageUrl} alt={data.taskTitle} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{data.taskTitle}</h3>
          <p className="text-sm text-gray-500">{data.category}</p>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <label htmlFor={`${data.id}-progress`} className="text-gray-600">Progress</label>
            <span className="font-medium text-gray-900">{percent}%</span>
          </div>
          <progress id={`${data.id}-progress`} value={percent} max="100" className="w-full h-2"></progress>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{data.duration}</span>
          <div className="flex -space-x-2" aria-label="Students">
            {data.studentAvatars?.map((avatarUrl, i) => (
              <img key={i} src={avatarUrl} alt={`Student ${i + 1}`} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;