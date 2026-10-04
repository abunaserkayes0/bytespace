"use client";

import { Video } from "lucide-react";

export default function LessonTab() {
  const modules = [
    {
      title: "Module 1: Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 font-satoshi text-brand-dark pt-6">
      {/* Explore the Modules Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-2">
          Explore the Modules
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </section>

      {/* Lesson List Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4">
          Lesson List
        </h3>
        <div className="flex flex-col gap-4 sm:gap-5">
          {modules.map((mod, idx) => (
            <div key={idx} className="flex items-start gap-3 sm:gap-4">
              {/* Rounded Accent Video Icon Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-accent flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Video className="w-5 h-5 text-brand-black" />
              </div>

              {/* Module Text Details */}
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-semibold text-brand-black mb-1">
                  {mod.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Content Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-2">
          Lesson Content
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      {/* Lesson Progress Tracking */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-2">
          Lesson Progress Tracking
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        {/* Learning Progress Card */}
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-xs max-w-xl">
          <span className="text-xs sm:text-sm text-brand-muted font-medium block mb-1">
            Learning Progress
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-brand-black block mb-3 font-poppins">
            55%
          </span>

          {/* Progress Bar Container */}
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
