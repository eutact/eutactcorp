"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/70 backdrop-blur border-b border-white/10"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">EuTACT</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#solutions" className="hover:text-white">
            Solutions
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-gray-300 text-sm font-medium bg-[#09090B]/95 border-t border-white/10">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-white"
          >
            Features
          </a>
          <a
            href="#solutions"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-white"
          >
            Solutions
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
