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
    <div className="flex min-h-screen bg-primary bg-grid overflow-hidden">
      {/* Left Panel (Decorative) */}
      <div className="hidden lg:flex lg:w-[48%] xl:w-1/2 relative flex-col overflow-hidden">
        {/* Logo */}
        <Link
          href="/"
          className="absolute top-8 left-10 flex items-center gap-2 z-40 cursor-pointer"
        >
          <Image src="/icons/logo.png" alt="ByteSpace" width={28} height={31} />
        </Link>

        {/* Text Content */}
        <div className="absolute top-[12%] left-[8%] max-w-[420px] text-white z-30">
          <h1 className="font-poppins font-bold text-[32px] xl:text-[38px] leading-[1.15] mb-4 tracking-tight">
            {headline}
          </h1>
          <p className="font-satoshi text-[14px] xl:text-[15px] text-white/80 leading-[1.65] font-light">
            {description}
          </p>
        </div>

        {/* ===== Card Composition Area ===== */}
        <div className="absolute top-[30%] left-[6%] right-[4%] bottom-[4%]">
          {/* Torus ring — top-left, overlapping above cards */}
          <div className="absolute -top-[8%] left-[2%] w-[130px] xl:w-[150px] z-30 pointer-events-none">
            <Image
              src="/icons/break-circle.png"
              alt="torus"
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </div>

          {/* Back card — offset left and slightly down */}
          <div className="absolute top-[18%] left-0 z-10 opacity-95">
            <CourseBackCard />
          </div>

          {/* Main front card — overlapping on top-right of back card */}
          <div className="absolute top-[6%] left-[18%] xl:left-[22%] z-20">
            <CourseShowcaseCard />
          </div>

          {/* White squiggle — right side */}
          <div className="absolute right-[-12%] top-[20%] w-[160px] xl:w-[180px] z-15 pointer-events-none opacity-80">
            <Image
              src="/icons/role.png"
              alt="squiggle"
              width={180}
              height={300}
              className="w-full h-auto"
            />
          </div>

          {/* Accent squiggle — bottom-right, above happy students */}
          <div className="absolute right-[2%] bottom-[32%] w-[100px] xl:w-[110px] z-15 pointer-events-none">
            <Image
              src="/icons/straight-role.png"
              alt="accent squiggle"
              width={110}
              height={110}
              className="w-full h-auto"
            />
          </div>

          {/* Pyramid — bottom-left */}
          <div className="absolute bottom-[-2%] left-[4%] w-[120px] xl:w-[140px] z-25 pointer-events-none">
            <Image
              src="/icons/accent-piramid.png"
              alt="pyramid"
              width={140}
              height={140}
              className="w-full h-auto"
            />
          </div>

          {/* Happy Students card — bottom-right */}
          <div className="absolute bottom-[2%] right-[2%] xl:right-[6%] z-25">
            <AuthHappyStudentsCard />
          </div>
        </div>
      </div>

      {/* Right Panel (Form) */}
      <div className="w-full lg:w-[52%] xl:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24 relative">
        {/* Mobile Logo */}
        <Link
          href="/"
          className="absolute top-6 left-6 lg:hidden flex items-center gap-2 cursor-pointer z-20"
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

        <div className="w-full max-w-[580px] bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
