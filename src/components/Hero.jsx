// components/Hero.jsx
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Learn from Industry Experts and boost your career
        </p>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          <Link href={'/course'}>Browse Courses</Link>
        </button>

      </div>
    </section>
  );
}