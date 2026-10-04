"use client";

import {
  SlidersHorizontal,
  Signal,
  LayoutGrid,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";
import { COURSE_CATEGORIES } from "../data/courses-data";

interface CourseFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedSort?: string;
  onSelectSort?: (sort: string) => void;
}

export default function CourseFilters({
  selectedCategory,
  onSelectCategory,
}: CourseFiltersProps) {
  return (
    <div className="w-full flex flex-col gap-6 font-satoshi">
      {/* Top Filter & Sort Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-dark text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
            <span>Filter</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-dark text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-xs"
          >
            <Signal className="w-3.5 h-3.5 text-gray-500" />
            <span>Level</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-dark text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-xs"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-gray-500" />
            <span>Category</span>
          </button>
        </div>

        {/* Right Sort Control */}
        <div>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-dark text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-xs"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
            <span>Most Relevant</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
          </button>
        </div>
      </div>

      {/* Category Chips Bar */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {COURSE_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-accent text-brand-black font-semibold shadow-xs"
                  : "bg-[#F4F4F6] text-brand-dark hover:bg-gray-200 font-normal"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
