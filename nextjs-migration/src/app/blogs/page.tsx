import BlogsPageClient from "./BlogsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & PEB Industry Insights | Deepika Builtech Blog",
  description: "Expert articles on PEB construction, warehouse building, cold storage, steel structures and more from Deepika Builtech — Chennai's leading PEB contractor.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
