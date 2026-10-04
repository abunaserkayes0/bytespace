"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface CourseVideoPlayerProps {
  coverImage?: string;
  title?: string;
}

export default function CourseVideoPlayer({
  coverImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
  title = "Course Video Preview",
}: CourseVideoPlayerProps) {
  return (
    <div className="relative w-full aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-xl border border-white/10 group">
      <Image
        src={coverImage}
        alt={title}
        fill
        className="object-cover object-top opacity-95 group-hover:scale-102 transition-transform duration-500"
        priority
      />

      {/* Dark Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      {/* Center Play Button */}
      <button
        type="button"
        aria-label="Play Course Preview Video"
        className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-md border border-white/60 flex items-center justify-center text-brand-black shadow-2xl transition-transform duration-300 group-hover:scale-110 cursor-pointer"
      >
        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-brand-black ml-1 text-brand-black" />
      </button>
    </div>
  );
}
