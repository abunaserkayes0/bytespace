import Link from "next/link";
import AuthLayout from "../components/auth-layout";
import SocialLoginButton from "../components/social-login-button";
import Button from "../../(website)/components/ui/button";

export default function SignInPage() {
  return (
    <AuthLayout
      headline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="font-satoshi">
        <span className="text-primary text-sm lg:text-lg font-medium tracking-wide">
          Sign In
        </span>
        <h2 className="font-poppins text-[34px] md:text-[44px] leading-tight font-semibold text-brand-black mt-2 mb-10">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label
              className="text-sm font-semibold text-brand-dark mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="designer@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-brand-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label
              className="text-sm font-semibold text-brand-dark mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-brand-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 font-sans tracking-[0.2em]"
              required
            />
          </div>

          <div className="flex justify-end mt-3 sm:mt-4">
            <Button
              type="submit"
              className="px-8! py-3! text-[15px]! font-medium! rounded-full!"
            >
              Sign In
            </Button>
          </div>
        </form>

        <div className="flex items-center gap-4 my-7 sm:my-8">
          <div className="h-px bg-gray-100 flex-1"></div>
          <span className="text-gray-400 text-[13px] sm:text-sm font-medium">
            or
          </span>
          <div className="h-px bg-gray-100 flex-1"></div>
        </div>

        <div className="flex justify-center gap-4 sm:gap-5 mb-8 sm:mb-10">
          <SocialLoginButton
            icon="facebook"
            aria-label="Sign in with Facebook"
          />
          <SocialLoginButton icon="google" aria-label="Sign in with Google" />
        </div>

        <p className="text-center text-[14px] sm:text-[15px] text-brand-muted">
          New user?{" "}
          <Link
            href="/sign-up"
            className="text-primary hover:underline font-medium"
          >
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
