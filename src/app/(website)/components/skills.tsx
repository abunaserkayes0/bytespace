import Button from "./ui/Button"

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

               <section>
                </section>  

        </section>
    )
}