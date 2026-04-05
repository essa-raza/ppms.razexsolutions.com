"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Settings, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Set Up Your Organization & Stations",
    description:
      "Register your fuel company, add stations, configure tanks, dispensers, and nozzles. PPMS mirrors your real-world infrastructure.",
    bullets: [
      "Create your organization profile",
      "Add one or multiple stations",
      "Configure fuel types, tanks & dispensers",
    ],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-500/20",
  },
  {
    number: "02",
    icon: Settings,
    title: "Assign Roles & Configure Modules",
    description:
      "Invite your team with the right role — from Head-Office down to Operators. Enable only the modules your station needs.",
    bullets: [
      "Role-based user invitations",
      "Enable/disable modules per station",
      "Configure permissions & access scope",
    ],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-500/20",
  },
  {
    number: "03",
    icon: Zap,
    title: "Go Live — Track Everything in Real Time",
    description:
      "Start recording sales, shifts, deliveries, and expenses. Your dashboard updates instantly with every transaction.",
    bullets: [
      "Real-time sales & shift tracking",
      "Automated alerts & daily reports",
      "Profit analysis across all stations",
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-500/20",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d1528]" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Simple Onboarding
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Up and Running in{" "}
            <span className="gradient-text-amber">Minutes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            No complex setup. No IT team required. Just three steps to a fully
            operational fuel station management system.
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Step card */}
                <div className={`glass rounded-2xl p-8 border ${step.border} h-full`}>
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <div className={`text-5xl font-black ${step.color} opacity-30 leading-none`}>
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle className={`w-4 h-4 ${step.color} flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
