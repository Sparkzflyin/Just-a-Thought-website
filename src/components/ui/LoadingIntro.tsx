"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LoadingIntro = () => {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    // One-shot mount effect. Reading sessionStorage and picking the initial
    // visibility must happen client-side; the setState here runs once.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      if (sessionStorage.getItem("introShown")) {
        setVisible(false);
        return;
      }
      sessionStorage.setItem("introShown", "true");
    } catch {
      setVisible(false);
      return;
    }

    setVisible(true);
    /* eslint-enable react-hooks/set-state-in-effect */
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (visible === null) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-brand-dark"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-56 md:w-72"
          >
            <Image
              src="/logo.svg"
              alt="Just a Thought"
              width={300}
              height={100}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingIntro;
