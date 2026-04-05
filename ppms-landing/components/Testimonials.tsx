"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonialMeta = [
  { avatar: "م", color: "from-amber-400 to-orange-500", rating: 5, highlight: "ہر روپیہ اور لیٹر ٹریک" },
  { avatar: "ط", color: "from-blue-400 to-cyan-500",   rating: 5, highlight: "۳ اسٹیشن، ایک نظر" },
  { avatar: "ث", color: "from-purple-400 to-pink-500", rating: 5, highlight: "خودکار پے رول" },
];
const testimonialMetaEn = [
  { avatar: "A", color: "from-amber-400 to-orange-500", rating: 5, highlight: "Every rupee & litre tracked" },
  { avatar: "T", color: "from-blue-400 to-cyan-500",   rating: 5, highlight: "3 stations, one view" },
  { avatar: "S", color: "from-purple-400 to-pink-500", rating: 5, highlight: "Automated payroll" },
];

export default function Testimonials() {
  const { t, isUrdu } = useLanguage();
  const tm = t.testimonials;
  const meta = isUrdu ? testimonialMeta : testimonialMetaEn;

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
            <span className="text-amber-400 text-xs font-semibold">{tm.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            {tm.heading}{" "}
            <span className="gradient-text">{tm.highlight}</span>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tm.items.map((item, i) => (
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

              {/* Stars — always LTR */}
              <div className="flex gap-1 mb-4 ltr-force">
                {Array.from({ length: meta[i].rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex glass-amber rounded-full px-3 py-1 mb-4 self-start">
                <span className="text-amber-400 text-xs font-semibold">
                  ✓ {meta[i].highlight}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${meta[i].color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {meta[i].avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                  <p className="text-gray-600 text-xs">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
