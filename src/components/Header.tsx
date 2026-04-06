"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "@/context/ScrollContext";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#organizations", label: "Organizations" },
  { href: "/#individuals", label: "Individuals" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/values", label: "Clarify Your Values" },
  { href: "/#quiz", label: "Leadership Quiz" },
  { href: "/#rewire-programs", label: "Upcoming Rewire Programs" },
];

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const router = useRouter();
  const pathname = usePathname();
  const { setTargetId } = useScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);
      if (pathname === "/") {
        // Already on the homepage, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Not on the homepage, set target and navigate
        setTargetId(targetId);
        router.push("/");
      }
      setIsMenuOpen(false);
    } else {
      // It's a regular link, just navigate
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
        setIsMenuOpen(false); // Close menu on scroll
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hidden) {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [hidden, controls]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="visible"
      animate={controls}
      transition={{ duration: 0.3 }}
      className="bg-brand-dark shadow-md sticky top-0 z-50"
    >
      <div className="flex items-center justify-between py-1 px-4 sm:px-6 lg:px-8 h-24">
        <div className="h-full relative w-48 md:w-80">
          <Link href="/" className="block h-full w-full relative">
            <Image
              src="/logo-latest.png"
              alt="Just a Thought Logo"
              fill
              className="object-contain"
              loading="eager"
              sizes="(max-width: 768px) 192px, 320px"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-off-white hover:text-brand-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#book-now"
            onClick={(e) => handleNavClick(e, "/#book-now")}
            className="bg-brand-gold text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-off-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-0 right-0 h-screen w-3/4 bg-brand-dark shadow-lg p-8"
        >
          <nav>
            <ul className="flex flex-col space-y-8 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-brand-off-white hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#book-now"
                  onClick={(e) => handleNavClick(e, "/#book-now")}
                  className="bg-brand-gold text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300 inline-block text-center"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </motion.header>
  );
};

export default Header;
