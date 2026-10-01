import Image from "next/image";

export default function CreatorCta() {
  return (
    <section className="bg-primary relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 bg-grid"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">
        <h2 className="text-white font-poppins text-2xl sm:text-3xl md:text-[44px] leading-[120%] tracking-[-1%] font-semibold">
          Unlock Your Potential as a<br className="hidden md:block" /> Creator
          with ByteSpace
        </h2>
        <p className="text-white/80 font-satoshi text-sm sm:text-base md:text-lg mx-auto max-w-3xl leading-[160%] px-2">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="bg-accent text-brand-dark font-medium font-satoshi text-base sm:text-lg px-7 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-accent/90 cursor-pointer transition-colors shadow-lg">
          Join as Creator
        </button>
      </div>

      {/* 3D Decorative Shapes (hidden on small viewports to prevent overflow) */}
      <div className="absolute top-0 left-0 z-0 select-none hidden lg:block pointer-events-none">
        <Image
          src="/icons/accent-aside-role.png"
          alt="shape"
          width={386}
          height={386}
          className="w-48 xl:w-64"
        />
      </div>

      <div className="absolute top-1 left-50 z-0 select-none hidden xl:block pointer-events-none">
        <Image
          src="/icons/small-role.png"
          alt="shape"
          width={100}
          height={100}
          className="w-20 xl:w-28"
        />
      </div>

      <div className="absolute bottom-10 left-0 z-0 select-none hidden lg:block pointer-events-none">
        <Image
          src="/icons/white-priramid.png"
          alt="shape"
          width={188}
          height={188}
          className="w-32 xl:w-40"
        />
      </div>

      <div className="absolute left-15 bottom-0 z-0 select-none hidden xl:block pointer-events-none">
        <Image
          src="/icons/break-circle.png"
          alt="shape"
          width={342}
          height={342}
          className="w-40 xl:w-56"
        />
      </div>

      <div className="absolute top-0 right-24 z-0 select-none hidden xl:block pointer-events-none">
        <Image
          src="/icons/accent-piramid.png"
          alt="shape"
          width={188}
          height={188}
          className="w-24 xl:w-36"
        />
      </div>

      <div className="absolute top-7 -right-17 z-0 select-none hidden lg:block pointer-events-none">
        <Image
          src="/icons/white-cilinder.png"
          alt="shape"
          width={370}
          height={370}
          className="w-48 xl:w-64"
        />
      </div>

      <div className="absolute -right-5 bottom-0 z-0 select-none hidden lg:block pointer-events-none">
        <Image
          src="/icons/accent-break-role.png"
          alt="accent-break-role"
          width={331}
          height={331}
          className="w-48 xl:w-64"
        />
      </div>
    </section>
  );
}
