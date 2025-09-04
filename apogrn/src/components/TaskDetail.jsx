const TaskDetail = ({ data }) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <figure className="w-full">
        <video controls src={data.videoUrl} className="w-full h-64 object-cover" />
        <figcaption className="sr-only">Task video: {data.taskTitle}</figcaption>
      </figure>

      <div className="p-6 space-y-6">
        <header className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">{data.taskTitle}</h2>
          <p className="text-sm text-gray-500">{data.category}</p>
          <p className="text-sm text-gray-600">
            {data.studentsInvolved} Students Involved • {data.duration}
          </p>
        </header>

        <section aria-labelledby="desc-heading" className="space-y-2">
          <h3 id="desc-heading" className="text-lg font-semibold text-gray-900">Description</h3>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </section>

        <section aria-labelledby="assessment-heading" className="space-y-3">
          <h3 id="assessment-heading" className="text-lg font-semibold text-gray-900">Essence of Assessment</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {data.assessmentPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default TaskDetail;