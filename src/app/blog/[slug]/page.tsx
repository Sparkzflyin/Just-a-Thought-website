import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import PostClientView from "./PostClientView";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const post = posts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.your-domain.com";

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: [post.category, "leadership", "coaching", "Just a Thought"],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Just a Thought",
      images: [
        {
          url: `${siteUrl}/logo-latest.png`,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}/logo-latest.png`],
    },
  };
}

const PostPage = async ({ params }: Props) => {
  const resolvedParams = await Promise.resolve(params);
  const post = posts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.your-domain.com";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: [post.category, "leadership", "coaching"].join(", "),
    wordCount: post.content
      // eslint-disable-next-line sonarjs/slow-regex -- negated class is linear, no catastrophic backtracking
      .replace(/<[^>]*>/g, "")
      .split(/\s+/).length,
    publisher: {
      "@type": "Organization",
      name: "Just a Thought",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-latest.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    image: `${siteUrl}/logo-latest.png`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PostClientView post={post} />
    </>
  );
};

export default PostPage;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
