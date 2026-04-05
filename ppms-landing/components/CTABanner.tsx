"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-blue-500/8" />
      <div className="absolute inset-0 grid-bg" />

      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Free 14-Day Trial
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Take Control of{" "}
            <span className="gradient-text-amber">Your Fuel Station?</span>
          </h2>

          <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 200+ petrol pump operators who have eliminated manual
            reconciliation, reduced errors, and gained complete visibility into
            every litre and every rupee.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#pricing"
              className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:info@razexsolutions.com"
              className="group flex items-center justify-center gap-2 glass border border-white/10 hover:border-amber-500/30 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 text-lg"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              Talk to Sales
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime",
              "99.9% uptime SLA",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
