import Image from "next/image"
import CourseCard from "./course-card"
import ProgressCard from "./progress-card"
import { CircleCheck } from "lucide-react"
import HappyStudentsCard from "./happy-students-card"

export default function ManageCourses() {
    const policies = [{
        id: 1,
        title: "Share Your Expertise",
    }, {
        id: 2,
        title: "Monetize Your Passion",
    }, {
        id: 3,
        title: "Flexibility and Autonomy",
    }, {
        id: 4,
        title: "Build a Community",
    }]
    return (
        <div className="bg-white">
            <div className="max-w-314.5 mx-auto">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-15.75 pt-30 pb-18">
                    <aside className="relative z-10">
                        {/* Total Revenue card */}
                        <div
                            className={`bg-primary max-w-58 font-satoshi rounded-xl p-4 shadow-lg flex flex-col mb-7.75 relative`}
                        >
                            <h4 className="text-base text-left font-medium font-satoshi text-white">
                                Total Revenue
                            </h4>
                            <span className="text-[10px]">July 1-28</span>
                            <h2 className="font-poppins text-white text-left text-[24px] leading-8 font-semibold">
                                $120.29
                            </h2>
                            <div className="w-50 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-accent rounded-full" />
                            </div>
                        </div>

                        {/* Year to Date card */}
                         <div
                            className={`bg-primary max-w-33.5 font-satoshi rounded-xl p-4 shadow-lg flex flex-col`}
                        >
                            <h4 className="text-base text-left font-medium font-satoshi text-white">
                                Year to Date
                            </h4>
                            <span className="text-[10px]">2023</span>
                            <h2 className="font-poppins text-white text-left text-[24px] leading-8 font-semibold my-2">
                                $1200.38
                            </h2>
                            <div className="max-w-9.5 h-5 bg-accent rounded-full flex items-center justify-center">
                                <span className="text-black text-[10px] leading-5 font-medium">+12$</span>
                            </div>
                        </div>
                        <div className="absolute -top-10 left-15">
                            <Image src="/icons/image.png" width="435" height="596" alt="certificate image" />
                        </div>
                        <div className="absolute -top-2.5 left-67 rotate-40">
                            <Image src="/icons/straight-role.png" width="216" height="216" alt="certificate image" />
                        </div>

                        

                       

                        <HappyStudentsCard/>
                    </aside>
                    <aside>
                        <h2 className="font-poppins text-[44px] text-brand-dark font-semibold leading-[120%] tracking-[-1%] mb-10">Create & Manage Courses Easily.</h2>
                        <p className="font-satoshi text-lg text-[#4B4C53] font-normal leading-[180%] text-brand-gray my-8">
                            <b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>
                        <div>
                            {
                                policies.map(item => (
                                    <div className="flex gap-x-2 items-center mb-4" key={item.id}>
                                        <CircleCheck fill="#0e44fd" stroke="white" />
                                        <h5 className="font-satoshi text-base text-[#232529] font-medium leading-[120%] tracking-normal">{item.title}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </aside>

                </section>
            </div>
        </div>


    )
}