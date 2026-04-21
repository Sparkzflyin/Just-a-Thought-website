"use client";

import { motion, type Variants } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className,
  delay = 0,
}) => (
  <motion.span
    className={className}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delayChildren: delay }}
    style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em" }}
  >
    {text.split(" ").map((word, i) => (
      <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
        <motion.span
          variants={wordVariants}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      </span>
    ))}
  </motion.span>
);

export default WordReveal;
