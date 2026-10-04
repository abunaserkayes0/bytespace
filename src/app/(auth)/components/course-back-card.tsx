import Image from "next/image";
import { Signal } from "lucide-react";

export default function CourseBackCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg w-[280px] font-satoshi flex flex-col">
      {/* Thumbnail placeholder */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3">
        <Image
          src="/icons/image.png"
          alt="Course"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 left-1 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-brand-black text-[10px] px-2 py-1.5 rounded-full font-semibold shadow-sm">
            17 Lessons
          </span>
        </div>
      </div>

      {/* Title */}
      <h4 className="text-[15px] font-bold text-brand-black font-poppins mb-1 truncate">
        Build Digital Products
      </h4>

      {/* Author */}
      <div className="text-[11px] text-brand-muted mb-3">
        by <span className="text-primary font-medium">purepearl studio</span>
      </div>

      {/* Level & Avatars */}
      <div className="flex items-center justify mb-3">
        <div className="flex items-center gap-1.5 border border-gray-100 bg-brand-light px-2.5 py-1 rounded-full text-[10px] font-semibold text-brand-black">
          <Signal className="w-3 h-3 text-brand-black" />
          Beginner
        </div>

        <div className="flex -space-x-2">
          {[14, 15, 16].map((img) => (
            <Image
              key={img}
              src={`https://i.pravatar.cc/100?img=${img}`}
              alt="student"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
          ))}
          <div className="w-6 h-6 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[8px] font-bold">
            26+
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-primary font-bold text-lg leading-none">$25</span>
        <span className="text-gray-500 text-[10px] font-medium">/lifetime</span>
      </div>
    </div>
  );
}
