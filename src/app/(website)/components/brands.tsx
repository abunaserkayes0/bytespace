import Image from "next/image";

export default function Brands() {
  const brands = [
    { id: "brand-1", src: "/brands/Frame.png", name: "Partner 1" },
    { id: "brand-2", src: "/brands/Frame (1).png", name: "Partner 2" },
    { id: "brand-3", src: "/brands/Frame (2).png", name: "Partner 3" },
    { id: "brand-4", src: "/brands/Frame (3).png", name: "Partner 4" },
    { id: "brand-5", src: "/brands/Frame (4).png", name: "Partner 5" },
  ];

  return (
    <section className="bg-brand-light py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-18 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {brands.map((brand) => (
            <div key={brand.id} className="relative w-42 h-10.25">
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
