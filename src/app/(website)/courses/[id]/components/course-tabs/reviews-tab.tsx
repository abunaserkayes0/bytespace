"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ReviewsTab() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const ratingBars = [
    { stars: 5, percentage: 80, count: 720 },
    { stars: 4, percentage: 15, count: 130 },
    { stars: 3, percentage: 5, count: 21 },
    { stars: 2, percentage: 2, count: 10 },
    { stars: 1, percentage: 3, count: 15 },
  ];

  const filterOptions = ["All", "5", "4", "3", "2", "1"];

  const reviews = [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      comment:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=12",
      rating: 5,
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=33",
      rating: 5,
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=47",
      rating: 5,
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 font-satoshi text-brand-dark pt-6">
      {/* What Learners Are Saying */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-2">
          What Learners Are Saying
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Discover what our learners have to say about their experience with
          &quot;Build Digital Assets: A Comprehensive Guide.&quot; Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </section>

      {/* Ratings Breakdown Card */}
      <section className="border border-gray-200 rounded-3xl p-5 sm:p-7 bg-white shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        {/* Left Rating Box */}
        <div className="w-full sm:w-28 h-28 bg-accent rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-xs">
          <span className="text-xs font-semibold text-brand-black uppercase tracking-wider mb-0.5">
            Ratings
          </span>
          <span className="text-3xl sm:text-4xl font-bold text-brand-black font-poppins">
            4.7
          </span>
        </div>

        {/* Right Star Breakdown Bars */}
        <div className="flex-1 w-full flex flex-col gap-2">
          {ratingBars.map((bar) => (
            <div key={bar.stars} className="flex items-center gap-3 text-xs">
              {/* Progress bar */}
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${bar.percentage}%` }}
                />
              </div>

              {/* Stars Icons */}
              <div className="flex items-center gap-0.5 text-gray-400 shrink-0">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < bar.stars
                        ? "fill-gray-700 text-gray-700"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Review Count */}
              <span className="text-brand-muted font-medium w-8 text-right shrink-0">
                {bar.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Reviews Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4">
          Individual Reviews:
        </h3>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                  isActive
                    ? "bg-accent text-brand-black font-semibold shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-brand-dark"
                }`}
              >
                <span>{filter === "All" ? "All rating" : filter}</span>
                {filter !== "All" && (
                  <Star className="w-3 h-3 fill-current text-current" />
                )}
              </button>
            );
          })}
        </div>

        {/* Reviews List */}
        <div className="flex flex-col gap-4">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-xs flex flex-col gap-3"
            >
              {/* Header: User Info & Time */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 border border-gray-100 bg-gray-200">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-black">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-brand-muted">{rev.role}</p>
                  </div>
                </div>
                <span className="text-xs text-brand-muted">{rev.time}</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 text-gray-700">
                {Array.from({ length: rev.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gray-800 text-gray-800"
                  />
                ))}
              </div>

              {/* Comment Quote */}
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
