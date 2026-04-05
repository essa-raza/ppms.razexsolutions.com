"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Fuel, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: t.nav.features },
    { href: "/about",    label: t.nav.about },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/faq",      label: t.nav.faq },
    { href: "/contact",  label: t.nav.contact },
  ];

  const toggleLang = () => setLang(lang === "en" ? "ur" : "en");

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — always LTR */}
          <a href="/" className="flex items-center gap-2.5 group ltr-force">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 glow-amber-sm">
              <Fuel className="w-5 h-5 text-[#0a0f1e]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-lg tracking-tight ltr-force" style={{ fontFamily: "Inter, sans-serif" }}>PPMS</span>
              <span className="text-[10px] text-amber-500 font-medium tracking-widest uppercase ltr-force" style={{ fontFamily: "Inter, sans-serif" }}>
                Razex Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-amber-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="lang-toggle ltr-force"
              aria-label="Switch language"
              style={{ fontFamily: lang === "ur" ? "'Noto Nastaliq Urdu', serif" : "Inter, sans-serif" }}
            >
              <span className={lang === "en" ? "lang-active" : "text-gray-400"} style={{ fontFamily: "Inter, sans-serif" }}>EN</span>
              <span className="text-gray-600 mx-0.5" style={{ fontFamily: "Inter, sans-serif" }}>|</span>
              <span className={lang === "ur" ? "lang-active" : "text-gray-400"} style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>اردو</span>
            </button>

            <a
              href="/portal"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2"
            >
              {t.nav.signIn}
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <Zap className="w-4 h-4" />
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="lang-toggle ltr-force text-xs"
              aria-label="Switch language"
            >
              <span className={lang === "en" ? "lang-active" : "text-gray-400"} style={{ fontFamily: "Inter, sans-serif" }}>EN</span>
              <span className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>|</span>
              <span className={lang === "ur" ? "lang-active" : "text-gray-400"} style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>اردو</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0d1528] border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-amber-400 font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5 mt-2 flex flex-col gap-2">
                <a
                  href="/portal"
                  className="text-center py-3 text-gray-400 hover:text-white font-medium transition-colors"
                >
                  {t.nav.signIn}
                </a>
                <a
                  href="/contact"
                  className="text-center bg-amber-500 text-[#0a0f1e] font-semibold py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  {t.nav.getStartedFree}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
