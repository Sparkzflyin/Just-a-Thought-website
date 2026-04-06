"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/framermotion/FadeIn";
import ContactForm from "@/components/contactform/ContactForm";
import { posts } from "./blog/posts";
import Quiz from "@/components/quiz/Quiz";
import StickyScrollSection from "@/components/framermotion/StickyScrollSection";
import StaggeredAnimation from "@/components/framermotion/StaggeredAnimation/StaggeredAnimation";
import PhilosophyCard from "@/components/interactive/PhilosophyCard";
import { useScroll } from "@/context/ScrollContext";

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
  const [leadershipStyle, setLeadershipStyle] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  const { targetId, setTargetId } = useScroll();

  useEffect(() => {
    const style = localStorage.getItem("leadershipStyle");
    if (style) {
      setLeadershipStyle(style);
    }

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  useEffect(() => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Use a timeout to ensure the page has had time to render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setTargetId(null); // Clear the target after scrolling
        }, 100);
      }
    }
  }, [targetId, setTargetId]);

  return (
    <>
      {/* Hero Section (No sticky scroll) */}
      <FadeIn>
        <section
          id="home"
          className="bg-animated-gradient text-center py-20 md:py-32 h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-4">
            <StaggeredAnimation>
              {leadershipStyle && (
                <p className="text-3xl md:text-5xl text-brand-dark mb-6">
                  {greeting}, {leadershipStyle} Leader.
                </p>
              )}
              <h1 className="text-6xl md:text-8xl lg:text-[220px] font-bold font-sans text-brand-off-white mb-8 leading-[0.9]">
                Lead with Purpose
              </h1>
              <p className="text-xl md:text-[50px] max-w-3xl mx-auto text-brand-off-white mb-16">
                We help you clear the noise and
                <br />
                <span className="block mt-4">lead with confidence.</span>
              </p>
              <Link
                href="/#book-now"
                className="bg-brand-gold text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-80"
              >
                Start Your Journey
              </Link>
            </StaggeredAnimation>
          </div>
        </section>
      </FadeIn>

      <StickyScrollSection className="bg-white">
        <div id="organizations" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                For Your Team: Build a Stronger Culture
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Empower your team and your business by focusing on what truly
                matters.
              </p>
            </StaggeredAnimation>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <StaggeredAnimation>
                  <h2 className="text-3xl font-bold text-center mb-8">
                    How We Help Your Organization Grow
                  </h2>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3">
                      Clear, Strategic Leadership
                    </h3>
                    <p className="text-lg leading-relaxed">
                      We'll help you develop a clear and simple roadmap, turning
                      effective leadership into a daily practice, not an
                      accident.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      A Team That Trusts
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Our programs are designed to transform the way your team
                      works together, building a foundation of trust that boosts
                      performance.
                    </p>
                  </div>
                </StaggeredAnimation>
              </div>
              <div className="relative h-96 md:h-full">
                <Image
                  src="/stock-photos/autumn1.jpg"
                  alt="A team collaborating in a warm, inviting setting."
                  fill
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-gray-100">
        <div id="individuals" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                For You: Find Your Focus
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Take control of your growth and become the leader you're meant
                to be.
              </p>
            </StaggeredAnimation>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[40rem] md:h-full">
                <Image
                  src="/stock-photos/stock4.jpg"
                  alt="An individual leader finding focus in a peaceful environment."
                  fill
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
              <div>
                <StaggeredAnimation>
                  <h2 className="text-3xl font-bold text-center mb-8">
                    Undo. Unthink. Unlearn.
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Our unique approach is about subtraction. We help you remove
                    the mental clutter holding you back, so you can unlock your
                    full potential.
                  </p>
                </StaggeredAnimation>
              </div>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-white">
        <div id="about" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                The Power of Subtraction
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Click on a card to see how our philosophy simplifies leadership.
              </p>
            </StaggeredAnimation>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <PhilosophyCard
                frontText="Cluttered Thought: Adding more processes will fix our workflow."
                backText="Subtracted Principle: Seek clarity by removing bottlenecks, not adding layers."
              />
              <PhilosophyCard
                frontText="Cluttered Thought: We must resist change to maintain stability."
                backText="Subtracted Principle: Embrace growth by adapting with purpose."
              />
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-gray-100">
        <div id="rewire-programs" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Upcoming Programs
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Find a program that's right for you.
              </p>
            </StaggeredAnimation>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <StaggeredAnimation>
                <h2 className="text-2xl font-bold mb-2">The Rewire Lab</h2>
                <p className="text-lg">
                  Our core program for individuals and leaders ready for a
                  change.
                </p>
              </StaggeredAnimation>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <StaggeredAnimation>
                <h2 className="text-2xl font-bold mb-2">Core Optimization</h2>
                <p className="text-lg">
                  A simple, powerful plan for strategic leadership.
                </p>
              </StaggeredAnimation>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-brand-off-white">
        <div id="blog-preview" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                From the Blog
              </h1>
            </StaggeredAnimation>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(0, 2).map((post) => (
              <div
                key={post.slug}
                className="bg-white p-6 rounded-3xl shadow-md"
              >
                <StaggeredAnimation>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-brand-gold hover:underline"
                  >
                    Read More &rarr;
                  </Link>
                </StaggeredAnimation>
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
        <div id="quiz" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                What's Your Leadership Style?
              </h1>
            </StaggeredAnimation>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
            <Quiz />
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection className="bg-gradient-gray-100">
        <div id="book-now" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Ready to Start?
              </h1>
            </StaggeredAnimation>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </StickyScrollSection>
    </>
  );
}
