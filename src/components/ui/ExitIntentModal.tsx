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

const getFarewell = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Have a lovely morning";
  if (hour < 18) return "Have a lovely afternoon";
  return "Have a lovely evening";
};

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [thought, setThought] = useState(partingThoughts[0]);
  const [farewell, setFarewell] = useState("");

  useEffect(() => {
    // One-shot mount: pick a quote and compute the farewell.
    /* eslint-disable react-hooks/set-state-in-effect, sonarjs/pseudo-random -- picking a non-sensitive quote, one-shot mount effect */
    setThought(
      partingThoughts[Math.floor(Math.random() * partingThoughts.length)],
    );
    setFarewell(getFarewell());
    /* eslint-enable react-hooks/set-state-in-effect, sonarjs/pseudo-random */

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      try {
        if (e.clientY <= 0 && !sessionStorage.getItem("exitIntentModalShown")) {
          setShowModal(true);
          sessionStorage.setItem("exitIntentModalShown", "true");
        }
      } catch {
        // sessionStorage unavailable (private browsing or SSR)
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-brand-off-white p-8 md:p-10 rounded-2xl shadow-2xl text-center max-w-lg w-full"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6">
              Before you go
            </p>
            <p className="text-xl md:text-2xl mb-8 font-serif italic leading-relaxed text-brand-brown">
              &ldquo;{thought}&rdquo;
            </p>
            <p className="text-base mb-2 text-brand-brown">
              Thanks for stopping by.
            </p>
            {farewell && (
              <p className="text-base mb-6 text-gray-600">{farewell}.</p>
            )}
            <p className="text-2xl font-serif italic text-brand-blue mb-8">
              — Autumn
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-brand-gold text-white font-bold py-2 px-8 rounded-full text-base hover:bg-opacity-80 transition-colors"
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
