"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  DashboardIllustration,
  SalesIllustration,
  InventoryIllustration,
  AccountingIllustration,
  PayrollIllustration,
  MultiStationIllustration,
  RBACIllustration,
  ReportsIllustration,
} from "@/components/illustrations/FeatureIllustrations";

const features = [
  {
    Illustration: DashboardIllustration,
    title: "Real-Time Dashboard",
    description: "Live sales totals, net profit, fuel stock levels, and automated alerts — all in one glanceable view.",
    border: "hover:border-amber-500/30",
    glow: "hover:shadow-amber-500/10",
  },
  {
    Illustration: SalesIllustration,
    title: "Sales & Shift Management",
    description: "Track cash and credit fuel sales, nozzle meter readings, and shift reconciliation with difference detection.",
    border: "hover:border-blue-500/30",
    glow: "hover:shadow-blue-500/10",
  },
  {
    Illustration: InventoryIllustration,
    title: "Inventory & Tanker Deliveries",
    description: "Manage tank dip readings, tanker arrivals, fuel stock levels, and evaporation/leakage analysis.",
    border: "hover:border-emerald-500/30",
    glow: "hover:shadow-emerald-500/10",
  },
  {
    Illustration: AccountingIllustration,
    title: "Accounting & Ledgers",
    description: "Full customer and supplier ledgers, receivable/payable payments, expense tracking, and profit analysis.",
    border: "hover:border-purple-500/30",
    glow: "hover:shadow-purple-500/10",
  },
  {
    Illustration: PayrollIllustration,
    title: "Attendance & Payroll",
    description: "Staff attendance check-in/out, manual corrections, payroll run generation, and finalization workflows.",
    border: "hover:border-rose-500/30",
    glow: "hover:shadow-rose-500/10",
  },
  {
    Illustration: MultiStationIllustration,
    title: "Multi-Station Oversight",
    description: "Head-office dashboards spanning all stations, organization-level reporting, and cross-station comparison.",
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-cyan-500/10",
  },
  {
    Illustration: RBACIllustration,
    title: "Role-Based Access Control",
    description: "Granular permission hierarchy — MasterAdmin, HeadOffice, StationAdmin, Manager, Accountant, Operator.",
    border: "hover:border-amber-500/30",
    glow: "hover:shadow-amber-500/10",
  },
  {
    Illustration: ReportsIllustration,
    title: "Reports & Smart Alerts",
    description: "Daily closing, shift variance, stock movement, credit limit warnings, and low-fuel alerts — auto-generated.",
    border: "hover:border-indigo-500/30",
    glow: "hover:shadow-indigo-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/2 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Everything You Need
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Built for How{" "}
            <span className="gradient-text">Fuel Stations</span>{" "}
            Actually Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From the first nozzle reading to the final profit report — PPMS
            handles every workflow of your fuel station, intelligently.
          </motion.p>
        </div>

        {/* Features grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group glass rounded-2xl border border-white/5 ${feature.border} transition-all duration-300 hover:shadow-lg ${feature.glow} cursor-default overflow-hidden`}
            >
              {/* Illustration area */}
              <div className="h-36 p-4 flex items-center justify-center border-b border-white/5 bg-white/1 group-hover:bg-white/2 transition-colors">
                <div className="w-full h-full">
                  <feature.Illustration />
                </div>
              </div>
              {/* Text */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
