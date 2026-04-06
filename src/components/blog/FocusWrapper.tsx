"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FocusWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);

  return (
    <>
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setIsFocusMode(!isFocusMode)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Toggle Focus Mode"
        >
          {isFocusMode ? "👁️" : "✨"}
        </button>
      </div>

      <AnimatePresence>
        {!isFocusMode && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block" // Hide on mobile for a better experience
          >
            {/* Header and Footer will be here */}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="transition-all duration-300">{children}</div>
    </>
  );
};

export default FocusWrapper;
