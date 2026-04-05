"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Raza",
    role: "PSO Dealer & Station Owner",
    location: "Lahore, Pakistan",
    avatar: "A",
    color: "from-amber-400 to-orange-500",
    text: "Before PPMS, reconciling daily sales was a nightmare. Now our shift close takes 10 minutes and the daily report is generated automatically. The multi-station dashboard has changed how we run the business.",
    rating: 5,
    highlight: "Daily close now takes 10 minutes",
  },
  {
    name: "Tariq Mehmood",
    role: "Shell Franchise Manager",
    location: "Karachi, Pakistan",
    avatar: "T",
    color: "from-blue-400 to-cyan-500",
    text: "The role-based access is exactly what a multi-station franchise needs. My accountant sees only the financials, operators see only their shift — and I get the full picture at head office. Excellent.",
    rating: 5,
    highlight: "Perfect role separation across 3 stations",
  },
  {
    name: "Nadia Siddiqui",
    role: "Head of Finance, Caltex Operator",
    location: "Islamabad, Pakistan",
    avatar: "N",
    color: "from-purple-400 to-pink-500",
    text: "The ledger and payment tracking is incredibly detailed. Supplier balances, customer credit limits, expenses — all in one place. The low-stock alerts alone have saved us thousands in emergency deliveries.",
    rating: 5,
    highlight: "Saved thousands with smart stock alerts",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0d1528]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Trusted by Operators
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            What Station Owners{" "}
            <span className="gradient-text">Say About PPMS</span>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-amber-500/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex glass-amber rounded-full px-3 py-1 mb-4 self-start">
                <span className="text-amber-400 text-xs font-semibold">
                  ✓ {t.highlight}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                  <p className="text-gray-600 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
