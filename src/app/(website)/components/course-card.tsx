import Image from "next/image";
import { Signal, Star } from "lucide-react";

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
    <div className="border border-gray-200 w-full max-w-md rounded-3xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col font-satoshi">
      {/* Image Container */}
      <div className="relative w-full aspect-4/2.5 rounded-2xl overflow-hidden mb-4 sm:mb-5">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Badges on Image */}
        <div className="absolute bottom-2.5 left-2.5 flex flex-wrap gap-1.5 sm:gap-2 pr-2 -z-10">
          <span className="bg-[#F6F6F699] backdrop-blur-sm text-brand-black text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
            {lessons} Lessons
          </span>
          <span className="bg-[#F6F6F699] backdrop-blur-sm text-brand-black text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
            {duration}
          </span>
          <span className="bg-[#F6F6F699] backdrop-blur-sm text-brand-black text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
            {comments} Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-1 gap-2">
          <h4 className="text-lg sm:text-xl leading-tight font-semibold text-brand-black font-poppins line-clamp-1">
            {title}
          </h4>
          <div className="flex items-center gap-1 text-brand-muted shrink-0 mt-0.5 text-xs sm:text-sm font-medium">
            <span>{rating}</span>
            <Star className="w-3.5 h-3.5 fill-[#C3C6CC] text-[#C3C6CC]" />
          </div>
        </div>

        {/* Author */}
        <div className="text-xs sm:text-sm text-brand-muted">
          by <span className="text-primary font-medium">{author}</span>
        </div>

        {/* Level and Avatars */}
        <div className="flex flex-wrap items-center justify-between gap-2 my-3 sm:my-4">
          <div className="flex items-center gap-1.5 bg-brand-light px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-brand-black">
            <Signal className="w-3 h-3 text-brand-black" />
            {level}
          </div>

          {/* Avatars */}
          <div className="flex -space-x-2">
            <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
              <Image
                src="https://i.pravatar.cc/100?img=11"
                alt="student"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
              <Image
                src="https://i.pravatar.cc/100?img=12"
                alt="student"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
              <Image
                src="https://i.pravatar.cc/100?img=13"
                alt="student"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white bg-accent text-black flex items-center justify-center text-[10px] sm:text-xs font-bold">
              {studentsText}
            </div>
          </div>
        </div>

        {/* Footer / Price */}
        <div className="mt-auto pt-2 border-t border-gray-100 flex items-baseline gap-1 font-satoshi">
          <span className="text-primary font-bold text-lg sm:text-xl">
            ${price}
          </span>
          <span className="text-[#4F4F4F] text-xs font-normal">/lifetime</span>
        </div>
      </div>
    </div>
  );
}
