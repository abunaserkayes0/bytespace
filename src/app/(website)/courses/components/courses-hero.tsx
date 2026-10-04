"use client";

import { Search, ChevronDown } from "lucide-react";
import Navbar from "../../components/navbar";

interface CoursesHeroProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export default function CoursesHero({
  searchQuery = "",
  onSearchChange,
}: CoursesHeroProps) {
  return (
    <header className="bg-primary bg-grid relative text-white font-poppins pb-16 sm:pb-20">
      {/* Top Shared Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 text-center">
        <h1 className="text-3xl sm:text-[36px] md:text-5xl font-semibold tracking-tight mb-8">
          Find Your Next Course
        </h1>

        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-xl border border-white/20">
          <div className="flex items-center flex-1 pl-3 sm:pl-4">
            <Search className="w-5 h-5 text-gray-400 shrink-0 mr-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent text-brand-dark text-sm sm:text-base outline-none placeholder:text-gray-400 font-satoshi"
            />
          </div>

          {/* Courses Dropdown Button */}
          <button
            type="button"
            className="flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-brand-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-transform hover:scale-102 cursor-pointer font-satoshi shrink-0"
          >
            <span>Courses</span>
            <ChevronDown className="w-4 h-4 text-brand-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
