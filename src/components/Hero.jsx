'use client'

// components/Hero.jsx
import Image from 'next/image';
import Link from 'next/link';



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Hero() {
  return (

    <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
    <SwiperSlide className=" bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Upgrade Your Skills Today 
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Learn from Industry Experts and boost your career
        </p>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          <Link href={'/course'}>Browse Courses</Link>
        </button>

      </div>
    </SwiperSlide>


    <SwiperSlide className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Learn from <span className="text-yellow-300">Industry Experts</span>
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            Upgrade your skills with real-world courses from top professionals.
            Start your journey today
          </p>

          <div className="flex gap-4">
            <Link href="/course">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                Explore Courses
              </button>
            </Link>

            <Link href="/signup">
              <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Learning"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </SwiperSlide>
    </Swiper>
  );
}