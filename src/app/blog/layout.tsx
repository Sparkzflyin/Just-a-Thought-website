import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Leadership, Growth & Mindset",
  description:
    "Articles from Just a Thought on leadership, growth, mindset, and productivity — written for leaders who want to cultivate clarity through subtraction, not addition.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Just a Thought Blog — Leadership, Growth & Mindset",
    description:
      "Articles on leadership, growth, mindset, and productivity from Just a Thought.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
