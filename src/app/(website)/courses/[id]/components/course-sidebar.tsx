"use client";

import Image from "next/image";
import Link from "next/link";
import { FolderGit2, Video, Award, MessagesSquare } from "lucide-react";

interface CourseSidebarProps {
  price?: number;
  lessonsCount?: number;
  totalHours?: number;
}

export default function CourseSidebar({
  price = 25,
  lessonsCount = 112,
  totalHours = 24,
}: CourseSidebarProps) {
  const previewLessons = [
    {
      num: "01",
      title: "Introduction to Digital Assets",
      duration: "12 mins",
    },
    {
      num: "02",
      title: "Design Principles for Impacts",
      duration: "21 mins",
    },
    {
      num: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ];

  const courseIncludes = [
    { icon: FolderGit2, text: "Learning Resources" },
    { icon: Video, text: "Quality Lesson Videos" },
    { icon: Award, text: "Certificate of Completion" },
    { icon: MessagesSquare, text: "Private Consultation" },
  ];

  return (
    <aside className="w-full lg:w-[380px] shrink-0 font-satoshi flex flex-col gap-6">
      {/* Main Sticky Card */}
      <div className="border border-gray-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col">
        {/* Lessons Header */}
        <h3 className="font-semibold text-base sm:text-lg text-brand-black mb-4">
          {lessonsCount} Lessons ({totalHours} hours)
        </h3>

        {/* Lesson Preview List */}
        <div className="flex flex-col gap-3 pb-4 border-b border-gray-100">
          {previewLessons.map((lesson) => (
            <div
              key={lesson.num}
              className="flex items-center justify-between text-xs sm:text-sm text-brand-dark hover:text-primary transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="text-gray-400 font-medium shrink-0">
                  {lesson.num}
                </span>
                <span className="truncate group-hover:underline">
                  {lesson.title}
                </span>
              </div>
              <span className="text-primary text-xs shrink-0 font-medium">
                {lesson.duration}
              </span>
            </div>
          ))}
          <button
            type="button"
            className="text-xs text-brand-muted hover:text-primary hover:underline text-left mt-1 cursor-pointer"
          >
            99 more videos
          </button>
        </div>

        {/* Ready to Dive In */}
        <p className="text-xs text-brand-muted mt-5 mb-3 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        {/* Price & Enroll */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-primary font-bold text-3xl font-satoshi">
            ${price}
          </span>
          <span className="text-brand-muted text-xs">/lifetime</span>
        </div>

        <button
          type="button"
          className="w-full bg-accent hover:bg-accent/90 text-brand-black font-semibold py-3.5 px-6 rounded-full text-sm sm:text-base text-center transition-transform hover:scale-[1.02] cursor-pointer shadow-xs mb-8"
        >
          Enroll Now
        </button>

        {/* This Course Includes */}
        <div className="pb-6 border-b border-gray-100">
          <h4 className="font-semibold text-sm text-brand-black mb-3.5">
            This course include
          </h4>
          <div className="flex flex-col gap-3">
            {courseIncludes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-brand-dark"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creator Info Mini Card */}
        <div className="pt-6 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0 border border-gray-100 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                alt="PurePearl Studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-brand-black">
                PurePearl Studio
              </h5>
              <p className="text-xs text-brand-muted">Professional Creator</p>
            </div>
          </div>

          <p className="text-xs text-brand-muted my-3 leading-relaxed">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <Link
            href="/creators/purepearl-studio"
            className="border border-gray-200 hover:border-gray-300 text-brand-dark rounded-full px-5 py-2 text-xs font-semibold text-center w-fit hover:bg-gray-50 transition-colors"
          >
            See Full Profile
          </Link>
        </div>
      </div>
    </aside>
  );
}
