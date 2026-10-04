import type { Metadata } from "next";
import CreatorView from "../components/creator-view";

interface CreatorDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CreatorDetailPageProps): Promise<Metadata> {
  await params;
  return {
    title: "PurePearl Studio | Creator Profile | ByteSpace",
    description:
      "Explore courses, digital assets, and tutorials created by PurePearl Studio on ByteSpace.",
  };
}

export default async function CreatorDetailPage({
  params,
}: CreatorDetailPageProps) {
  const { id } = await params;
  return <CreatorView creatorId={id} />;
}
