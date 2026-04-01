import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import Link from "next/link";
import SocialShare from "@/components/blog/SocialShare";
import FadeIn from "@/components/framermotion/FadeIn";

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

  return (
    <>
      {/* Post Header */}
      <FadeIn>
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-500">
              Published on {post.date} by {post.author}
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Post Content */}
      <FadeIn>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SocialShare title={post.title} />
              </div>
              {/* 
                TODO: Using dangerouslySetInnerHTML bypasses Next.js's built-in image optimization via the `next/image` component.
                If blog posts start to include images, they will not be optimized, which can significantly
                impact mobile performance. For a more robust solution, consider parsing the HTML content
                and replacing `<img>` tags with the `next/image` component.
              */}
              <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="font-bold text-accent hover:underline"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default PostPage;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
