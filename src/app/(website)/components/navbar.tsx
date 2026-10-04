"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import Button from "./ui/button";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isCourses = pathname === "/courses" || pathname.startsWith("/courses/");
  const isCreators =
    pathname === "/creators" || pathname.startsWith("/creators/");

  return (
    <nav
      className={`w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-5 lg:py-6 text-white z-40 relative shrink-0 ${className}`}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center text-[22px] font-bold gap-2">
        <Image
          src="/icons/logo.png"
          alt="ByteSpace Logo"
          width={28}
          height={31}
          className="w-7 h-auto"
        />
        <span className="font-clash-display text-xl sm:text-[24px]">
          ByteSpace
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 lg:gap-10 text-base font-normal text-white/90 font-poppins">
        <Link
          href="/"
          className={`cursor-pointer hover:text-white transition-colors ${
            isHome ? "text-white font-semibold" : "text-white/80"
          }`}
        >
          Home
        </Link>
        <Link
          href="/courses"
          className={`cursor-pointer hover:text-white transition-colors ${
            isCourses ? "text-white font-semibold" : "text-white/80"
          }`}
        >
          Courses
        </Link>
        <Link
          href="/creators"
          className={`cursor-pointer hover:text-white transition-colors ${
            isCreators ? "text-white font-semibold" : "text-white/80"
          }`}
        >
          Creators
        </Link>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-6 text-base font-normal text-white/90 font-poppins">
        <Link
          href="/sign-in"
          className="cursor-pointer hover:text-white transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="cursor-pointer hover:text-white transition-colors"
        >
          Join Us
        </Link>
        <button
          type="button"
          aria-label="Shopping Cart"
          className="p-1 hover:text-white transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      {/* Mobile controls */}
      <div className="flex items-center gap-4 md:hidden text-white">
        <button
          type="button"
          aria-label="Shopping Cart"
          className="p-1 hover:text-white transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="p-1 text-white hover:text-accent transition-colors cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 left-0 bottom-0 w-10/12 sm:w-1/2 max-w-[85vw] h-full z-50 md:hidden bg-linear-to-b from-white via-[#F8FAFF] to-[#EDF2FE] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col p-6 font-satoshi text-brand-black ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-[20px] font-bold gap-2"
          >
            <Image
              src="/icons/logo.png"
              alt="ByteSpace Logo"
              width={26}
              height={29}
              className="w-6.5 h-auto"
            />
            <span className="font-clash-display text-primary text-xl">
              ByteSpace
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col gap-1.5 py-6">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`cursor-pointer font-medium text-base px-3.5 py-2.5 rounded-xl transition-colors ${
              isHome
                ? "font-semibold text-primary bg-blue-50/80"
                : "text-gray-700 hover:text-primary hover:bg-white/80"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className={`cursor-pointer font-medium text-base px-3.5 py-2.5 rounded-xl transition-colors ${
              isCourses
                ? "font-semibold text-primary bg-blue-50/80"
                : "text-gray-700 hover:text-primary hover:bg-white/80"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className={`cursor-pointer font-medium text-base px-3.5 py-2.5 rounded-xl transition-colors ${
              isCreators
                ? "font-semibold text-primary bg-blue-50/80"
                : "text-gray-700 hover:text-primary hover:bg-white/80"
            }`}
          >
            Creators
          </Link>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="mt-auto pt-5 border-t border-gray-100 flex flex-col gap-3">
          <Link
            href="/sign-in"
            onClick={() => setMobileMenuOpen(false)}
            className="cursor-pointer font-medium text-center py-2.5 text-gray-700 hover:text-primary transition-colors text-base"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex"
          >
            <Button className="w-full justify-center text-center py-2.5 shadow-md shadow-primary/20">
              Join Us
            </Button>
          </Link>
        </div>
      </aside>
    </nav>
  );
}
