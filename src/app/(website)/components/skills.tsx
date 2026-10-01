import Button from "./ui/button";
import CourseCard from "./course-card";

export default function Skills() {
  const skills = [
    {
      id: "1",
      name: "featured",
    },
    {
      id: "2",
      name: "newest",
    },
    {
      id: "3",
      name: "design",
    },
    {
      id: "4",
      name: "development",
    },
    {
      id: "5",
      name: "business",
    },
    {
      id: "6",
      name: "finance",
    },
    {
      id: "7",
      name: "marketing",
    },
    {
      id: "8",
      name: "development",
    },
    {
      id: "9",
      name: "design",
    },
    {
      id: "10",
      name: "business",
    },
    {
      id: "11",
      name: "finance",
    },
    {
      id: "12",
      name: "marketing",
    },
    {
      id: "13",
      name: "development",
    },
    {
      id: "14",
      name: "design",
    },
    {
      id: "15",
      name: "business",
    },
    {
      id: "16",
      name: "finance",
    },
    {
      id: "17",
      name: "marketing",
    },
    {
      id: "18",
      name: "development",
    },
  ];

  const courses = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      rating: 4.5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      level: "Beginner",
      price: 25,
      studentsText: "26+",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      title: "Build Digital Asset",
      author: "purepearl studio",
      rating: 4.5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      level: "Beginner",
      price: 25,
      studentsText: "26+",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      title: "The Power of Big Data",
      author: "purepearl studio",
      rating: 4.5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      level: "Beginner",
      price: 25,
      studentsText: "26+",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      title: "Balancing Productivity and...",
      author: "purepearl studio",
      rating: 4.5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      level: "Beginner",
      price: 25,
      studentsText: "26+",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
      title: "Mastering Money Manage...",
      author: "purepearl studio",
      rating: 4.5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      level: "Beginner",
      price: 25,
      studentsText: "26+",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      title: "From Idea to Startup Succ...",
      author: "purepearl studio",
      rating: 4.5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      level: "Beginner",
      price: 25,
      studentsText: "26+",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center text-brand-black mb-8 sm:mb-12">
          <h3 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[44px] leading-[120%] tracking-[-1%] mb-3 sm:mb-4">
            Discover Your Passion, <br className="hidden sm:block" /> Build Your
            Skills
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-satoshi text-brand-muted leading-relaxed px-2">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Skill Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-5xl mx-auto mb-10 sm:mb-16">
          {skills.map((skill, index) => (
            <Button
              key={skill.id}
              className={`capitalize text-xs sm:text-sm md:text-base py-2 px-3 sm:py-2.5 sm:px-4 rounded-full transition-colors duration-300 ${
                index === 0
                  ? "bg-accent text-black font-medium hover:bg-accent/90"
                  : "bg-brand-light text-brand-dark hover:bg-accent hover:text-black"
              }`}
            >
              {skill.name}
            </Button>
          ))}
          <button className="capitalize text-sm sm:text-base font-satoshi font-semibold text-primary hover:underline transition-all duration-300 px-3 py-2 cursor-pointer">
            + More
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
