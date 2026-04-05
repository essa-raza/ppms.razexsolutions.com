"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Settings, Zap, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepMeta = [
  { number: "01", icon: Building2, color: "text-amber-400",  bg: "bg-amber-400/10",  border: "border-amber-500/20"  },
  { number: "02", icon: Settings,  color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-500/20"   },
  { number: "03", icon: Zap,       color: "text-emerald-400",bg: "bg-emerald-400/10",border: "border-emerald-500/20"},
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const h = t.howItWorks;

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
            <span className="text-amber-400 text-xs font-semibold">
              {h.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            {h.heading}{" "}
            <span className="gradient-text-amber">{h.highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            {h.subheading}
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {h.steps.map((step, i) => {
              const meta = stepMeta[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <div className={`glass rounded-2xl p-8 border ${meta.border} h-full`}>
                    {/* Step number + icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${meta.bg} rounded-2xl flex items-center justify-center`}>
                        <meta.icon className={`w-7 h-7 ${meta.color}`} />
                      </div>
                      <div className={`text-5xl font-black ${meta.color} opacity-30 leading-none ltr-force`} style={{ fontFamily: "Inter, sans-serif" }}>
                        {meta.number}
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <CheckCircle className={`w-4 h-4 ${meta.color} flex-shrink-0`} />
                          <span className="text-gray-300 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
