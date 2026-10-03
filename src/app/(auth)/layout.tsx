import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | ByteSpace",
  description: "Sign in or create an account for ByteSpace.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="font-poppins min-h-screen">{children}</div>;
}
