// components/PopularPupularCourse.jsx
import {PupularCourse}  from "../../../../data/PupularCourse";
import CourseCard from "../../../components/CourseCard";

export default function PupularCourses() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          🔥 Popular PupularCourse
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PupularCourse.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}