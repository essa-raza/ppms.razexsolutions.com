"use client";

import { motion } from "framer-motion";
import { Fuel, Globe, Shield, Zap, Heart, ArrowRight, ExternalLink } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Built for Speed",
    desc: "Every feature in PPMS is designed to save time. From 10-minute shift closes to automated daily reports — we eliminate manual work.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Shield,
    title: "Reliability First",
    desc: "Fuel stations can't afford downtime. We target 99.9% uptime and build with data integrity and security at every layer.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Globe,
    title: "Built for Pakistan",
    desc: "PPMS is designed around how Pakistani fuel businesses actually work — PSO, Shell, Caltex, independent operators — all considered.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    desc: "Every module we built came from real operator feedback. We listen closely, iterate fast, and put our customers' needs first.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

const milestones = [
  { year: "2024", event: "Razex Solutions founded in Pakistan" },
  { year: "Early 2025", event: "PPMS backend MVP completed using FastAPI" },
  { year: "Mid 2025", event: "Flutter desktop client launched for Windows" },
  { year: "Late 2025", event: "Multi-station, multi-org architecture released" },
  { year: "2026", event: "PPMS SaaS platform launched — ppms.razexsolutions.com" },
  { year: "2026+", event: "Android & iOS apps, cloud hosting, automated deployment" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1e]" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-6">
                <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  About Razex Solutions
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                The Software House{" "}
                <span className="gradient-text">Powering Pakistan's</span>{" "}
                Fuel Industry
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Razex Solutions is a Pakistan-based software house building
                practical, modern software for industries that have been
                underserved by technology. PPMS is our flagship product —
                designed from the ground up for petrol pump operators.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We believe that running a fuel station shouldn't mean drowning
                in spreadsheets and manual reconciliation. Our mission is to
                give every pump operator — from a single-station family
                business to a multi-city franchise — the tools that enterprise
                companies take for granted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
                >
                  Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://razexsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 glass border border-white/10 hover:border-amber-500/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
                >
                  razexsolutions.com <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Brand card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-3xl p-10 border border-white/8 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30">
                <Fuel className="w-10 h-10 text-[#0a0f1e]" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black text-white mb-1">PPMS</h2>
              <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-6">
                by Razex Solutions
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { val: "200+", label: "Stations" },
                  { val: "6", label: "User Roles" },
                  { val: "99.9%", label: "Uptime" },
                  { val: "2026", label: "SaaS Launch" },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-xl p-4 border border-white/5">
                    <p className="text-amber-400 font-black text-xl">{s.val}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0d1528] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-black text-white mb-3"
            >
              Our <span className="gradient-text-amber">Values</span>
            </motion.h2>
            <p className="text-gray-400">What drives every decision we make at Razex Solutions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all"
              >
                <div className={`w-11 h-11 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-black text-white mb-3"
            >
              Our <span className="gradient-text">Journey</span>
            </motion.h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pl-16 relative"
                >
                  <div className="absolute left-3.5 top-1.5 w-5 h-5 bg-amber-500 rounded-full border-2 border-[#0a0f1e] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#0a0f1e] rounded-full" />
                  </div>
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{m.year}</span>
                    <p className="text-white font-semibold mt-0.5">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-amber rounded-2xl p-10 border border-amber-500/20"
          >
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
              Want to know more?
            </h2>
            <p className="text-gray-400 mb-6">
              We&apos;re happy to answer any questions about our company, our
              product, or how we can help your stations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105"
            >
              Contact Razex Solutions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
