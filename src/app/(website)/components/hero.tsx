"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import ProgressCard from "./progress-card";
import HappyStudentsCard from "./happy-students-card";
import Button from "./ui/button";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-primary bg-grid overflow-hidden flex flex-col font-poppins relative w-full">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-5 sm:py-7 text-white z-40 relative">
        <div className="flex items-center text-[22px] font-bold gap-2">
          <Image
            src="/icons/logo.png"
            alt="ByteSpace Logo"
            width={28}
            height={31}
            className="w-7 h-auto"
          />
          <span className="font-clash-display text-xl sm:text-[24px]">
            ByteSpace
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 lg:gap-10 text-base font-normal text-white/90">
          <span className="cursor-pointer hover:text-white transition-colors text-white font-semibold">
            Home
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Courses
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Creators
          </span>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 text-base font-normal text-white/90">
          <span className="cursor-pointer hover:text-white transition-colors">
            Sign In
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Join Us
          </span>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="p-1 hover:text-white transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden text-white">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="p-1 hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-white hover:text-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-white z-50 shadow-2xl">
            <span
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer font-semibold text-lg text-accent"
            >
              Home
            </span>
            <span
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer hover:text-accent transition-colors text-base"
            >
              Courses
            </span>
            <span
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer hover:text-accent transition-colors text-base"
            >
              Creators
            </span>
            <hr className="border-white/10 my-1" />
            <div className="flex flex-col gap-3 pt-1">
              <span
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer hover:text-accent transition-colors text-base"
              >
                Sign In
              </span>
              <Button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center text-center py-2.5"
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center text-center px-4 sm:px-6 text-white z-20 relative w-full pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-satoshi font-semibold leading-[115%] sm:leading-[120%] mb-4 sm:mb-6 tracking-[-1%]">
          Get Access to Hundreds <br className="hidden sm:block" /> Courses
          Available
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed font-light px-2">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-[85vw] md:w-[70vw] lg:w-full lg:max-w-[581px] items-stretch sm:items-center mb-10 sm:mb-16 relative z-30 px-2 sm:px-0">
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

        {/* Outer Leftmost Background Shape (No max-w, fluid width) */}
        <div className="hidden lg:block absolute left-0 top-[22%] z-10 pointer-events-none select-none w-[12vw]">
          <Image
            src="/icons/left-role.png"
            alt="Left Role"
            width={260}
            height={330}
            className="w-full h-auto opacity-80"
          />
        </div>

        {/* Outer Rightmost Background Shape (No max-w, fluid width) */}
        <div className="hidden lg:block absolute right-0 top-[18%] z-10 pointer-events-none select-none w-[12vw]">
          <Image
            src="/icons/cilinder.png"
            alt="Right Role"
            width={260}
            height={320}
            className="w-full h-auto opacity-80"
          />
        </div>

        {/* 
          Hero Graphics Showcase Section (100% Fluid - NO max-width)
          Scales proportionally on ANY screen size via viewport-width (vw) and relative percentages (%)
        */}
        <section className="relative w-full flex justify-center items-end mt-2 sm:mt-6 pb-0 overflow-visible">
          {/* Proportional Composition Container */}
          <div className="relative w-[94vw] sm:w-[86vw] md:w-[78vw] lg:w-[70vw] xl:w-[62vw] 2xl:w-[56vw] flex justify-center items-end">
            {/* Half Circle Graphic (Fills the fluid container) */}
            <div className="w-full flex justify-center">
              <Image
                src="/icons/half-circle.png"
                alt="Half Circle"
                width={1149}
                height={1149}
                className="w-full h-auto object-contain select-none pointer-events-none"
                priority
              />
            </div>

            {/* Student Center Image (Occupies center 54% of fluid container, leaving 23% on each side) */}
            <div className="absolute left-1/2 bottom-0 z-20 -translate-x-1/2 w-[54%] flex justify-center">
              <Image
                src="/icons/Image.png"
                alt="Student"
                width={578}
                height={541}
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
