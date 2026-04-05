"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Building2, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const planMeta = [
  {
    icon: Zap,
    monthly: 4999,
    annual: 3999,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    ctaStyle: "glass border border-blue-500/40 text-blue-400 hover:bg-blue-500/10",
    popular: false,
  },
  {
    icon: Building2,
    monthly: 12999,
    annual: 9999,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-500/40 hover:border-amber-500/60",
    ctaStyle: "bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] hover:shadow-amber-500/30",
    popular: true,
  },
  {
    icon: Crown,
    monthly: null,
    annual: null,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-500/20 hover:border-purple-500/40",
    ctaStyle: "glass border border-purple-500/40 text-purple-400 hover:bg-purple-500/10",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/2 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-amber-400 text-xs font-semibold">{p.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            {p.heading}{" "}
            <span className="gradient-text">{p.highlight}</span>{" "}
            {p.heading2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
          >
            {p.subheading}
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 glass rounded-full p-1.5 border border-white/10 ltr-force"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !annual ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual ? "bg-amber-500 text-[#0a0f1e]" : "text-gray-400 hover:text-white"
              }`}
            >
              {p.annual}
              <span className={`text-xs font-bold ${annual ? "text-[#0a0f1e]" : "text-amber-400"}`}>
                {p.save}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {p.plans.map((plan, i) => {
            const meta = planMeta[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {meta.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-amber-500 text-[#0a0f1e] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {p.popular}
                    </div>
                  </div>
                )}

                <div
                  className={`h-full glass rounded-2xl p-8 border ${meta.border} transition-all duration-300 ${
                    meta.popular ? "ring-1 ring-amber-500/40" : ""
                  }`}
                >
                  {/* Plan header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 ${meta.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <meta.icon className={`w-6 h-6 ${meta.color}`} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Price — always LTR */}
                  <div className="mb-6 ltr-force" style={{ fontFamily: "Inter, sans-serif" }}>
                    <AnimatePresence mode="wait">
                      {meta.monthly ? (
                        <motion.div
                          key={annual ? "annual" : "monthly"}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">PKR</span>
                            <span className={`text-4xl font-black ${meta.color}`}>
                              {(annual ? meta.annual : meta.monthly)?.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">
                            {p.perMonth}{annual ? `, ${p.billedAnnually}` : ""}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="custom"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`text-3xl font-black ${meta.color}`}>{p.custom}</div>
                          <p className="text-gray-500 text-sm mt-1">{p.customDesc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`flex items-center justify-center w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg mb-6 ${meta.ctaStyle}`}
                  >
                    {plan.cta}
                  </a>

                  {/* Features */}
                  <div className="border-t border-white/5 pt-6">
                    <p className="text-gray-500 text-xs font-semibold mb-4">
                      {p.included}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className={`w-4 h-4 ${meta.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          {p.note}{" "}
          <a href="#contact" className="text-amber-400 hover:text-amber-300 underline">
            {p.contactUs}
          </a>{" "}
          {p.volumeNote}
        </motion.p>
      </div>
    </section>
  );
}
