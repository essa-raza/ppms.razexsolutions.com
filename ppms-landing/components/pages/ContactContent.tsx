"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Building2, Fuel, Users } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@razexsolutions.com", href: "mailto:info@razexsolutions.com" },
  { icon: Phone, label: "WhatsApp / Phone", value: "+92 300 0000000", href: "tel:+923000000000" },
  { icon: MapPin, label: "Location", value: "Pakistan", href: "#" },
];

const reasons = [
  { icon: Fuel, label: "Book a Demo", desc: "See PPMS live with your own data" },
  { icon: Building2, label: "Enterprise Inquiry", desc: "Multi-station custom pricing" },
  { icon: Users, label: "Support", desc: "Help with an existing account" },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", stations: "", reason: "Book a Demo", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call later
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1e]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Let&apos;s Talk About{" "}
            <span className="gradient-text-amber">Your Stations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Book a personalised demo, ask about pricing, or just say hello.
            We&apos;re happy to help.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Reasons */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-4">How can we help?</h3>
              <div className="flex flex-col gap-3">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-9 h-9 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <r.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{r.label}</p>
                      <p className="text-gray-500 text-xs">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-4">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                      <c.icon className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{c.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass-amber rounded-2xl p-5 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold">Typically responds within 24 hours</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Enterprise inquiries are prioritised. We&apos;ll reach out to schedule a call
                at a time that works for you.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", stations: "", reason: "Book a Demo", message: "" }); }}
                    className="mt-6 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="text-xl font-bold text-white mb-1">Send us a message</h2>

                  {/* Reason selector */}
                  <div>
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                      Reason for contact *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {reasons.map((r) => (
                        <button
                          key={r.label}
                          type="button"
                          onClick={() => setForm({ ...form, reason: r.label })}
                          className={`p-3 rounded-xl text-xs font-medium border transition-all text-center ${
                            form.reason === r.label
                              ? "bg-amber-500/10 border-amber-500/40 text-amber-400"
                              : "glass border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ahmad Raza"
                        className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ahmad@example.com"
                        className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Company + Stations */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Raza Petroleum"
                        className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Number of Stations
                      </label>
                      <select
                        value={form.stations}
                        onChange={(e) => setForm({ ...form, stations: e.target.value })}
                        className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors bg-[#0d1528] appearance-none"
                      >
                        <option value="" className="bg-[#0d1528]">Select...</option>
                        <option value="1" className="bg-[#0d1528]">1 Station</option>
                        <option value="2-5" className="bg-[#0d1528]">2–5 Stations</option>
                        <option value="6-10" className="bg-[#0d1528]">6–10 Stations</option>
                        <option value="10+" className="bg-[#0d1528]">10+ Stations</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your stations, what you're looking for, or any questions you have..."
                      className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#0a0f1e] font-bold py-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/30"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-[#0a0f1e]/30 border-t-[#0a0f1e] rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
