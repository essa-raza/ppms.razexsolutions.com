"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Building2, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for a single fuel station getting started.",
    monthly: 4999,
    annual: 3999,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    cta: "Start Free Trial",
    ctaStyle:
      "glass border border-blue-500/40 text-blue-400 hover:bg-blue-500/10",
    popular: false,
    features: [
      "1 Station",
      "Up to 5 users",
      "Sales & Shift tracking",
      "Basic inventory management",
      "Daily closing reports",
      "Email support",
      "Mobile app access",
    ],
  },
  {
    name: "Business",
    icon: Building2,
    description: "For growing operators with multiple stations.",
    monthly: 12999,
    annual: 9999,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-500/40 hover:border-amber-500/60",
    cta: "Start Free Trial",
    ctaStyle:
      "bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] hover:shadow-amber-500/30",
    popular: true,
    features: [
      "Up to 5 Stations",
      "Up to 25 users",
      "All modules included",
      "Accounting & ledger management",
      "Attendance & payroll",
      "Head-office dashboard",
      "Advanced reports & analytics",
      "Priority support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    icon: Crown,
    description: "Unlimited scale with custom SLA and dedicated support.",
    monthly: null,
    annual: null,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-500/20 hover:border-purple-500/40",
    cta: "Contact Sales",
    ctaStyle:
      "glass border border-purple-500/40 text-purple-400 hover:bg-purple-500/10",
    popular: false,
    features: [
      "Unlimited Stations",
      "Unlimited users",
      "Everything in Business",
      "Custom module configuration",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "On-premises deployment option",
      "Training & onboarding sessions",
      "White-label options",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

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
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Simple Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Invest in{" "}
            <span className="gradient-text">Your Station's</span> Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
          >
            Transparent pricing with no hidden fees. Start with a 14-day free
            trial — no credit card required.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 glass rounded-full p-1.5 border border-white/10"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !annual
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-amber-500 text-[#0a0f1e]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual
              <span
                className={`text-xs font-bold ${
                  annual ? "text-[#0a0f1e]" : "text-amber-400"
                }`}
              >
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-amber-500 text-[#0a0f1e] text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full glass rounded-2xl p-8 border ${plan.border} transition-all duration-300 ${
                  plan.popular ? "ring-1 ring-amber-500/40" : ""
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 ${plan.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <plan.icon className={`w-6 h-6 ${plan.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    {plan.monthly ? (
                      <motion.div
                        key={annual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-baseline gap-1">
                          <span className="text-gray-400 text-lg">PKR</span>
                          <span className={`text-4xl font-black ${plan.color}`}>
                            {(annual ? plan.annual : plan.monthly)?.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">per month{annual ? ", billed annually" : ""}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="custom"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`text-3xl font-black ${plan.color}`}>
                          Custom
                        </div>
                        <p className="text-gray-500 text-sm mt-1">tailored to your scale</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`flex items-center justify-center w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg mb-6 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div className="border-t border-white/5 pt-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 ${plan.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#contact" className="text-amber-400 hover:text-amber-300 underline">
            Contact us
          </a>{" "}
          for volume discounts.
        </motion.p>
      </div>
    </section>
  );
}
