// components/CourseCard.jsx
export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {course.instructor}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-yellow-500 font-semibold">
            ⭐ {course.rating}
          </span>

          <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>

    </div>
  );
}