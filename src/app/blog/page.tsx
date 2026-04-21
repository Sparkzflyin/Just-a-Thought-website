"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "./posts";
import FadeIn from "@/components/framermotion/FadeIn";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Leadership", "Growth", "Mindset", "Productivity"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [featuredPost, ...remainingPosts] = filteredPosts;

  return (
    <>
      {/* Page Header */}
      <div
        className="py-16 md:py-24 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/stock-photos/autumn1.jpg)" }}
      >
        <div className="bg-black bg-opacity-50 py-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              J.A.T. Blog
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Insights on leadership, growth, and the power of a subtractive
              mindset.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <FadeIn>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Blog Posts */}
              <div className="lg:w-2/3">
                {filteredPosts.length === 0 ? (
                  <p>No articles found matching your criteria.</p>
                ) : (
                  <>
                    {/* Featured Post */}
                    {featuredPost && (
                      <FadeIn>
                        <article className="mb-16 bg-gray-50 rounded-3xl overflow-hidden shadow-md group">
                          <div className="p-8 md:p-10">
                            <span className="inline-block bg-brand-gold text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                              {featuredPost.category}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-brand-gold transition-colors duration-300">
                              <Link href={`/blog/${featuredPost.slug}`}>
                                {featuredPost.title}
                              </Link>
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">
                              {featuredPost.date} by {featuredPost.author} ·{" "}
                              <span>{featuredPost.readingTime} min read</span>
                            </p>
                            <p className="text-lg mb-6 leading-relaxed">
                              {featuredPost.excerpt}
                            </p>
                            <Link
                              href={`/blog/${featuredPost.slug}`}
                              className="inline-flex items-center gap-2 bg-brand-gold text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-300"
                            >
                              Read Article
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        </article>
                      </FadeIn>
                    )}

                    {/* Remaining Posts */}
                    {remainingPosts.length > 0 && (
                      <div className="space-y-16">
                        {remainingPosts.map((post) => (
                          <article key={post.slug} className="border-b pb-8">
                            <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
                              {post.category}
                            </span>
                            <h2 className="text-3xl font-bold mb-2">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-accent transition-colors"
                              >
                                {post.title}
                              </Link>
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">
                              {post.date} by {post.author} ·{" "}
                              <span>{post.readingTime} min read</span>
                            </p>
                            <p className="text-lg mb-4">{post.excerpt}</p>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="font-bold text-accent hover:underline"
                            >
                              Read More &rarr;
                            </Link>
                          </article>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Search</h3>
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full p-2 border rounded-md"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-8">
                    <h3 className="text-2xl font-bold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className={`w-full text-left hover:text-accent ${
                            !selectedCategory ? "font-bold text-accent" : ""
                          }`}
                        >
                          All Categories
                        </button>
                      </li>
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left hover:text-accent ${
                              selectedCategory === category
                                ? "font-bold text-accent"
                                : ""
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
