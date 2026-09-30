import Image from "next/image";
import { Search, ShoppingBag, Star } from "lucide-react";
import Button from "./ui/button";
import ProgressCard from "./progress-card";
import HappyStudentsCard from "./happy-students-card";

export default function Hero() {
  return (
    <div className="bg-primary bg-grid overflow-hidden flex flex-col font-poppins relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-8 mb-12.25 text-white z-20 relative">
        <div className="flex items-center text-[22px] font-bold gap-2">
          <Image
            src="/icons/Header_Logo.png"
            alt="ByteSpace Logo"
            width={171}
            height={37}
          />
        </div>

        <div className="hidden md:flex gap-10 text-base font-normal text-white/90">
          <span className="cursor-pointer hover:text-white transition-colors text-white font-semibold">Home</span>
          <span className="cursor-pointer hover:text-white transition-colors">Courses</span>
          <span className="cursor-pointer hover:text-white transition-colors">Creators</span>
        </div>

        <div className="flex items-center gap-6 text-base font-normal text-white/90">
          <span className="cursor-pointer hover:text-white transition-colors hidden sm:block">Sign In</span>
          <span className="cursor-pointer hover:text-white transition-colors hidden sm:block">Join Us</span>
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-white transition-colors" strokeWidth={2} />
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center text-center px-6 text-white z-20 relative">
        <h1 className="text-[44px] md:text-[72px] font-satoshi font-semibold leading-[120%] mb-8 tracking-[-1%]">
          Get Access to Hundreds <br className="hidden md:block" /> Courses Available
        </h1>
        <p className="text-lg text-white/80 mb-12 leading-relaxed font-light">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        <div className="flex gap-4 w-full max-w-145.25 items-start mb-10 relative z-30">
          <div className="flex bg-white rounded-full py-[11.5px] px-4 flex-1 items-center">
            <Search className="text-gray-400 mr-3 shrink-0 size-6" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="border-none outline-none flex-1 text-lg text-gray-800 placeholder-gray-400 w-full font-normal font-satoshi bg-transparent"
            />
          </div>
          <Button>
            Search
          </Button>
        </div>

        {/* Graphics Area */}

        <div className="absolute left-0 z-10">
          <Image src="/icons/left-role.png" alt="Left Role" width={300} height={385} />
        </div>
        <div className="absolute right-0 top-0 z-10">
          <Image src="/icons/cilinder.png" alt="Right Role" width={300} height={370} />
        </div>

        <section className="relative">
          <Image src="/icons/half-circle.png" alt="Half Circle" width={1149} height={1149} />
          <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2">
            <Image src="/icons/Image.png" alt="image" width={578} height={541} />
          </div>

          <div className="absolute -left-33 bottom-0 z-10">
            <Image src="/icons/circle.png" alt="circle" width={342} height={342} />
          </div>

          <div className="absolute -right-41 bottom-0 z-10">
            <Image src="/icons/role.png" alt="circle" width={330} height={330} />
          </div>

          <div className="absolute left-45 bottom-70 bg-white font-satoshi rounded-xl p-4 shadow-lg flex flex-col">
            <h4 className="text-base text-left font-normal text-brand-dark">Ui/Ux Designer</h4>
            <div className="flex items-center gap-1.5">
              <span className="text-normal text-xs text-brand-muted">200 Course</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="text-xs text-brand-muted">1000+ Students</span>
            </div>
          </div>

          <HappyStudentsCard className="absolute left-45 bottom-12 z-50" />

          <ProgressCard className="absolute right-55 bottom-60" />

        </section>

        <div className="absolute left-95 bottom-85 z-20">
          <Image src="/icons/small-role.png" alt="small-role" width={175} height={175} />
        </div>

        <div className="absolute right-70 bottom-85 z-20">
          <Image src="/icons/priramid.png" alt="small-role" width={175} height={175} />
        </div>

      </main>
    </div>
  );
}
