"use client";

import Link from "next/link";
import { Signal, Star, Users, Share2 } from "lucide-react";
import Navbar from "../../../components/navbar";

interface CourseDetailsHeroProps {
  title?: string;
  subtitle?: string;
  author?: string;
  level?: string;
  rating?: number;
  reviewsCount?: number;
  studentsCount?: number;
}

export default function CourseDetailsHero({
  title = "Build Digital Asset: A Comprehensive Guide",
  subtitle = "Unlock the Power of Digital Creation with Expert Guidance",
  author = "purepearl studio",
  level = "Intermediate",
  rating = 4.8,
  reviewsCount = 172,
  studentsCount = 199,
}: CourseDetailsHeroProps) {
  return (
    <header className="bg-primary bg-grid relative text-white font-poppins pb-24 sm:pb-28">
      {/* Top Shared Navbar */}
      <Navbar />

      {/* Hero Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[120%] tracking-tight mb-2 sm:mb-3">
              {title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base font-normal mb-3 sm:mb-4">
              {subtitle}
            </p>
            <p className="text-xs sm:text-sm text-white/90 mb-5 sm:mb-6">
              by{" "}
              <Link
                href="/creators/purepearl-studio"
                className="text-white underline hover:text-accent transition-colors font-medium"
              >
                {author}
              </Link>
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium font-satoshi">
              {/* Level Badge */}
              <div className="flex items-center gap-1.5 bg-white text-brand-dark px-3.5 py-1.5 rounded-full shadow-xs">
                <Signal className="w-3.5 h-3.5 text-brand-dark" />
                <span>{level}</span>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center gap-1.5 bg-white text-brand-dark px-3.5 py-1.5 rounded-full shadow-xs">
                <Star className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" />
                <span>
                  {rating} ({reviewsCount} reviews)
                </span>
              </div>

              {/* Students Badge */}
              <div className="flex items-center gap-1.5 bg-white text-brand-dark px-3.5 py-1.5 rounded-full shadow-xs">
                <Users className="w-3.5 h-3.5 text-brand-dark" />
                <span>{studentsCount} Students</span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="shrink-0 self-start">
            <button
              type="button"
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-brand-black px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-transform hover:scale-105 cursor-pointer font-satoshi shadow-md"
            >
              <Share2 className="w-4 h-4 text-brand-black" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
