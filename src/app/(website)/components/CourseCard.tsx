import Image from "next/image";
import React from "react";

export interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  studentsText: string;
}

export default function CourseCard({
  image,
  title,
  author,
  rating,
  lessons,
  duration,
  comments,
  level,
  price,
  studentsText,
}: CourseCardProps) {
  return (
    <div className="border border-gray-200 rounded-[28px] p-4 bg-white flex flex-col font-satoshi transition-shadow hover:shadow-lg">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/2.5] rounded-2xl overflow-hidden mb-5">
        <Image src={image} alt={title} fill className="object-cover" />
        
        {/* Badges on Image */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 pr-3">
          <span className="bg-white/80 backdrop-blur-sm text-brand-black text-xs px-3 py-1.5 rounded-full font-medium">
            {lessons} Lessons
          </span>
          <span className="bg-white/80 backdrop-blur-sm text-brand-black text-xs px-3 py-1.5 rounded-full font-medium">
            {duration}
          </span>
          <span className="bg-white/80 backdrop-blur-sm text-brand-black text-xs px-3 py-1.5 rounded-full font-medium">
            {comments} Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-1 gap-2">
          <h4 className="text-[22px] leading-tight font-semibold text-brand-black font-poppins line-clamp-1">{title}</h4>
          <div className="flex items-center gap-1 text-brand-muted shrink-0 mt-1 text-sm font-medium">
            <span>{rating}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#C3C6CC"/>
            </svg>
          </div>
        </div>

        {/* Author */}
        <div className="text-sm text-brand-muted mb-5">
          by <span className="text-primary">{author}</span>
        </div>

        {/* Level and Avatars */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1.5 bg-brand-light px-3 py-1.5 rounded-full text-sm font-medium text-brand-black">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="8" width="2" height="3" rx="1" fill="#040819"/>
              <rect x="5" y="5" width="2" height="6" rx="1" fill="#040819"/>
              <rect x="9" y="2" width="2" height="9" rx="1" fill="#D9D9D9"/>
            </svg>
            {level}
          </div>

          {/* Avatars */}
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
               <Image src="https://i.pravatar.cc/100?img=11" alt="student" fill className="object-cover" />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
               <Image src="https://i.pravatar.cc/100?img=12" alt="student" fill className="object-cover" />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
               <Image src="https://i.pravatar.cc/100?img=13" alt="student" fill className="object-cover" />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-accent text-black flex items-center justify-center text-[10px] font-bold z-10">
              {studentsText}
            </div>
          </div>
        </div>

        {/* Footer / Price */}
        <div className="mt-auto">
          <span className="text-primary font-bold text-2xl">${price}</span>
          <span className="text-brand-muted text-sm font-medium">/lifetime</span>
        </div>
      </div>
    </div>
  );
}
