import Image from "next/image";
import { CircleCheck } from "lucide-react";
import CourseCard from "./course-card";
import ProgressCard from "./progress-card";
import HappyStudentsCard from "./happy-students-card";

export default function Features() {
  const growth = [
    {
      id: 1,
      title: "students",
      value: "12K",
    },
    {
      id: 2,
      title: "courses",
      value: "70+",
    },
    {
      id: 3,
      title: "creators",
      value: "16",
    },
  ];

  const policies = [
    {
      id: 1,
      title: "Share Your Expertise",
    },
    {
      id: 2,
      title: "Monetize Your Passion",
    },
    {
      id: 3,
      title: "Flexibility and Autonomy",
    },
    {
      id: 4,
      title: "Build a Community",
    },
  ];

  return (
    <div className="bg-features-radial overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-32 py-12 sm:py-20 lg:py-28">
          {/* Professional Growth Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 items-center">
            <aside className="flex flex-col justify-center">
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-semibold leading-[120%] tracking-[-1%] mb-4 sm:mb-6">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="font-satoshi text-base sm:text-lg text-[#4B4C53] font-normal leading-[170%] text-brand-gray mb-6 sm:mb-8 max-w-xl">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-x-12">
                {growth.map((item) => (
                  <div key={item.id} className="min-w-20">
                    <h4 className="font-poppins text-[#003BE2] font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-tight tracking-[-1%]">
                      {item.value}
                    </h4>
                    <p className="font-satoshi font-normal text-[#4B4C53] text-sm sm:text-base lg:text-lg leading-tight capitalize">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </aside>

            <aside className="relative z-10 flex justify-center w-full">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg">
                {/* Main Course Card */}
                <div className="relative w-full">
                  <CourseCard
                    image="https://i.pravatar.cc/500?img=10"
                    title="Web Development"
                    author="Abunaser Kayes"
                    lessons={12}
                    duration="12h 30m"
                    comments={12}
                    level="All Levels"
                    studentsText="12K"
                    rating={4.9}
                    price={49.99}
                  />

                </div>

                {/* Decorative Image Behind Card */}
                <div className="hidden sm:block absolute top-15 -right-6 lg:right-[-40%] z-10 w-72 lg:w-144.25 pointer-events-none opacity-85">
                  <Image
                    src="/images/Image.png"
                    width={577}
                    height={540}
                    alt="certificate background"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating ProgressCard */}
                <div className="hidden sm:block absolute top-[40%] sm:-right-25 z-20 scale-85 sm:scale-95 lg:scale-100 origin-bottom-right shadow-2xl">
                  <ProgressCard />
                </div>

                {/* Floating Role Shape */}
                <div className="hidden lg:block absolute top-25 right-[-27%] z-30 w-32 pointer-events-none select-none">
                  <Image
                    src="/icons/straight-role.png"
                    width={215}
                    height={215}
                    alt="role shape"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </aside>
          </section>

          {/* Manage Courses Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 items-center">
            {/* Visual Graphic Stack */}
            <aside className="relative z-10 flex justify-center w-full order-2 lg:order-1">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg min-h-[380px] sm:min-h-[460px] flex flex-col justify-start pt-4 sm:pt-8">
                {/* Total Revenue card */}
                <div className="bg-primary max-w-[240px] sm:max-w-64 font-satoshi rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col mb-4 sm:mb-6 relative">
                  <h4 className="text-sm sm:text-base text-left font-medium text-white">
                    Total Revenue
                  </h4>
                  <span className="text-[10px] text-white/70">July 1-28</span>
                  <h2 className="font-poppins text-white text-left text-xl sm:text-[24px] leading-8 font-semibold my-1">
                    $120.29
                  </h2>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mt-1">
                    <div className="h-full w-3/4 bg-accent rounded-full" />
                  </div>
                </div>

                {/* Year to Date card */}
                <div className="bg-primary max-w-[170px] sm:max-w-44 font-satoshi rounded-2xl p-4 shadow-xl flex flex-col relative">
                  <h4 className="text-xs sm:text-sm text-left font-medium text-white">
                    Year to Date
                  </h4>
                  <span className="text-[10px] text-white/70">2023</span>
                  <h2 className="font-poppins text-white text-left text-lg sm:text-[22px] leading-7 font-semibold my-1">
                    $1200.38
                  </h2>
                  <div className="w-12 h-5 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-[10px] font-semibold">
                      +12$
                    </span>
                  </div>
                </div>

                {/* Backdrop Certificate Image */}
                <div className="sm:block absolute top-0 right-0 sm:left-28 lg:left-24 z-10 w-64 sm:w-80 lg:w-96 pointer-events-none">
                  <Image
                    src="/images/image.png"
                    width={435}
                    height={596}
                    alt="student certificate"
                    className="w-full h-auto"
                  />
                </div>

                {/* Decorative cylinder shape */}
                <div className="hidden lg:block absolute right-15 top-[20%] rotate-40 z-10 w-36 pointer-events-none select-none">
                  <Image
                    src="/icons/straight-role.png"
                    width={216}
                    height={216}
                    alt="shape"
                    className="w-full h-auto"
                  />
                </div>

                {/* Happy Students Floating Badge */}
                <div className="hidden sm:block absolute right-0 sm:right-4 lg:left-1/2 bottom-4 sm:bottom-12 lg:top-56 z-30 shadow-2xl scale-85 sm:scale-95 lg:scale-100 origin-bottom-right lg:origin-center">
                  <HappyStudentsCard />
                </div>
              </div>
            </aside>

            {/* Text Content */}
            <aside className="order-1 lg:order-2">
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-semibold leading-[120%] tracking-[-1%] mb-4 sm:mb-6">
                Create &amp; Manage <br className="hidden sm:block" /> Courses
                Easily.
              </h2>
              <p className="font-satoshi text-base sm:text-lg text-[#4B4C53] font-normal leading-[170%] text-brand-gray mb-6 sm:mb-8 max-w-xl">
                <b>ByteSpace</b> supports individuals or entities in the
                creation, publication, and administration of educational
                courses.
              </p>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                {policies.map((item) => (
                  <div className="flex gap-x-3 items-center" key={item.id}>
                    <CircleCheck
                      className="w-5 h-5 text-primary shrink-0"
                      fill="#0e44fd"
                      stroke="white"
                    />
                    <h5 className="font-satoshi text-sm sm:text-base text-[#232529] font-medium leading-[120%]">
                      {item.title}
                    </h5>
                  </div>
                ))}
              </div>
            </aside>
          </section>
        </section>
      </div>
    </div>
  );
}
