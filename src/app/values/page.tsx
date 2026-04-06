"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/framermotion/FadeIn";

const allValues = [
  "Integrity",
  "Innovation",
  "Empathy",
  "Decisiveness",
  "Resilience",
  "Collaboration",
  "Accountability",
  "Courage",
  "Authenticity",
  "Humility",
  "Curiosity",
  "Passion",
];

const valueDescriptions: Record<string, string> = {
  Integrity: "A commitment to honesty and strong moral principles.",
  Innovation: "A drive to create new and better ways of doing things.",
  Empathy: "The ability to understand and share the feelings of another.",
  Decisiveness: "The ability to make decisions quickly and effectively.",
  Resilience: "The capacity to recover quickly from difficulties; toughness.",
  Collaboration:
    "The action of working with someone to produce or create something.",
  Accountability: "An acceptance of responsibility for one's actions.",
  Courage: "The ability to do something that frightens one; bravery.",
  Authenticity: "The quality of being of undisputed origin; genuine.",
  Humility: "A modest or low view of one's own importance.",
  Curiosity: "A strong desire to know or learn something.",
  Passion: "An intense desire or enthusiasm for something.",
};

const ValuesClarifierPage = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else if (selectedValues.length < 5) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <div
        className="py-16 md:py-24 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/stock-photos/autumn1.jpg)" }}
      >
        <div className="bg-black bg-opacity-50 py-10">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">
              What Are Your Core Leadership Values?
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Select up to 5 values that resonate most with you.
            </p>
          </FadeIn>
        </div>
      </div>
      <div className="container mx-auto py-16 text-center">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {allValues.map((value) => (
                  <motion.button
                    key={value}
                    variants={itemVariants}
                    onClick={() => toggleValue(value)}
                    className={`p-4 rounded-lg text-lg font-bold transition-colors ${
                      selectedValues.includes(value)
                        ? "bg-brand-gold text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {value}
                  </motion.button>
                ))}
              </motion.div>
              {selectedValues.length > 0 && (
                <motion.button
                  onClick={() => setIsCompleted(true)}
                  className="mt-8 bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Show My Values
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className="text-4xl font-bold mb-8">
                Your Core Leadership Values
              </h1>
              <motion.div
                className="grid grid-cols-1 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {selectedValues.map((value) => (
                  <motion.div
                    key={value}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-lg shadow-md text-left"
                  >
                    <h2 className="text-2xl font-bold text-brand-gold mb-2">
                      {value}
                    </h2>
                    <p className="text-lg">{valueDescriptions[value]}</p>
                  </motion.div>
                ))}
              </motion.div>
              <button
                onClick={() => {
                  setIsCompleted(false);
                  setSelectedValues([]);
                }}
                className="mt-8 bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-colors"
              >
                Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ValuesClarifierPage;
