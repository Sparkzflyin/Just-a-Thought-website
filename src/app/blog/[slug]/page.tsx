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

  const siteUrl = "https://www.your-domain.com"; // Replace with your actual domain

  return {
    title: `${post.title} - Just a Thought`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Just a Thought",
      images: [
        {
          url: `${siteUrl}/logo-latest.png`, // You might want a specific image per post
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}/logo-latest.png`], // You might want a specific image per post
    },
  };
}

const PostPage = async ({ params }: Props) => {
  const resolvedParams = await Promise.resolve(params);
  const post = posts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return <PostClientView post={post} />;
};

export default PostPage;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
