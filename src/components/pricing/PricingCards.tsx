"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const plans = [
  {
    name: "Discovery Call",
    price: "Free",
    period: null,
    description:
      "Start here. A complimentary session to see if we're the right fit.",
    features: [
      "30-minute consultation",
      "Leadership style overview",
      "Personalized roadmap preview",
    ],
    cta: "Book Your Call",
    href: "/#book-now",
    featured: false,
  },
  {
    name: "The Rewire Lab",
    price: "$1,200",
    period: "/program",
    description:
      "Our core 8-week program for individuals ready to lead with clarity.",
    features: [
      "8 weekly 1-on-1 sessions",
      "The Subtraction Framework",
      "Custom leadership playbook",
      "Async email support",
      "Post-program integration call",
    ],
    cta: "Start Your Journey",
    href: "/#book-now",
    featured: true,
  },
  {
    name: "Core Optimization",
    price: "Custom",
    period: null,
    description:
      "Tailored programs for teams and organizations ready to transform their culture.",
    features: [
      "Team workshops & offsites",
      "Executive coaching package",
      "Cultural audit & report",
      "Ongoing advisory retainer",
    ],
    cta: "Get a Quote",
    href: "/#book-now",
    featured: false,
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0"
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PricingCards = () => (
  <motion.div
    className="grid md:grid-cols-3 gap-8 items-start"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {plans.map((plan) => (
      <motion.div
        key={plan.name}
        variants={cardVariants}
        className={`rounded-3xl shadow-md p-8 relative ${
          plan.featured
            ? "bg-brand-dark text-brand-off-white ring-2 ring-brand-gold md:scale-105"
            : "bg-white"
        }`}
      >
        {plan.featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-brand-gold text-white text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
              Most Popular
            </span>
          </div>
        )}

        <h3
          className={`text-2xl font-bold mb-2 ${plan.featured ? "text-brand-off-white" : ""}`}
        >
          {plan.name}
        </h3>

        <div className="flex items-end gap-1 mb-3">
          <span
            className={`text-4xl font-bold ${plan.featured ? "text-brand-gold" : "text-brand-blue"}`}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className={`text-sm mb-1 ${plan.featured ? "text-gray-400" : "text-gray-500"}`}
            >
              {plan.period}
            </span>
          )}
        </div>

        <p
          className={`mb-6 ${plan.featured ? "text-gray-300" : "text-gray-600"}`}
        >
          {plan.description}
        </p>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckIcon />
              <span className={plan.featured ? "text-gray-200" : ""}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={plan.href}
          className={`block text-center font-bold py-3 px-6 rounded-md transition-colors duration-300 ${
            plan.featured
              ? "bg-brand-gold text-white hover:bg-opacity-80"
              : "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white"
          }`}
        >
          {plan.cta}
        </Link>
      </motion.div>
    ))}
  </motion.div>
);

export default PricingCards;
