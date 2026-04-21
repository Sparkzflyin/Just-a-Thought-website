"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import SocialShare from "@/components/blog/SocialShare";
import FadeIn from "@/components/framermotion/FadeIn";
import FocusWrapper from "@/components/blog/FocusWrapper";
import { posts } from "../posts";

type Post = (typeof posts)[0];

const RelatedPosts = ({ current }: { current: Post }) => {
  const [hovered, setHovered] = useState<Post | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    // One-shot matchMedia read on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasHover(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);

  const related = posts
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, 2);

  const fallback = posts
    .filter((p) => p.slug !== current.slug)
    .slice(0, 2 - related.length);

  const toShow = [...related, ...fallback];

  if (toShow.length === 0) return null;

  return (
    <section
      className="py-16 bg-gray-50 relative"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">More to Read</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {toShow.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              onMouseEnter={() => hasHover && setHovered(p)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                {p.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-brand-gold transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {p.date} · {p.readingTime} min read
              </p>
              <p className="text-sm line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hovered && hasHover && (
          <motion.div
            key={hovered.slug}
            className="fixed pointer-events-none z-40 bg-white rounded-2xl shadow-2xl p-5 max-w-sm border border-gray-100"
            style={{
              left: Math.min(cursor.x + 24, window.innerWidth - 400),
              top: Math.min(cursor.y + 24, window.innerHeight - 280),
            }}
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
              {hovered.category}
            </p>
            <h4 className="font-bold font-serif mb-2 leading-snug">
              {hovered.title}
            </h4>
            <p className="text-xs text-gray-500 mb-3">
              {hovered.date} · {hovered.readingTime} min read
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {hovered.excerpt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

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
            <span className="inline-block bg-brand-gold text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
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
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content),
                }}
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

      <RelatedPosts current={post} />
    </FocusWrapper>
  );
};

export default PostClientView;
