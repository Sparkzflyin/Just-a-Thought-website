"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollSection = ({
  children,
  className,
  ambientNumber,
  ambientLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ambientNumber?: string;
  ambientLabel?: string;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isDark = className?.includes("brand-dark") ?? false;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { scale: 0.9, opacity: 0.5 },
        {
          scale: 1.015,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: sectionRef.current,
            pinSpacing: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="h-[200vh] relative" data-sticky-trigger>
      <div
        ref={sectionRef}
        className={`h-dvh w-full flex items-center justify-center relative overflow-hidden ${
          className || ""
        }`}
      >
        {ambientNumber && (
          <span
            aria-hidden="true"
            className={`hidden xl:block absolute left-[3%] top-1/2 -translate-y-1/2 text-[300px] font-bold font-serif leading-none pointer-events-none select-none ${
              isDark
                ? "text-brand-off-white opacity-[0.06]"
                : "text-brand-blue opacity-[0.05]"
            }`}
          >
            {ambientNumber}
          </span>
        )}
        {ambientLabel && (
          <span
            aria-hidden="true"
            className={`hidden xl:block absolute right-[2%] top-1/2 -translate-y-1/2 text-xs tracking-[0.4em] uppercase pointer-events-none select-none [writing-mode:vertical-rl] rotate-180 ${
              isDark
                ? "text-brand-off-white opacity-30"
                : "text-brand-blue opacity-30"
            }`}
          >
            {ambientLabel}
          </span>
        )}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
