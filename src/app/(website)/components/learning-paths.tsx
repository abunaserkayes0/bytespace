import { PencilRuler, CodeXml, Laptop, Building2, Megaphone, Camera } from "lucide-react";

export default function LearningPaths() {
    const paths = [
        {
            id: 1,
            name: "Design",
            icon: PencilRuler,
        },
        {
            id: 2,
            name: "Development",
            icon: CodeXml,
        },
        {
            id: 3,
            name: "IT & Software",
            icon: Laptop,
        },
        {
            id: 4,
            name: "Business",
            icon: Building2,
        },
        {
            id: 5,
            name: "Marketing",
            icon: Megaphone,
        },
        {
            id: 6,
            name: "Photography",
            icon: Camera,
        }
    ];

    return (
        <section className="bg-white py-16 md:pt-18 md:pb-30">
            <div className="max-w-300 mx-auto px-4">
                <div className="text-center">
                    <h3 className="font-poppins font-semibold text-[32px] md:text-[36px] leading-[120%] tracking-[-1%] text-brand-black mb-4">
                        Explore Diverse Learning Paths at Bytespace
                    </h3>
                    <p className="max-w-229.25 text-lg font-satoshi text-brand-muted mx-auto leading-[160%] mb-17">
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-8">
                    {paths.map((path) => (
                        <div
                            key={path.id}
                            className="max-w-41.75 max-h-41.75 py-8.75 flex flex-col items-center justify-center border border-[#EAEAEC] rounded-3xl hover:shadow-sm transition-all duration-300 cursor-pointer"
                        >
                            <div className="size-15 bg-accent rounded-full flex items-center justify-center shrink-0 mb-3">
                                <path.icon className="text-brand-black size-6.75" />
                            </div>
                            <span className="font-satoshi font-medium text-xl text-[#242558] text-center">
                                {path.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
