import Image from "next/image"
import CourseCard from "./CourseCard"
import ProgressCard from "./ProgressCard"

export default function ManageCourses() {
    const growth = [{
        id: 1,
        title: "students",
        value: "12K"
    }, {
        id: 2,
        title: "courses",
        value: "70+"
    }, {
        id: 3,
        title: "creators",
        value: "16"
    }]
    return (
        <div className="bg-white">
            <div className="max-w-314.5 mx-auto">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-15.75 pt-30 pb-18">
                    <aside>
                        <h2 className="font-poppins text-[44px] text-brand-dark font-semibold leading-[120%] tracking-[-1%] mb-8">Your Path to Professional Growth Starts Here!</h2>
                        <p className="font-satoshi text-lg text-[#4B4C53] font-normal leading-[180%] text-brand-gray mb-8">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>
                        <div className="flex gap-x-14">
                            {
                                growth.map(item => (
                                    <div key={item.id}>
                                        <h4 className="font-poppins text-[#003BE2] font-medium text-[36px] leading-11 tracking-[-1%]">{item.value}</h4>
                                        <p className="font-satoshi font-normal text-[#4B4C53] text-lg leading-[120%]">{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </aside>
                    <aside className="relative z-10">
                        <CourseCard
                            image="https://i.pravatar.cc/100?img=10"
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
                        <div className="absolute top-17 z-10">
                            <Image src="/icons/Image.png" width="577" height="540" alt="certificate image" />
                        </div>
                        <div className="absolute bottom-15 right-17 z-20">
                            <ProgressCard />
                        </div>
                        <div className="absolute top-18 right-5 z-30">
                            <Image src="/icons/straight-role.png" width="215" height="215" alt="left role" />
                        </div>
                    </aside>
                </section>
            </div>
        </div>


    )
}