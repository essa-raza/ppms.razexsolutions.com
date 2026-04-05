"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import HeroDashboard from "@/components/illustrations/HeroDashboard";

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Today's Sales",
    value: "PKR 2,84,500",
    change: "+12.4%",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Fuel,
    label: "Fuel Stock",
    value: "18,420 L",
    change: "Petrol • Diesel • CNG",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Shield,
    label: "Active Shifts",
    value: "4 / 6",
    change: "Stations Online",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: BarChart3,
    label: "Net Profit",
    value: "PKR 38,210",
    change: "+8.2% vs yesterday",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1e]/50 to-[#0a0f1e]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                Fuel Station SaaS Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
            >
              Run Every{" "}
              <span className="gradient-text-amber">Pump.</span>
              <br />
              Own Every{" "}
              <span className="gradient-text">Litre.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              PPMS is the all-in-one SaaS platform for petrol pump operators —
              managing sales, inventory, accounting, payroll, and multi-station
              oversight from a single dashboard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 text-base"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="group flex items-center justify-center gap-2 glass border border-white/10 hover:border-amber-500/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 text-base"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                  <Play className="w-3.5 h-3.5 text-amber-400 ml-0.5" fill="currentColor" />
                </div>
                Watch Demo
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-[#0a0f1e] flex items-center justify-center text-xs font-bold text-[#0a0f1e]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">200+</span> fuel stations
                trust PPMS
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="text-sm text-gray-400">
                <span className="text-amber-400 font-semibold">★ 4.9</span> avg
                rating
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Custom Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block pt-8 pb-12"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />
    </section>
  );
}
