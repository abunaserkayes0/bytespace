import Image from "next/image";
import { Signal, Star } from "lucide-react";

export default function CourseShowcaseCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-xl w-[320px] font-satoshi flex flex-col z-20 hover:scale-[1.02] transition-transform duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
        <Image
          src="/icons/image.png"
          alt="Dashboard"
          fill
          className="object-cover"
        />
        {/* Overlaid Badges */}
        <div className="absolute bottom-2 left-2 flex gap-1.5 z-10">
          <span className="bg-[#F6F6F6]/90 backdrop-blur-sm text-brand-black text-[10px] px-2 py-1.5 rounded-full font-semibold shadow-sm">
            17 Lessons
          </span>
          <span className="bg-[#F6F6F6]/90 backdrop-blur-sm text-brand-black text-[10px] px-2 py-1.5 rounded-full font-semibold shadow-sm">
            2 hours 16 mins
          </span>
          <span className="bg-[#F6F6F6]/90 backdrop-blur-sm text-brand-black text-[10px] px-2 py-1.5 rounded-full font-semibold shadow-sm">
            59 Comments
          </span>
        </div>
      </div>

      {/* Title & Rating */}
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-[17px] font-bold text-brand-black font-poppins">
          the Power of Big Data
        </h4>
        <div className="flex items-center gap-1 text-brand-muted text-xs font-semibold">
          <span>4.5</span>
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
        </div>
      </div>

      {/* Author */}
      <div className="text-xs text-brand-muted mb-4">
        by <span className="text-primary font-medium">purepearl studio</span>
      </div>

      {/* Badges & Avatars */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 border border-gray-100 bg-brand-light px-3 py-1.5 rounded-full text-[11px] font-semibold text-brand-black">
          <Signal className="w-3.5 h-3.5 text-brand-black" />
          Beginner
        </div>

        <div className="flex -space-x-2">
          {[11, 12, 13].map((img) => (
            <Image
              key={img}
              src={`https://i.pravatar.cc/100?img=${img}`}
              alt="student"
              width={28}
              height={28}
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
          ))}
          <div className="w-7 h-7 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[9px] font-bold">
            26+
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 mt-auto">
        <span className="text-primary font-bold text-[22px] leading-none">
          $25
        </span>
        <span className="text-gray-500 text-[11px] font-medium">/lifetime</span>
      </div>
    </div>
  );
}
