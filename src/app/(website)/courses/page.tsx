import type { Metadata } from "next";
import CoursesView from "./components/courses-view";

export const metadata: Metadata = {
  title: "Find Your Next Course",
  description:
    "Explore hundreds of expert-led courses across development, design, and business on ByteSpace.",
  openGraph: {
    title: "Find Your Next Course | ByteSpace",
    description:
      "Explore hundreds of expert-led courses across development, design, and business on ByteSpace.",
  },
};

export default function CoursesPage() {
  return <CoursesView />;
}
