"use client";

import { useRef, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with JAT completely shifted how I show up as a leader. The subtraction framework gave me clarity I didn't know I was missing.",
    name: "Marcus Williams",
    title: "VP of Operations, TechForward",
    initials: "MW",
  },
  {
    quote:
      "The Rewire Lab was a turning point for our entire leadership team. We stopped adding complexity and started removing what wasn't working.",
    name: "Sarah Chen",
    title: "Founder, Clarity Co.",
    initials: "SC",
  },
  {
    quote:
      "I was burnt out and stagnant. After going through the Discovery process, I finally felt like a leader again — intentional and grounded.",
    name: "James Okafor",
    title: "Director of People, Innova Group",
    initials: "JO",
  },
  {
    quote:
      "Six months in and I can't believe how different my team dynamic feels. The coaching stripped away the noise and left us with something real.",
    name: "Priya Nair",
    title: "COO, Meridian Health",
    initials: "PN",
  },
  {
    quote:
      "I came in skeptical. I left with a completely new lens on leadership. Simple, honest, and transformative work.",
    name: "David Rourke",
    title: "Managing Director, Atlas Group",
    initials: "DR",
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-brand-gold fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      if (trackRef.current) {
        setDragWidth(
          trackRef.current.scrollWidth - trackRef.current.offsetWidth,
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          ref={trackRef}
          className="flex gap-6 pb-4"
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          whileTap={{ cursor: "grabbing" }}
          onDrag={(_, info) => {
            const cardWidth =
              (trackRef.current?.scrollWidth ?? 0) / testimonials.length;
            const index = Math.round(Math.abs(info.offset.x) / cardWidth);
            setActiveIndex(Math.min(index, testimonials.length - 1));
          }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-md relative overflow-hidden flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[420px]"
            >
              <span className="absolute top-4 left-5 text-7xl text-brand-gold font-serif leading-none opacity-20 select-none">
                &ldquo;
              </span>
              <StarRating />
              <p className="text-lg leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-blue">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Drag dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`rounded-full bg-brand-gold transition-all duration-300 ${
              i === activeIndex ? "w-6 h-2" : "w-2 h-2 opacity-30"
            }`}
          />
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-3 tracking-wide">
        Drag to explore
      </p>
    </div>
  );
};

export default Testimonials;
