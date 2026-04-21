import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clarify Your Values — An Interactive Exercise",
  description:
    "An interactive exercise from Just a Thought to help leaders surface and articulate their core personal values — the foundation of aligned decision-making.",
  alternates: {
    canonical: "/values",
  },
  openGraph: {
    title: "Clarify Your Values — Just a Thought",
    description:
      "An interactive exercise to help leaders surface and articulate their core personal values.",
    url: "/values",
    type: "website",
  },
};

export default function ValuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
