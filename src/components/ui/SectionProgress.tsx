"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { scrollToId } from "@/utils/scroll";

const sections = [
  { id: "home", label: "Home" },
  { id: "organizations", label: "Organizations" },
  { id: "individuals", label: "Individuals" },
  { id: "about", label: "Philosophy" },
  { id: "testimonials", label: "Testimonials" },
  { id: "stats", label: "By the Numbers" },
  { id: "pricing", label: "Pricing" },
  { id: "blog-preview", label: "Blog" },
  { id: "quiz", label: "Leadership Quiz" },
  { id: "book-now", label: "Book Now" },
];

const SectionProgress = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;

      sections.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      setActiveIndex(closest);
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <motion.div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {sections.map((section, i) => (
        <div
          key={section.id}
          className="relative group flex items-center justify-end gap-2"
        >
          <span className="absolute right-6 bg-brand-dark text-brand-off-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {section.label}
          </span>
          <button
            onClick={() => scrollToId(section.id)}
            aria-label={`Go to ${section.label}`}
            className={`rounded-full bg-brand-gold transition-all duration-200 ${
              i === activeIndex
                ? "w-2.5 h-2.5 opacity-100"
                : "w-1.5 h-1.5 opacity-30 hover:opacity-60"
            }`}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default SectionProgress;
