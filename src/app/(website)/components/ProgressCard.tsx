import React from "react";

export interface ProgressCardProps {
  title?: string;
  percentage?: number;
  className?: string;
}

export default function ProgressCard({
  title = "Learning Process",
  percentage = 55,
  className,
}: ProgressCardProps) {
  return (
    <div
      className={`bg-white font-satoshi rounded-xl p-4 shadow-lg flex flex-col ${className || ""}`}
    >
      <h4 className="text-sm text-left font-medium font-satoshi text-brand-dark">
        {title}
      </h4>
      <h2 className="font-poppins text-left text-[48px] font-semibold text-brand-dark">
        {percentage}%
      </h2>
      <div className="w-50 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
