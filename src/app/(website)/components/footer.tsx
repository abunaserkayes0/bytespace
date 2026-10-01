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
  ],
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 sm:pt-20 md:pt-24 pb-8 font-satoshi border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Section */}
          <div className="max-w-lg w-full">
            <div className="flex items-center text-[22px] font-bold gap-2 mb-4">
              <Image
                src="/icons/logo.png"
                alt="ByteSpace Logo"
                width={28}
                height={31}
                className="w-7 h-auto"
              />
              <span className="font-clash-display text-2xl text-brand-dark">
                ByteSpace
              </span>
            </div>

            <p className="text-brand-dark text-sm sm:text-base mb-6 sm:mb-8 leading-[160%]">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 rounded-full px-5 py-3 sm:py-3.5 outline-none focus:border-primary text-sm sm:text-base placeholder:text-[#82868E] bg-white shadow-sm"
                required
              />
              <button
                type="submit"
                className="bg-accent text-brand-dark font-medium text-base sm:text-lg px-7 py-3 sm:py-3.5 rounded-full hover:bg-accent/90 transition-colors cursor-pointer shrink-0 text-center shadow-sm"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-brand-muted leading-[160%]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Section Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full lg:w-auto">
            {footerLinksData.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3 sm:gap-4">
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
        <div className="border-t border-[#EAEAEA] text-brand-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm pt-6">
          <p>© 2024 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-normal text-brand-muted">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
