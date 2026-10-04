"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutTab() {
  const sneakPeakImages = [
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
      alt: "Wireframing and Sketching",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      alt: "Interface Design",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
      alt: "Workspace and Collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
      alt: "Mobile and App Design",
    },
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="flex flex-col gap-10 font-satoshi text-brand-dark pt-6">
      {/* Description Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-3.5">
          Description
        </h3>
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
          <p>
            Embark on an enlightening exploration into the world of digital
            creation with our comprehensive course, &quot;Build Digital Assets:
            A Comprehensive Guide.&quot; This transformative learning experience
            invites you to delve deep into the intricacies of crafting impactful
            digital content. From laying the groundwork with foundational
            concepts to mastering advanced techniques, this guide is
            meticulously curated to empower you with the skills essential for
            navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by
            immersing yourself in the foundational concepts that form the
            backbone of digital asset creation. Understand the fundamental
            elements that constitute compelling digital content and gain
            proficiency in leveraging these elements to communicate effectively
            in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher
            levels of expertise, delving into the nuances of design principles
            that drive impactful creations. Uncover the secrets behind effective
            visual communication, exploring color theory, typography, and layout
            strategies that elevate your digital assets to new heights. Engage
            in hands-on exercises that reinforce your understanding, allowing
            you to apply these principles in practical scenarios.
          </p>
        </div>
      </section>

      {/* Sneak Peak Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4">
          Sneak Peak
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {sneakPeakImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-xs"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Key Points Section */}
      <section>
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4">
          Key Points
        </h3>
        <div className="flex flex-col gap-3">
          {keyPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-dark"
            >
              <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10 shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
