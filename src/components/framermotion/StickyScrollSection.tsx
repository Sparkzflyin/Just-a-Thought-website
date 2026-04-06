"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        scale: 0.9,
        opacity: 0.5,
      },
      {
        scale: 1.015,
        opacity: 1,
        ease: "power1.in",
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
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="h-[150vh] relative">
      <div
        ref={sectionRef}
        className={`h-screen w-full flex items-center justify-center ${
          className || ""
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
