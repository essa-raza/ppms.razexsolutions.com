"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturesCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/6 via-transparent to-blue-500/6" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/6 rounded-full blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            See Every Feature in Action
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Book a personalised demo and we&apos;ll walk you through the exact
            modules your station needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
            >
              Book a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center glass border border-white/10 hover:border-amber-500/30 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
