"use client";

import { useState, useMemo } from "react";
import CoursesHero from "./courses-hero";
import CourseFilters from "./course-filters";
import CourseCard from "../../components/course-card";
import CoursePagination from "./course-pagination";
import Footer from "../../components/footer";
import { ALL_COURSES } from "../data/courses-data";

export default function CoursesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter courses based on search & category
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Featured" ||
        course.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Display all courses if a specific category has few entries so the grid stays full and rich
  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : ALL_COURSES;

  return (
    <div className="min-h-screen bg-white flex flex-col font-satoshi">
      {/* 1. Hero with Navigation & Search */}
      <CoursesHero
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          setCurrentPage(1);
        }}
      />

      {/* 2. Main Course Directory Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
        {/* Filters and Category Chips */}
        <CourseFilters
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            setCurrentPage(1);
          }}
        />

        {/* Course Cards Grid (3 columns on desktop, exactly like mockup) */}
        <section aria-label="Available Courses" className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {displayedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>

        {/* Pagination */}
        <CoursePagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
