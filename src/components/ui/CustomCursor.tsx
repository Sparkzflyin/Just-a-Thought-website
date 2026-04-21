"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const getDotSize = (clicking: boolean, hovering: boolean) => {
  if (clicking) return 8;
  if (hovering) return 16;
  return 12;
};

const getRingSize = (clicking: boolean, hovering: boolean) => {
  if (clicking) return 32;
  if (hovering) return 52;
  return 40;
};

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [onDark, setOnDark] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40 });
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(el?.closest("a, button") != null);
      setOnDark(el?.closest(".bg-brand-dark") != null);
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [mouseX, mouseY]);

  const color = onDark ? "white" : "black";
  const dotSize = getDotSize(clicking, hovering);
  const ringSize = getRingSize(clicking, hovering);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block rounded-full"
        style={{
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
          opacity: visible ? 1 : 0,
          width: dotSize,
          height: dotSize,
          backgroundColor: color,
          transition:
            "width 0.15s ease, height 0.15s ease, opacity 0.2s ease, background-color 0.2s ease",
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block rounded-full"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
          opacity: visible ? 0.7 : 0,
          width: ringSize,
          height: ringSize,
          border: `2px solid ${color}`,
          transition:
            "width 0.2s ease, height 0.2s ease, opacity 0.2s ease, border-color 0.2s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
