"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Leaders Coached" },
  { value: 8, suffix: " wks", label: "Average Time to Clarity" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 93, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatCounter = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.12, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <span className="text-5xl md:text-6xl font-bold text-brand-gold font-sans">
          <Counter value={stat.value} suffix={stat.suffix} />
        </span>
        <span className="text-sm text-gray-400 mt-2 tracking-wide uppercase">
          {stat.label}
        </span>
      </motion.div>
    ))}
  </div>
);

export default StatCounter;
