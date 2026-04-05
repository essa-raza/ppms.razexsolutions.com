"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Complete Module Overview
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
        >
          Every Feature Your{" "}
          <span className="gradient-text">Station Needs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          PPMS is built from the ground up for how Pakistan&apos;s fuel stations
          actually operate — from the first nozzle reading of the morning shift
          to the final profit report at close.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
          >
            Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center gap-2 glass border border-white/10 hover:border-amber-500/30 text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            View Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
