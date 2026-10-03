import Link from "next/link";
import AuthLayout from "../components/auth-layout";
import Button from "../../(website)/components/ui/button";

export default function SignUpPage() {
  return (
    <AuthLayout
      headline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="font-satoshi">
        <span className="text-primary text-[15px] font-medium tracking-wide">
          Create an Account
        </span>
        <h2 className="font-clash-display text-[34px] sm:text-[40px] leading-[1.1] font-bold text-brand-black mt-2 mb-8 pr-4">
          Welcome to ByteSpace
        </h2>

        <form className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label
              className="text-[13px] font-semibold text-brand-dark"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Jamie Davis"
              className="w-full border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-brand-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label
              className="text-[13px] font-semibold text-brand-dark"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="designer@example.com"
              className="w-full border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-brand-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label
              className="text-[13px] font-semibold text-brand-dark"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-brand-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 font-sans tracking-[0.2em]"
              required
            />
          </div>

          <div className="flex justify-end mt-3 sm:mt-4">
            <Button
              type="submit"
              className="!px-8 !py-3 !text-[15px] !font-medium !rounded-full"
            >
              Continue
            </Button>
          </div>
        </form>

        <p className="text-center text-[14px] sm:text-[15px] text-brand-muted mt-10 sm:mt-12">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-primary hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
