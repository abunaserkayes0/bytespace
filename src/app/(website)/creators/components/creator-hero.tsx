"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";

interface CreatorHeroProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  productsCount?: number;
  followersCount?: number;
  bio?: string;
}

export default function CreatorHero({
  name = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  productsCount = 3,
  followersCount = 12,
  bio = "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
}: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useState(followersCount);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
    setCurrentFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <header className="bg-primary bg-grid relative text-white font-poppins pb-16 sm:pb-20">
      {/* Top Shared Navbar */}
      <Navbar />

      {/* Creator Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 max-w-4xl">
            {/* Creator Avatar with pink/orange gradient background like mockup */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl p-1 bg-linear-to-br from-pink-400 to-orange-400 shrink-0 shadow-lg overflow-hidden relative">
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative">
                <Image
                  src={avatarUrl}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-white">
                  {name}
                </h1>
                <span className="bg-accent text-brand-black text-xs font-semibold px-2.5 py-0.5 rounded-full font-satoshi shadow-xs">
                  Creator
                </span>
              </div>

              <p className="text-white/80 text-xs sm:text-sm font-medium mb-3">
                {role}
              </p>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-satoshi max-w-3xl mb-5">
                {bio}
              </p>

              {/* Stats Pills */}
              <div className="flex items-center gap-2.5 font-satoshi text-xs sm:text-sm font-medium">
                <div className="bg-white text-brand-dark px-3.5 py-1 rounded-full shadow-xs">
                  <span className="font-bold text-brand-black mr-1">
                    {productsCount}
                  </span>
                  <span>Products</span>
                </div>
                <div className="bg-white text-brand-dark px-3.5 py-1 rounded-full shadow-xs">
                  <span className="font-bold text-brand-black mr-1">
                    {currentFollowers}
                  </span>
                  <span>Followers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Button */}
          <div className="shrink-0 self-start sm:self-end md:self-start">
            <button
              type="button"
              onClick={handleFollowToggle}
              className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer font-satoshi shadow-md ${
                isFollowing
                  ? "bg-white text-brand-dark hover:bg-gray-100"
                  : "bg-accent hover:bg-accent/90 text-brand-black hover:scale-105"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
