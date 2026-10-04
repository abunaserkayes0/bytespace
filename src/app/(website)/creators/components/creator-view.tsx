"use client";

import {
  SlidersHorizontal,
  Signal,
  LayoutGrid,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";
import CreatorHero from "./creator-hero";
import CourseCard from "../../components/course-card";
import Footer from "../../components/footer";
import { BASE_COURSES } from "../../courses/data/courses-data";

interface CreatorViewProps {
  creatorId?: string;
}

export default function CreatorView({ creatorId }: CreatorViewProps = {}) {
  return (
    <div
      className="min-h-screen bg-white flex flex-col font-satoshi"
      data-creator-id={creatorId}
    >
      {/* 1. Creator Hero Profile */}
      <CreatorHero />

      {/* 2. Products Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Left Buttons */}
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

          {/* Right Sort Button */}
          <div>
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-dark text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-xs"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              <span>Most relevant</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <section aria-label="Creator Courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {BASE_COURSES.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
