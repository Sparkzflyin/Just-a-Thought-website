"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partingThoughts = [
  "The most effective way to lead is to listen.",
  "Clarity is the result of subtraction, not addition.",
  "True growth begins at the end of your comfort zone.",
  "The greatest leaders are the greatest learners.",
  "Your focus determines your reality.",
];

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitIntentModalShown")) {
        setShowModal(true);
        sessionStorage.setItem("exitIntentModalShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const thought =
    partingThoughts[Math.floor(Math.random() * partingThoughts.length)];

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md mx-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">A Parting Thought...</h2>
            <p className="text-lg mb-6">"{thought}"</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-brand-gold text-white font-bold py-2 px-6 rounded-full text-lg hover:bg-opacity-80 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
