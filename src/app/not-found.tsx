import Link from "next/link";
import Navbar from "./(website)/components/navbar";
import Footer from "./(website)/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-satoshi">
      {/* Blue Hero Grid Section with 404 Content */}
      <section className="bg-primary bg-grid relative text-white font-poppins flex flex-col min-h-[75vh] sm:min-h-[80vh] justify-between pb-16 sm:pb-24">
        {/* Navigation Bar */}
        <Navbar />

        {/* 404 Center Area */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center my-auto pt-6 pb-12 sm:pb-16">
          {/* Giant Gradient 404 with Overlapping Heading */}
          <div className="relative flex flex-col items-center select-none w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <span
              aria-hidden="true"
              className="text-[130px] sm:text-[200px] md:text-[260px] lg:text-[320px] font-bold leading-none tracking-tight bg-linear-to-b from-[#CCFF00] via-[#CCFF00]/80 to-[#CCFF00]/15 bg-clip-text text-transparent font-poppins opacity-95 drop-shadow-sm pointer-events-none"
            >
              404
            </span>

            {/* Overlapping Headline - Scaled and Positioned Consistently Across All Screens */}
            <div className="absolute inset-x-0 -bottom-10 sm:-bottom-12 md:-bottom-16 lg:-bottom-24 flex flex-col items-center px-3 z-10">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-white font-poppins leading-[115%] tracking-tight max-w-4xl text-center">
                The page you are looking <br className="hidden sm:block" /> for
                doesn&apos;t exist
              </h1>
            </div>
          </div>

          {/* Subtitle / Helper Message */}
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8 font-satoshi max-w-md px-4 leading-relaxed">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="bg-accent hover:bg-accent/90 text-brand-black px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold font-satoshi transition-transform hover:scale-105 shadow-md cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
