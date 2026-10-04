import type { Metadata } from "next";
import CreatorView from "./components/creator-view";

export const metadata: Metadata = {
  title: "PurePearl Studio | Creators | ByteSpace",
  description:
    "Explore courses, digital assets, and tutorials created by PurePearl Studio on ByteSpace.",
  openGraph: {
    title: "PurePearl Studio | Creators | ByteSpace",
    description:
      "Explore courses, digital assets, and tutorials created by PurePearl Studio on ByteSpace.",
  },
};

export default function CreatorsPage() {
  return <CreatorView />;
}
