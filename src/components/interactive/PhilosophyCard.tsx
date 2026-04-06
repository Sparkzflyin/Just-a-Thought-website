"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PhilosophyCard = ({
  frontText,
  backText,
}: {
  frontText: string;
  backText: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipVariants = {
    front: {
      rotateY: 0,
    },
    back: {
      rotateY: 180,
    },
  };

  return (
    <div className="perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-48 transform-style-preserve-3d cursor-pointer"
        variants={flipVariants}
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gray-200 rounded-lg p-6 flex items-center justify-center">
          <p className="text-lg text-center text-gray-700">{frontText}</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden bg-brand-gold rounded-lg p-6 flex items-center justify-center transform rotate-y-180">
          <p className="text-lg text-center text-white font-bold">{backText}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PhilosophyCard;
