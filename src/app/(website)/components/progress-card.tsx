import React from "react";

export interface ProgressCardProps {
  title?: string;
  percentage?: number;
  className?: string;
}

export default function ProgressCard({
  title = "Learning Progress",
  percentage = 55,
  className,
}: ProgressCardProps) {
  return (
    <div
      className={`bg-white font-satoshi rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col min-w-[180px] ${
        className || ""
      }`}
    >
      <h4 className="text-xs sm:text-sm text-left font-medium font-satoshi text-brand-dark">
        {title}
      </h4>
      <h2 className="font-poppins text-left text-3xl sm:text-[40px] lg:text-[48px] font-semibold text-brand-dark my-1 sm:my-2 leading-none">
        {percentage}%
      </h2>
      <div className="w-full min-w-[140px] h-2 bg-gray-100 rounded-full overflow-hidden mt-1">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
