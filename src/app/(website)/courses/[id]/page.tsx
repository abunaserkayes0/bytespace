import type { Metadata } from "next";
import CourseDetailsView from "./components/course-details-view";

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  await params;
  return {
    title: "Build Digital Asset: A Comprehensive Guide | ByteSpace",
    description:
      "Unlock the Power of Digital Creation with Expert Guidance by PurePearl Studio.",
    openGraph: {
      title: "Build Digital Asset: A Comprehensive Guide | ByteSpace",
      description:
        "Unlock the Power of Digital Creation with Expert Guidance by PurePearl Studio.",
    },
  };
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { id } = await params;
  return <CourseDetailsView courseId={id} />;
}
