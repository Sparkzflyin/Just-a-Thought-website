"use client";

import Link from "next/link";
import SocialShare from "@/components/blog/SocialShare";
import FadeIn from "@/components/framermotion/FadeIn";
import FocusWrapper from "@/components/blog/FocusWrapper";
import { posts } from "../posts"; // We need the type

type Post = (typeof posts)[0];

const PostClientView = ({ post }: { post: Post }) => {
  return (
    <FocusWrapper>
      {/* Page Header */}
      <div
        className="py-16 md:py-24 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/stock-photos/autumn1.jpg)" }}
      >
        <div className="bg-black bg-opacity-50 py-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-200">
              Published on {post.date} by {post.author} ·{" "}
              <span>{post.readingTime} min read</span>
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Post Content */}
      <FadeIn>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SocialShare title={post.title} />
              </div>
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
    </FocusWrapper>
  );
};

export default PostClientView;
