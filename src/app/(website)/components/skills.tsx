import Button from "./ui/Button"
import CourseCard from "./CourseCard"

export default function Skills() {
    const skills = [
        {
            id: "1",
            name: "featured"
        },
        {
            id: "2",
            name: "newest"
        },
        {
            id: "3",
            name: "design"
        },
        {
            id: "4",
            name: "development"
        },
        {
            id: "5",
            name: "business"
        },
        {
            id: "6",
            name: "finance"
        },
        {
            id: "7",
            name: "marketing"
        },
        {
            id: "8",
            name: "development"
        },
        {
            id: "9",
            name: "design"
        },
        {
            id: "10",
            name: "business"
        },
        {
            id: "11",
            name: "finance"
        },
        {
            id: "12",
            name: "marketing"
        },
        {
            id: "13",
            name: "development"
        },
        {
            id: "14",
            name: "design"
        },
        {
            id: "15",
            name: "business"
        },
        {
            id: "16",
            name: "finance"
        },
        {
            id: "17",
            name: "marketing"
        },
        {
            id: "18",
            name: "development"
        },

    ]
    
    const courses = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
            title: "Learn Figma from Basic",
            author: "purepearl studio",
            rating: 4.5,
            lessons: 17,
            duration: "2 hours 16 mins",
            comments: 59,
            level: "Beginner",
            price: 25,
            studentsText: "26+"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            title: "Build Digital Asset",
            author: "purepearl studio",
            rating: 4.5,
            lessons: 17,
            duration: "2 hours 16 mins",
            comments: 59,
            level: "Beginner",
            price: 25,
            studentsText: "26+"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
            title: "The Power of Big Data",
            author: "purepearl studio",
            rating: 4.5,
            lessons: 17,
            duration: "2 hours 16 mins",
            comments: 59,
            level: "Beginner",
            price: 25,
            studentsText: "26+"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            title: "Balancing Productivity and...",
            author: "purepearl studio",
            rating: 4.5,
            lessons: 17,
            duration: "2 hours 16 mins",
            comments: 59,
            level: "Beginner",
            price: 25,
            studentsText: "26+"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
            title: "Mastering Money Manage...",
            author: "purepearl studio",
            rating: 4.5,
            lessons: 17,
            duration: "2 hours 16 mins",
            comments: 59,
            level: "Beginner",
            price: 25,
            studentsText: "26+"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            title: "From Idea to Startup Succ...",
            author: "purepearl studio",
            rating: 4.5,
            lessons: 17,
            duration: "2 hours 16 mins",
            comments: 59,
            level: "Beginner",
            price: 25,
            studentsText: "26+"
        }
    ];

    return (
        <section className="bg-white py-18">
            <section>
                <div className="max-w-229.25 mx-auto text-center text-brand-black">
                    <h3 className="font-poppins font-semibold text-[44px] leading-[120%] tracking-[-1%] mb-4">Discover Your Passion, <br className="hidden md:block" /> Build Your Skills</h3>
                    <p className="text-lg font-satoshi text-brand-muted mb-10.5">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
                </div>

                <div className="flex flex-col items-center gap-4 font-satoshi leading-[120%] text-base w-full mb-8 px-4">
                    {/* First line */}
                    <div className="flex flex-wrap justify-center gap-3 w-full max-w-267">
                        {skills.slice(0, 8).map((skill, index) => (
                            <Button key={skill.id} className={`capitalize hover:bg-accent hover:text-black transition-colors duration-300 ${index === 0 ? "bg-accent text-black" : "bg-brand-light text-brand-dark"}`}>
                                {skill.name}
                            </Button>
                        ))}
                    </div>

                    {/* Second line */}
                    <div className="flex flex-wrap justify-center gap-3 w-full max-w-238">
                        {skills.slice(8, 14).map((skill) => (
                            <Button key={skill.id} className="capitalize bg-brand-light text-brand-dark hover:bg-accent hover:text-black transition-colors duration-300">
                                {skill.name}
                            </Button>
                        ))}
                    </div>

                    {/* Third line */}
                    <div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-155.5">
                        {skills.slice(14, 18).map((skill) => (
                            <Button key={skill.id} className="capitalize bg-brand-light text-brand-dark hover:bg-accent hover:text-black transition-colors duration-300">
                                {skill.name}
                            </Button>
                        ))}
                        <button className="capitalize text-base font-satoshi fon-semibold text-primary hover:underline transition-all duration-300">
                            + More
                        </button>
                    </div>
                </div>
            </section>

               <section className="max-w-299.75 mx-auto mt-16 px-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {courses.map((course) => (
                           <CourseCard key={course.id} {...course} />
                       ))}
                   </div>
                </section>  

        </section>
    )
}