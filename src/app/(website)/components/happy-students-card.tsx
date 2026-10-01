import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export interface HappyStudentsCardProps {
  className?: string;
}

export default function HappyStudentsCard({
  className,
}: HappyStudentsCardProps) {
  return (
    <div
      className={`bg-white w-full max-w-[260px] font-satoshi rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col gap-3 ${
        className || ""
      }`}
    >
      <div className="flex flex-col">
        <h4 className="text-sm sm:text-base text-left font-satoshi font-medium text-brand-dark">
          Happy Students
        </h4>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-xs font-semibold text-brand-dark">4.5</span>
          <span className="text-xs text-brand-muted">(240)</span>
          <Star
            className="w-3.5 h-3.5 text-accent-alt ml-0.5"
            fill="currentColor"
          />
        </div>
      </div>

      <div className="flex items-center -space-x-2.5 sm:-space-x-3">
        {[33, 22, 12, 32, 11].map((img, index) => (
          <Image
            key={img}
            src={`https://i.pravatar.cc/100?img=${img}`}
            alt="student"
            width={40}
            height={40}
            className="w-9 h-9 sm:w-10.5 sm:h-10.5 rounded-full border-2 border-white relative object-cover"
            style={{ zIndex: index }}
          />
        ))}
        <div className="w-9 h-9 sm:w-10.5 sm:h-10.5 rounded-full border-2 border-white bg-accent-alt flex items-center justify-center relative text-xs sm:text-sm font-bold text-brand-dark z-20">
          2K+
        </div>
      </div>
    </div>
  );
}
