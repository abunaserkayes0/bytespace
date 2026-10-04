import Image from "next/image";
import Link from "next/link";
import CourseShowcaseCard from "./course-showcase-card";
import CourseBackCard from "./course-back-card";
import AuthHappyStudentsCard from "./auth-happy-students-card";

interface AuthLayoutProps {
  headline: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  headline,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-primary bg-grid flex justify-center items-center overflow-x-hidden">
      {/* 1440px Max Width Centered Container */}
      <div className="w-full max-w-360 min-h-screen flex flex-col lg:flex-row relative">
        {/* Left Panel (Decorative) */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center p-8 md:p-12 overflow-hidden">
          {/* Logo - Pinned to Top Left of Container */}
          <Link
            href="/"
            className="absolute top-8 left-8 md:top-10 md:left-12 flex items-center gap-2 cursor-pointer z-40"
          >
            <Image
              src="/icons/logo.png"
              alt="ByteSpace"
              width={28}
              height={31}
            />
          </Link>

          {/* Centered Left Content (Headline + Composition) */}
          <div className="flex flex-col my-auto pt-14 lg:pt-16 ">
            {/* Text Content */}
            <div className="max-w-110 text-white z-30 mb-6 md:mb-8">
              <h1 className="font-poppins font-semibold text-lg md:text-xl leading-[1.15] mb-3.5 tracking-tight">
                {headline}
              </h1>
              <p className="font-satoshi text-[14px] md:text-[15px] text-white/80 leading-[1.65] font-light">
                {description}
              </p>
            </div>

            {/* ===== Card Composition Area ===== */}
            <div className="relative w-full max-w-140 h-115 md:h-122.5">
              {/* Torus ring — top-left, overlapping above cards */}
              <div className="absolute top-2 md:top-4 left-0 md:left-2 w-32.5 md:w-37.5 z-30 pointer-events-none">
                <Image
                  src="/icons/yellow-circle.png"
                  alt="torus"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>

              {/* Back card — offset left and slightly down */}
              <div className="absolute top-16 md:top-30 left-3 md:left-5 z-10 opacity-95">
                <CourseBackCard />
              </div>

              {/* Main front card — overlapping on top-right of back card */}
              <div className="absolute top-4 md:top-6 left-24 md:left-28 z-20">
                <CourseShowcaseCard />
              </div>

              {/* Pyramid — bottom-left */}
              <div className="absolute bottom-4 left-2 md:bottom-[-15] md:left-10 w-27.5 md:w-32.5 z-30 pointer-events-none">
                <Image
                  src="/icons/accent-piramid.png"
                  alt="pyramid"
                  width={130}
                  height={130}
                  className="w-full h-auto"
                />
              </div>

              {/* Happy Students card — bottom-right */}
              <div className="absolute bottom-6 md:bottom-[-30] left-40 md:left-48 z-30">
                <AuthHappyStudentsCard />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-10 md:p-16 relative">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="mb-6 self-start lg:hidden flex items-center gap-2 cursor-pointer z-20"
          >
            <Image
              src="/icons/logo.png"
              alt="ByteSpace"
              width={24}
              height={27}
            />
            <span className="font-clash-display text-white text-xl">
              ByteSpace
            </span>
          </Link>

          <div className="w-full max-w-280 h-auto lg:max-w-145 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
