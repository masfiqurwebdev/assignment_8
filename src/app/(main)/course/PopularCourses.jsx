// components/PopularPupularCourse.jsx
import CourseCard from "../../../components/CourseCard";


const getCourses = async () => {
  const res = await fetch("http://localhost:5004/all-courses", {
    cache: "force-cache",
  });
  return res.json();
};


export default async function PupularCourses () {

  const courses = await getCourses();

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          🔥 Popular PupularCourse
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.slice(0,3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}