"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import ProgressCard from "./progress-card";
import HappyStudentsCard from "./happy-students-card";
import Button from "./ui/button";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="bg-primary bg-grid overflow-hidden flex flex-col font-poppins relative w-full min-h-screen lg:h-screen lg:max-h-screen">
      {/* Navigation */}
      <Navbar className="mb-12.5" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-between text-center px-4 sm:px-6 text-white z-20 relative w-full pt-2 sm:pt-4 lg:pt-2 pb-0 min-h-0">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto shrink-0">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-[60px] xl:text-[68px] font-satoshi font-semibold leading-[115%] sm:leading-[118%] mb-3 sm:mb-4 tracking-[-1%]">
            Get Access to Hundreds <br className="hidden sm:block" /> Courses
            Available
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-5 sm:mb-8 leading-relaxed font-light px-2 max-w-2xl">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-[85vw] md:w-[70vw] lg:w-full lg:max-w-[581px] items-stretch sm:items-center mb-4 sm:mb-6 lg:mb-4 relative z-30 px-2 sm:px-0">
            <div className="flex bg-white rounded-full py-2.5 sm:py-[11.5px] px-4 flex-1 items-center shadow-lg">
              <Search className="text-gray-400 mr-2 sm:mr-3 shrink-0 size-5 sm:size-6" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="border-none outline-none flex-1 text-sm sm:text-base md:text-lg text-gray-800 placeholder-gray-400 w-full font-normal font-satoshi bg-transparent min-w-0"
              />
            </div>
            <Button className="w-full sm:w-auto shrink-0 justify-center">
              Search
            </Button>
          </div>
        </div>

        {/* Outer Leftmost Background Shape (No max-w, fluid width) */}
        <div className="hidden lg:block absolute left-0 top-[22%] z-10 pointer-events-none select-none w-[12vw]">
          <Image
            src="/icons/left-role.png"
            alt="Left Role"
            width={267}
            height={387}
            className="w-full h-auto opacity-80"
          />
        </div>

        {/* Outer Rightmost Background Shape (No max-w, fluid width) */}
        <div className="hidden lg:block absolute right-0 top-[18%] z-10 pointer-events-none select-none w-[12vw]">
          <Image
            src="/icons/cilinder.png"
            alt="Right Role"
            width={213}
            height={372}
            className="w-full h-auto opacity-80"
          />
        </div>

        {/* 
          Hero Graphics Showcase Section (100% Fluid - NO max-width)
          Scales proportionally on ANY screen size via viewport-width (vw) and relative percentages (%)
        */}
        <section className="relative w-full flex justify-center items-end mt-auto pb-0 overflow-visible shrink-0">
          {/* Proportional Composition Container */}
          <div className="relative w-[94vw] sm:w-[86vw] md:w-[78vw] lg:w-[68vw] xl:w-[60vw] 2xl:w-[54vw] max-w-[1149px] flex justify-center items-end">
            {/* Half Circle Graphic (Fills the fluid container) */}
            <div className="w-full flex justify-center">
              <Image
                src="/icons/half-circle.png"
                alt="Half Circle"
                width={1149}
                height={442}
                className="w-full h-auto object-contain select-none pointer-events-none"
                priority
              />
            </div>

            {/* Student Center Image (Occupies center 54% of fluid container, leaving 23% on each side) */}
            <div className="absolute left-1/2 bottom-0 z-20 -translate-x-1/2 w-[54%] flex justify-center">
              <Image
                src="/icons/Image.png"
                alt="Student"
                width={722}
                height={515}
                className="w-full h-auto object-contain pointer-events-none"
                priority
              />
            </div>

            {/* Upper Left White Coil (small-role) */}
            <div className="hidden sm:block absolute left-[-6%] bottom-[76%] z-15 w-[14%] pointer-events-none select-none">
              <Image
                src="/icons/small-role.png"
                alt="small role"
                width={160}
                height={160}
                className="w-full h-auto"
              />
            </div>

            {/* Upper Right White Pyramid (priramid) */}
            <div className="hidden sm:block absolute right-[-20%] top-[-12%] bottom-[68%] z-15 w-[15%] pointer-events-none select-none">
              <Image
                src="/icons/priramid.png"
                alt="pyramid"
                width={160}
                height={160}
                className="w-full h-auto"
              />
            </div>

            {/* Bottom Left Donut Ring (circle) */}
            <div className="hidden sm:block absolute -left-[15%] bottom-[-10%] z-10 w-[30%] pointer-events-none select-none">
              <Image
                src="/icons/circle.png"
                alt="circle"
                width={342}
                height={342}
                className="w-full h-auto"
              />
            </div>

            {/* Bottom Right Coil (role) */}
            <div className="hidden sm:block absolute -right-[15%] bottom-0 z-10 w-[30%] pointer-events-none select-none">
              <Image
                src="/icons/role.png"
                alt="role"
                width={330}
                height={330}
                className="w-full h-auto"
              />
            </div>

            {/* 
              Floating Card 1: UI/UX Design
              Positioned in the left zone (0% to 22%), guaranteed not to overlap student (starts at 23%)
            */}
            <div className="hidden md:flex absolute left-[1%] lg:left-[15%] bottom-[50%] lg:bottom-[54%] bg-white font-satoshi rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl flex-col z-30 scale-80 sm:scale-90 lg:scale-100 origin-bottom-left whitespace-nowrap transition-transform hover:scale-105">
              <h4 className="text-xs sm:text-sm lg:text-base text-left font-semibold text-brand-dark">
                UI/UX Design
              </h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-xs text-brand-muted">
                  200 Courses
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="text-[10px] sm:text-xs text-brand-muted">
                  1000+ Students
                </span>
              </div>
            </div>

            {/* 
              Floating Card 2: Learning Progress
              Positioned in the right zone (78% to 100%), guaranteed not to overlap student (ends at 77%)
            */}
            <div className="hidden md:block absolute right-[1%] lg:right-[15%] bottom-[42%] lg:bottom-[46%] z-30 scale-80 sm:scale-90 lg:scale-100 origin-bottom-right transition-transform hover:scale-105">
              <ProgressCard />
            </div>

            {/* 
              Floating Card 3: Happy Students
              Positioned on the lower left (0% to 22%), well clear of the centered laptop
            */}
            <div className="hidden md:block absolute left-[0%] lg:left-[15%] bottom-[8%] lg:bottom-[10%] z-30 scale-80 sm:scale-90 lg:scale-100 origin-bottom-left transition-transform hover:scale-105">
              <HappyStudentsCard />
            </div>
          </div>
        </section>

        {/* Clean Responsive Card Strip on Mobile (so phone users see all cards without cluttering the graphic) */}
        <div className="md:hidden w-full px-4 py-6 flex flex-col gap-3 z-30 bg-primary/30 backdrop-blur-sm mt-3">
          <div className="bg-white rounded-2xl p-3.5 shadow-md flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-brand-dark">
                UI/UX Design
              </h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs text-brand-muted">200 Courses</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="text-xs text-brand-muted">1000+ Students</span>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-accent rounded-full text-brand-dark">
              Popular
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <HappyStudentsCard className="max-w-none w-full" />
            <ProgressCard className="w-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
