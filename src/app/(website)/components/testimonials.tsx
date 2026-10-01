import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://i.pravatar.cc/150?img=11",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden bg-testimonial-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-10 sm:mb-14 lg:mb-18">
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-[44px] leading-[120%] tracking-[-1%] font-semibold text-brand-black max-w-lg">
            Discover What Our <br className="hidden sm:block" /> Community Is
            Saying
          </h2>
          <p className="font-satoshi text-sm sm:text-base md:text-lg text-[#4F4F4F] max-w-xl leading-[160%]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-5 size-16 sm:size-20 object-cover border-2 border-primary/20"
              />
              <h4 className="font-poppins text-lg sm:text-xl font-semibold text-black">
                {testimonial.name}
              </h4>
              <p className="font-satoshi text-sm sm:text-base font-normal text-primary mb-4 sm:mb-6">
                {testimonial.role}
              </p>
              <p className="font-satoshi text-[#4f4f4f] text-sm sm:text-base leading-[160%] mt-auto">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
