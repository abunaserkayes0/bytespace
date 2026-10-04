"use client";

import { useState } from "react";
import CourseDetailsHero from "./course-details-hero";
import CourseVideoPlayer from "./course-video-player";
import CourseSidebar from "./course-sidebar";
import AboutTab from "./course-tabs/about-tab";
import LessonTab from "./course-tabs/lesson-tab";
import ReviewsTab from "./course-tabs/reviews-tab";
import Footer from "../../../components/footer";

type TabType = "About" | "Lesson" | "Reviews";

interface CourseDetailsViewProps {
  courseId?: string;
}

export default function CourseDetailsView({
  courseId,
}: CourseDetailsViewProps = {}) {
  const [activeTab, setActiveTab] = useState<TabType>("Lesson");

  const tabs: TabType[] = ["About", "Lesson", "Reviews"];

  return (
    <div
      className="min-h-screen bg-white flex flex-col font-satoshi"
      data-course-id={courseId}
    >
      {/* 1. Hero Header */}
      <CourseDetailsHero />

      {/* 2. Main Content Grid (Overlaps slightly with hero or cleanly connects) */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 relative z-30 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Left Column: Video + Tabs & Tab Content */}
          <div className="flex-1 w-full min-w-0">
            {/* Video Player */}
            <CourseVideoPlayer />

            {/* Tabs Selector Bar */}
            <div className="flex items-center gap-2 mt-8 sm:mt-10 pb-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-accent text-brand-black font-semibold shadow-xs"
                        : "bg-[#F4F4F6] text-brand-dark hover:bg-gray-200 font-medium"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Tab Body */}
            <div>
              {activeTab === "About" && <AboutTab />}
              {activeTab === "Lesson" && <LessonTab />}
              {activeTab === "Reviews" && <ReviewsTab />}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <CourseSidebar />
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
