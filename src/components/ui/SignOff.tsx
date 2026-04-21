"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getFarewell = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Have a lovely morning";
  if (hour < 18) return "Have a lovely afternoon";
  return "Have a lovely evening";
};

const messages = [
  "Thanks for spending time here. Whatever brought you by, I hope you leave with one thought worth keeping.",
  "Glad you stopped in. Leading well is quiet work most of the time — thanks for making room for a few of these thoughts today.",
  "Wherever you are in the day, I hope something here gave you a clearer breath. Take what's useful, leave the rest.",
  "If one line here stayed with you, that's enough. Come back whenever you need another.",
  "I'm rooting for you — whichever kind of leader you're becoming. Go gently today, and ask one good question of yourself.",
];

const SignOff = () => {
  const [farewell, setFarewell] = useState("");
  const [messageIndex, setMessageIndex] = useState<number | null>(null);

  useEffect(() => {
    // One-shot mount effect. Time-of-day and storage reads are client-only.
    /* eslint-disable react-hooks/set-state-in-effect */
    setFarewell(getFarewell());

    try {
      // Same session (tab still open): keep the message stable across nav.
      if (sessionStorage.getItem("signOffShown")) {
        const current = parseInt(
          localStorage.getItem("signOffIndex") ?? "0",
          10,
        );
        setMessageIndex(Number.isNaN(current) ? 0 : current % messages.length);
        return;
      }

      // New session: advance to the next message and remember it.
      const stored = localStorage.getItem("signOffIndex");
      const next =
        stored !== null ? (parseInt(stored, 10) + 1) % messages.length : 0;
      const safeNext = Number.isNaN(next) ? 0 : next;
      setMessageIndex(safeNext);
      localStorage.setItem("signOffIndex", String(safeNext));
      sessionStorage.setItem("signOffShown", "true");
    } catch {
      // Storage unavailable (private mode): always show the first one.
      setMessageIndex(0);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  return (
    <section className="bg-brand-off-white py-24 md:py-32 relative overflow-hidden">
      {messageIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-2xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-10">
            P.S.
          </p>
          <p className="text-2xl md:text-3xl font-serif leading-[1.5] mb-10 text-brand-brown">
            {messages[messageIndex]}
          </p>
          {farewell && (
            <p className="text-lg text-gray-500 mb-8">{farewell}.</p>
          )}
          <p className="text-3xl md:text-4xl font-serif italic text-brand-blue">
            — Autumn
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default SignOff;
