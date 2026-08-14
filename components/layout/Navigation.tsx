"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { id: "arrival", label: "Arrival" },
  { id: "identity", label: "Identity" },
  { id: "vocal-stage", label: "Vocal" },
  { id: "studio", label: "Studio" },
  { id: "contact", label: "Exchange" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("arrival");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section Intersection Tracking
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
      >
        <div className="glass-panel pointer-events-auto flex items-center justify-between gap-6 rounded-full px-5 py-2.5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 max-w-4xl w-full">
          
          {/* Brand Monogram */}
          <button
            onClick={() => scrollToSection("arrival")}
            className="group flex items-center gap-2.5 focus-visible:outline-none"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-accent-cyan/40 bg-accent-cyan/10 font-mono-code text-[11px] font-bold text-accent-cyan transition-colors group-hover:border-accent-cyan group-hover:bg-accent-cyan/20">
              ST
            </div>
            <div className="hidden sm:flex flex-col text-left font-mono-code text-[10px]">
              <span className="font-semibold text-text-primary group-hover:text-white transition-colors">
                SHIVANI THAKKAR
              </span>
              <span className="text-text-muted flex items-center gap-1 text-[9px]">
                <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM // SOUND
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 font-mono-code text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-full px-4 py-1.5 transition-colors duration-300 ${
                    isActive ? "text-text-primary font-medium" : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">// {item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono-code text-xs text-text-primary"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-30 md:hidden"
          >
            <div className="glass-panel rounded-2xl p-6 backdrop-blur-2xl border-white/10 bg-surface/95 shadow-2xl">
              <nav className="flex flex-col gap-3 font-mono-code text-sm">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between rounded-xl p-3 text-left transition-colors ${
                      activeSection === item.id
                        ? "bg-accent-indigo/20 text-text-primary border border-accent-indigo/30"
                        : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                    }`}
                  >
                    <span>// {item.label}</span>
                    <span className="text-xs text-text-muted">→</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
