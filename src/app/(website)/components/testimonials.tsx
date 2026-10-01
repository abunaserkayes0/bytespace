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
    <section className="pt-18.5 pb-14.25 bg-white px-4 md:px-0 relative overflow-hidden bg-testimonial-radial">
      {/* Background Gradients */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10.75 mb-18 px-4 md:px-0">
          <h2 className="font-poppins text-[40px] md:text-[44px] leading-[120%] tracking-[-1%] font-semibold text-brand-black max-w-144.25">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="font-satoshi text-lg text-[#4F4F4F] max-w-145 leading-[160%]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-6 shadow-sm"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-6 size-20 object-cover"
              />
              <h4 className="font-poppins text-xl font-semibold text-black">
                {testimonial.name}
              </h4>
              <p className="font-satoshi text-lg font-normal text-primary mb-6">
                {testimonial.role}
              </p>
              <p className="font-satoshi text-[#4f4f4f] text-lg leading-[160%] mt-auto">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
