import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export interface HappyStudentsCardProps {
  className?: string;
}

export default function HappyStudentsCard({ className }: HappyStudentsCardProps) {
  return (
    <div
      className={`bg-white max-w-64.5 font-satoshi rounded-2xl p-5 shadow-xl flex flex-col ${className || ""
        }`}
    >
      <div className="flex flex-col">
        <h4 className="text-balance text-left font-satoshi font-medium text-brand-dark">
          Happy Students
        </h4>
        <div className="flex items-center gap-0.5">
          <span className="text-xs font-normal text-brand-dark">4.5</span>
          <span className="text-xs text-brand-muted">(240)</span>
          <Star
            className="w-4 h-4 text-accent-alt ml-0.5"
            fill="currentColor"
          />
        </div>
      </div>

      <div className="flex items-center -space-x-3">
        {[33, 22, 12, 32, 11].map((img, index) => (
          <Image
            key={img}
            src={`https://i.pravatar.cc/100?img=${img}`}
            alt="student"
            width={43}
            height={43}
            className="w-10.75 h-10.75 rounded-full border-[2.5px] border-white relative object-cover"
            style={{ zIndex: index }}
          />
        ))}
        <div className="w-10.75 h-10.75 rounded-full border-[2.5px] border-white bg-accent-alt flex items-center justify-center relative text-sm font-bold text-brand-dark z-50">
          2K+
        </div>
      </div>
    </div>
  );
}
