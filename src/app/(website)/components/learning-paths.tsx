import {
  PencilRuler,
  CodeXml,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

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
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[36px] leading-[120%] tracking-[-1%] text-brand-black mb-3 sm:mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h3>
          <p className="max-w-3xl text-sm sm:text-base md:text-lg font-satoshi text-brand-muted mx-auto leading-[160%] mb-8 sm:mb-14 px-2">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="w-full py-6 sm:py-8 px-2 sm:px-4 flex flex-col items-center justify-center border border-[#EAEAEC] rounded-2xl sm:rounded-3xl hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-white"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center shrink-0 mb-2.5 sm:mb-3.5">
                <path.icon className="text-brand-black size-5 sm:size-6" />
              </div>
              <span className="font-satoshi font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#242558] text-center line-clamp-1 w-full">
                {path.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
