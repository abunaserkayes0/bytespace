import Image from "next/image";
import Link from "next/link";

const footerLinksData = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ]
];

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 px-4 md:px-0 font-satoshi">
      <div className="container mx-auto max-w-300">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-23 mb-20">
          {/* Left Section */}
          <div className="max-w-132">
            <div className="flex items-end text-[22px] font-bold gap-2 mb-4">
              <Image
                src="/icons/logo.png"
                alt="ByteSpace Logo"
                width={28}
                height={31}
                className="mb-2"
              />
              <span className="font-clash-display text-[24px] text-brand-dark">ByteSpace</span>
            </div>

            <p className="text-brand-dark text-sm mb-11.25 leading-[160%]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="flex items-center gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 rounded-full px-6 py-3.5 outline-none focus:border-primary text-base placeholder:text-[#82868E]"
                required
              />
              <button
                type="submit"
                className="bg-accent text-brand-dark font-medium text-lg px-8 py-3.5 rounded-full hover:bg-accent/90 transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>

            <p className="text-xs text-brand-dark leading-[160%]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Section Links */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-8 lg:gap-10 pt-2">
            {footerLinksData.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {column.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-brand-dark text-sm font-normal hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#EAEAEA] text-brand-dark flex flex-col md:flex-row justify-between items-center gap-6 text-sm pt-5.5">
          <p>
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-normal">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
