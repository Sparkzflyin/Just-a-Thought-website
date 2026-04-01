import Link from "next/link";
import FadeIn from "@/components/framermotion/FadeIn";
import ContactForm from "@/components/contactform/ContactForm";
import { posts } from "./blog/posts";
import Quiz from "@/components/quiz/Quiz";
import StickyScrollSection from "@/components/framermotion/StickyScrollSection";

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-accent mr-3 inline-block"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Hero Section (No sticky scroll) */}
      <FadeIn>
        <section
          id="home"
          className="bg-brand-grey-blue text-center py-20 md:py-32 h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl lg:text-[220px] font-bold font-sans text-brand-off-white mb-8 leading-[0.9]">
              Executive Agility
            </h1>
            <p className="text-xl md:text-[50px] max-w-3xl mx-auto text-brand-off-white mb-16">
              Your strategic partner in profound
              <br />
              <span className="block mt-4">transformation.</span>
            </p>
            <Link
              href="/#book-now"
              className="bg-brand-gold text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-80"
            >
              Begin Your Transformation
            </Link>
          </div>
        </section>
      </FadeIn>

      <StickyScrollSection className="bg-white">
        <div id="organizations">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              For Organizations: Cultivating Agility
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
              Empower your leadership and streamline your business with our
              subtractive approach to growth.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-8">
              Key Programs for Transformation
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">
                The Core Optimization Plan
              </h3>
              <p className="text-lg leading-relaxed">
                This program is designed to transform strategic leadership from
                an accidental occurrence into a clear, structured roadmap.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                The Rewire Lab for Teams
              </h3>
              <p className="text-lg leading-relaxed">
                Adapted for organizational dynamics, this program focuses on
                transforming the collective mindsets that drive professional
                skills and team performance.
              </p>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-gray-100">
        <div id="individuals">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              For Individuals: Unleash Your Potential
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
              Transform your leadership and accelerate personal growth with the
              Rewire Lab.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-8">
              The Rewire Lab: Undo. Unthink. Unlearn.
            </h2>
            <p className="text-lg leading-relaxed">
              Our unique framework focuses on a powerful, subtractive approach
              to help you break free from limiting mindsets and unlock your full
              potential.
            </p>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-white">
        <div id="about">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              The Philosophy of Subtraction
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
              Discover the core principles that drive our transformative
              approach.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our goal is to liberate the untapped capacity that already exists
              within your organization by strategically taking away complexity,
              not adding to it.
            </p>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-gray-100">
        <div id="rewire-programs">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              Upcoming Rewire Programs
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
              Details about our transformative programs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">The Rewire Lab</h2>
              <p className="text-lg">
                Our flagship program for individuals and leaders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">
                The Core Optimization Plan
              </h2>
              <p className="text-lg">
                A comprehensive roadmap for strategic leadership.
              </p>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-brand-off-white">
        <div id="blog-preview">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              From the Blog
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(0, 2).map((post) => (
              <div
                key={post.slug}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-brand-gold hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-brand-gold text-white font-bold py-3 px-6 rounded-md text-lg"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-white">
        <div id="quiz">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              What's Your Leadership Style?
            </h1>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <Quiz />
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-gradient-gray-100">
        <div id="book-now">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              Book a Consultation
            </h1>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </StickyScrollSection>
    </>
  );
}
