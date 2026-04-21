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
import Testimonials from "@/components/testimonials/Testimonials";
import PricingCards from "@/components/pricing/PricingCards";
import WordReveal from "@/components/framermotion/WordReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import StatCounter from "@/components/ui/StatCounter";
import Marquee from "@/components/ui/Marquee";
import DualMarquee from "@/components/ui/DualMarquee";
import { scrollToSection } from "@/utils/scroll";

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
    // One-shot read of client-only state on mount. Safe: runs once and doesn't
    // trigger cascading renders.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const style = localStorage.getItem("leadershipStyle");
      if (style) {
        setLeadershipStyle(style);
      }
    } catch {
      // localStorage unavailable (private browsing or SSR)
    }

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          scrollToSection(element);
          setTargetId(null);
        }, 100);
      }
    }
  }, [targetId, setTargetId]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is The Subtraction Framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Subtraction Framework is Just a Thought's core coaching methodology. It's the idea that lasting leadership growth comes from removing mental clutter, broken processes, and limiting beliefs — not from adding more tools, tactics, or complexity.",
        },
      },
      {
        "@type": "Question",
        name: "How long is The Rewire Lab program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Rewire Lab is an 8-week 1-on-1 program. It includes weekly sessions, the Subtraction Framework, a custom leadership playbook, async email support, and a post-program integration call.",
        },
      },
      {
        "@type": "Question",
        name: "Who is executive coaching for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our coaching is designed for leaders feeling stagnant or burnt out, founders scaling their team and impact, managers navigating complexity and change, and organizations seeking stronger culture and clearer strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Is the discovery call free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Discovery Call is a complimentary 30-minute consultation to see if we're the right fit before committing to a program.",
        },
      },
      {
        "@type": "Question",
        name: "How much does The Rewire Lab cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Rewire Lab is $1,200 for the full 8-week program. Core Optimization engagements for teams and organizations are priced custom based on scope.",
        },
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Executive and Leadership Coaching",
    provider: {
      "@type": "Organization",
      name: "Just a Thought",
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coaching Programs",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Discovery Call",
          description:
            "Complimentary 30-minute consultation to see if we're the right fit.",
          price: "0",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "The Rewire Lab",
          description:
            "Core 8-week 1-on-1 program including weekly sessions, the Subtraction Framework, custom leadership playbook, async email support, and a post-program integration call.",
          price: "1200",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Core Optimization",
          description:
            "Custom engagements for teams and organizations: workshops, offsites, executive coaching packages, cultural audits, and ongoing advisory retainers.",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Custom pricing based on scope",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Hero Section (No sticky scroll) */}
      <FadeIn>
        <section
          id="home"
          className="bg-animated-gradient text-center py-20 md:py-32 h-dvh flex items-center justify-center relative overflow-hidden"
        >
          <div className="grain-overlay absolute inset-0 pointer-events-none z-[1]" />
          <div className="container mx-auto px-4 relative z-10">
            <StaggeredAnimation>
              {leadershipStyle && (
                <p className="text-3xl md:text-5xl text-brand-off-white mb-6">
                  {greeting}, {leadershipStyle} Leader.
                </p>
              )}
              <h1 className="text-6xl md:text-8xl lg:text-[220px] font-bold font-sans text-brand-off-white mb-8 leading-[0.9]">
                <WordReveal
                  text="Lead with Purpose"
                  className="w-full justify-center"
                />
              </h1>
              <p className="text-xl md:text-[50px] max-w-3xl mx-auto text-brand-off-white mb-16">
                We help you clear the noise and
                <br />
                <span className="block mt-4">lead with confidence.</span>
              </p>
              <MagneticButton>
                <Link
                  href="/#book-now"
                  className="bg-animated-gradient-inverse text-white font-bold py-4 px-10 rounded-md text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  Start Your Journey
                  <svg
                    className="w-5 h-5"
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
              </MagneticButton>
            </StaggeredAnimation>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>
      </FadeIn>

      <DualMarquee
        className="bg-brand-blue py-2"
        topItems={[
          "Lead with Purpose",
          "Subtract the Noise",
          "Clarity over Complexity",
          "Coach. Rewire. Grow.",
        ]}
        bottomItems={[
          "Executive Coaching",
          "Leadership Development",
          "Cultural Strategy",
          "Just a Thought",
        ]}
        topClassName="text-brand-off-white"
        bottomClassName="text-brand-gold"
      />

      <StickyScrollSection
        className="bg-white"
        ambientNumber="01"
        ambientLabel="For Teams"
      >
        <div id="organizations" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                For Your Team: Build a Stronger Culture
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Empower your team and your business by focusing on what truly
                matters.
              </p>
            </StaggeredAnimation>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-[1fr_1.35fr] gap-8 items-stretch">
              <div className="flex flex-col justify-center">
                <StaggeredAnimation>
                  <h2 className="text-3xl font-bold text-center mb-8">
                    How We Help Your Organization Grow
                  </h2>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3">
                      Clear, Strategic Leadership
                    </h3>
                    <p className="text-lg leading-relaxed">
                      We&apos;ll help you develop a clear and simple roadmap,
                      turning effective leadership into a daily practice, not an
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
              <div className="relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/stock-photos/autumn1.jpg"
                  alt="A team collaborating in a warm, inviting setting."
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="mt-16">
              <StaggeredAnimation>
                <h2 className="text-3xl font-bold text-center mb-8">
                  What We Offer
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Executive Workshops
                    </h3>
                    <p className="text-lg">
                      Intensive sessions designed to refine leadership skills.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Team Cohesion</h3>
                    <p className="text-lg">
                      Build trust and improve collaboration with targeted
                      programs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Cultural Audits</h3>
                    <p className="text-lg">
                      Gain insight into your team&apos;s dynamics and identify
                      growth areas.
                    </p>
                  </div>
                </div>
              </StaggeredAnimation>
            </div>
            <div className="mt-16">
              <StaggeredAnimation>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Trusted By
                </h2>
                <div className="flex justify-center items-center space-x-8">
                  <p className="font-bold text-gray-500">Placeholder Co.</p>
                  <p className="font-bold text-gray-500">Innovate Inc.</p>
                  <p className="font-bold text-gray-500">Future Forward</p>
                </div>
              </StaggeredAnimation>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection
        className="bg-gray-100"
        ambientNumber="02"
        ambientLabel="For You"
      >
        <div id="individuals" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                For You: Find Your Focus
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Take control of your growth and become the leader you&apos;re
                meant to be.
              </p>
            </StaggeredAnimation>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-[1.35fr_1fr] gap-8 items-stretch">
              <div className="relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/stock-photos/stock4.jpg"
                  alt="An individual leader finding focus in a peaceful environment."
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-col justify-center">
                <StaggeredAnimation>
                  <h2 className="text-3xl font-bold text-center mb-8">
                    <WordReveal text="Undo. Unthink. Unlearn." />
                  </h2>
                  <p className="text-lg leading-relaxed">
                    My approach is built on subtraction. I&apos;ll help you
                    clear the mental clutter that&apos;s holding you back, so
                    you can unlock what&apos;s already there.
                  </p>
                </StaggeredAnimation>
              </div>
            </div>
            <div className="mt-16">
              <StaggeredAnimation>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Your Journey With Me
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">1. Discovery</h3>
                    <p className="text-lg">
                      A complimentary call so we can see if we&apos;re the right
                      fit.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">2. The Rewire</h3>
                    <p className="text-lg">
                      The core program where we deconstruct and rebuild your
                      habits together.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">3. Integration</h3>
                    <p className="text-lg">
                      Ongoing support from me to make sure the change sticks.
                    </p>
                  </div>
                </div>
              </StaggeredAnimation>
            </div>
            <div className="mt-16 text-center">
              <StaggeredAnimation>
                <h2 className="text-3xl font-bold mb-8">Who This Is For</h2>
                <ul className="list-none text-lg inline-block text-left">
                  <li className="mb-2">
                    <CheckIcon />
                    Leaders feeling stagnant or burnt out.
                  </li>
                  <li className="mb-2">
                    <CheckIcon />
                    Founders scaling their team and impact.
                  </li>
                  <li className="mb-2">
                    <CheckIcon />
                    Managers navigating complexity and change.
                  </li>
                </ul>
              </StaggeredAnimation>
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection
        className="bg-white"
        ambientNumber="03"
        ambientLabel="Philosophy"
      >
        <div id="about" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                <WordReveal text="The Power of Subtraction" />
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Our core philosophy is simple: the path to clarity and growth
                isn&apos;t about adding more, but subtracting what&apos;s in the
                way. Below, click on a card to see how this works in practice.
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
              <PhilosophyCard
                frontText="Cluttered Thought: I need to have all the answers to be a good leader."
                backText="Subtracted Principle: Lead with inquiry and trust your team's expertise."
              />
              <PhilosophyCard
                frontText="Cluttered Thought: Success is measured by constant, visible activity."
                backText="Subtracted Principle: Value deep work and intentional pauses for greater impact."
              />
            </div>
          </div>
        </div>
      </StickyScrollSection>

      <div className="bg-brand-off-white py-8 border-y border-brand-blue/10">
        <Marquee
          items={["Subtract", "Clarify", "Unlearn", "Focus", "Grow", "Lead"]}
          className="text-brand-blue/25"
        />
      </div>

      <StickyScrollSection
        className="bg-gray-100"
        ambientNumber="04"
        ambientLabel="Programs"
      >
        <div id="rewire-programs" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Upcoming Programs
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Find a program that&apos;s right for you.
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

      <StickyScrollSection
        className="bg-white"
        ambientNumber="05"
        ambientLabel="Testimonials"
      >
        <div id="testimonials" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Real Leaders, Real Results
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Hear from the people who&apos;ve done the work.
              </p>
            </StaggeredAnimation>
          </div>
          <Testimonials />
        </div>
      </StickyScrollSection>

      <StickyScrollSection
        className="bg-brand-dark"
        ambientNumber="06"
        ambientLabel="By the Numbers"
      >
        <div id="stats" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-brand-off-white">
                By the Numbers
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-off-white/70">
                Results that speak for themselves.
              </p>
            </StaggeredAnimation>
          </div>
          <StatCounter />
        </div>
      </StickyScrollSection>

      <StickyScrollSection
        className="bg-gray-100"
        ambientNumber="07"
        ambientLabel="Pricing"
      >
        <div id="pricing" className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                Choose the path that fits where you are right now.
              </p>
            </StaggeredAnimation>
          </div>
          <PricingCards />
        </div>
      </StickyScrollSection>

      <StickyScrollSection
        className="bg-brand-off-white"
        ambientNumber="08"
        ambientLabel="From the Blog"
      >
        <div id="blog-preview" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                From the Blog
              </h2>
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

      <div className="bg-brand-off-white py-8 border-y border-brand-blue/10">
        <Marquee
          items={[
            "Purpose",
            "Clarity",
            "Trust",
            "Agility",
            "Vision",
            "Intention",
          ]}
          className="text-brand-blue/25"
        />
      </div>

      <StickyScrollSection
        className="bg-white"
        ambientNumber="09"
        ambientLabel="Leadership Quiz"
      >
        <div id="quiz" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                What&apos;s Your Leadership Style?
              </h2>
            </StaggeredAnimation>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
            <Quiz />
          </div>
        </div>
      </StickyScrollSection>

      <StickyScrollSection
        className="bg-gradient-gray-100"
        ambientNumber="10"
        ambientLabel="Book Now"
      >
        <div id="book-now" className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <StaggeredAnimation>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Ready to Start?
              </h2>
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
