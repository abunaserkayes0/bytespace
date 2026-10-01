import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Bold.otf",
  variable: "--font-clash-display",
  weight: "700",
  style: "normal",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytespace-sepia.vercel.app"),
  title: {
    default: "ByteSpace - Modern Learning & Course Discovery Platform",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable skills, and grow your career with ByteSpace. Explore hundreds of expert-led courses across development, design, and business.",
  keywords: [
    "ByteSpace",
    "online learning",
    "e-learning platform",
    "web development courses",
    "UI/UX design courses",
    "coding tutorials",
    "career skills",
    "learn programming",
  ],
  authors: [
    { name: "Abunaser Kayes", url: "https://github.com/abunaserkayes0" },
  ],
  creator: "Abunaser Kayes",
  publisher: "ByteSpace",
  icons: {
    icon: "/icons/logo.png",
    shortcut: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bytespace-sepia.vercel.app",
    title: "ByteSpace - Modern Learning & Course Discovery Platform",
    description:
      "Unlock your creativity, gain valuable skills, and grow your career with ByteSpace. Explore hundreds of expert-led courses across development, design, and business.",
    siteName: "ByteSpace",
    images: [
      {
        url: "/icons/half-circle.png",
        width: 1149,
        height: 442,
        alt: "ByteSpace Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpace - Modern Learning & Course Discovery Platform",
    description:
      "Unlock your creativity, gain valuable skills, and grow your career with ByteSpace.",
    creator: "@abunaserkayes0",
    images: ["/icons/half-circle.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
