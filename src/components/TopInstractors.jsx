import Image from 'next/image'
import instractor_1 from '../../public/instructors/instructor_1.png'
const instructors = [
      {
      "id": 1,
      "image": instractor_1,
      "name": "Masfiqur Rahman",
      "skill": "Full Stack Enginear",
      "rating": 4.9,
    },
      {
      "id": 1,      
      "image": instractor_1,

      "name": "Jhankar Mahbub",
      "skill": "Software Eng. & Entreprenuer",
      "rating": 4.8,
    },
      {
      "id": 1,
      "image": instractor_1,

      "name": "Sophia Martinez",
      "skill": "Data Structures & Algorithms",
      "rating": 4.7,
    },
      {
      "id": 1,
      "image": instractor_1,

      "name": "Sophia Martinez",
      "skill": "Data Structures & Algorithms",
      "rating": 4.5,
    },
  ]

const TopInstractors = () => {
  return (
   <section className="py-10 px-5 bg-gray-50 container mx-auto ">
      <h2 className="text-2xl font-bold mb-6">🏆 Top Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((ins, i) => (
          <div key={i} className="p-5 bg-white rounded-xl shadow">
            <Image
            width={120}
            height={250}
              src={ins.image}
              alt={ins.name}
              className="w-28 rounded-sm mx-auto mb-4"
            />
            <h3 className="text-center font-semibold">{ins.name}</h3>
            <p className="text-center text-sm text-gray-500">
              {ins.skill}
            </p>
            <p className="text-center text-yellow-500">
              ⭐ {ins.rating}
            </p>
            <button className="mt-4 w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopInstractors
