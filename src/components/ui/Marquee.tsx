"use client";

import { useEffect, useRef, useState } from "react";

const Marquee = ({
  items,
  className = "",
  reverse = false,
  separator = "·",
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  separator?: string;
}) => {
  const sep = ` ${separator} `;
  const animationClass = reverse
    ? "animate-marquee-reverse"
    : "animate-marquee";

  const containerRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLUListElement>(null);
  const [repeats, setRepeats] = useState(2);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const sequence = sequenceRef.current;
      if (!container || !sequence) return;
      const containerWidth = container.offsetWidth;
      const sequenceWidth = sequence.scrollWidth;
      if (sequenceWidth === 0 || containerWidth === 0) return;
      const batchWidth = sequenceWidth / repeats;
      if (batchWidth === 0) return;
      const needed = Math.max(2, Math.ceil(containerWidth / batchWidth) + 1);
      if (needed !== repeats) setRepeats(needed);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, repeats]);

  const buildBatches = (prefix: string) =>
    Array.from({ length: repeats }).flatMap((_, batchIdx) =>
      items.map((item, i) => (
        <li key={`${prefix}-${batchIdx}-${i}`} className="mx-6">
          {item}
          <span className="ml-12 inline-block">{sep}</span>
        </li>
      )),
    );

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden py-6 select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max ${animationClass} whitespace-nowrap text-sm md:text-base tracking-[0.3em] uppercase font-bold`}
      >
        <ul ref={sequenceRef} className="flex shrink-0 items-center">
          {buildBatches("a")}
        </ul>
        <ul className="flex shrink-0 items-center" aria-hidden="true">
          {buildBatches("b")}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
