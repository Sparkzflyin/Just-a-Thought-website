import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";
import FadeIn from "@/components/framermotion/FadeIn";

export const metadata: Metadata = {
  title: "Just a thought - Blog",
  description:
    "Insights on leadership, growth, and the power of a subtractive mindset.",
};

const BlogPage = () => {
  return (
    <>
      {/* Page Header */}
      <FadeIn>
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              J.A.T. Blog
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
              Insights on leadership, growth, and the power of a subtractive
              mindset.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Main Content */}
      <FadeIn>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Blog Posts */}
              <div className="lg:w-2/3">
                <div className="space-y-16">
                  {posts.map((post) => (
                    <article key={post.slug} className="border-b pb-8">
                      <h2 className="text-3xl font-bold mb-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-accent transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Published on {post.date} by {post.author}
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
                    />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-8">
                    <h3 className="text-2xl font-bold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="hover:text-accent">
                          Leadership
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-accent">
                          Growth
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-accent">
                          Mindset
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-accent">
                          Productivity
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default BlogPage;
