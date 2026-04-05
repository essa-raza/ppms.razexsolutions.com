"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const categories = [
  {
    label: "General",
    faqs: [
      {
        q: "What is PPMS?",
        a: "PPMS (Petrol Pump Management System) is a SaaS platform built by Razex Solutions for managing fuel station operations. It covers sales, inventory, accounting, payroll, attendance, multi-station oversight, and role-based access — everything a modern petrol pump business needs in one place.",
      },
      {
        q: "Who is PPMS built for?",
        a: "PPMS is built for petrol pump owners and operators in Pakistan — from single-station independents to large franchise networks running multiple stations under PSO, Shell, Caltex, or their own brand. It supports all levels: head-office teams, station managers, accountants, and pump operators.",
      },
      {
        q: "Is PPMS a cloud-based system?",
        a: "Yes. PPMS runs fully in the cloud. Your data is accessible from any device with a browser connection. The operational Flutter client supports Windows desktop now, with Android and iOS coming soon.",
      },
      {
        q: "Is my data safe on PPMS?",
        a: "Yes. PPMS uses JWT-based authentication with refresh tokens, session management, and temporary account lockout after repeated failed login attempts. Data is isolated per organisation and station — no station can see another organisation's data.",
      },
    ],
  },
  {
    label: "Pricing & Plans",
    faqs: [
      {
        q: "How much does PPMS cost?",
        a: "PPMS is available on three tiers: Starter (1 station), Business (up to 5 stations), and Enterprise (unlimited). Prices start from PKR 4,999/month on the Starter plan. Annual billing saves 20%. Visit our Pricing page for full details.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes — all plans come with a 14-day free trial. No credit card is required to start. You get full access to the platform during the trial period.",
      },
      {
        q: "Can I switch plans later?",
        a: "Yes. You can upgrade or downgrade your plan at any time from within the platform. Upgrades are prorated and take effect immediately.",
      },
      {
        q: "Do you offer discounts for multiple stations?",
        a: "Yes. The Business plan covers up to 5 stations and the Enterprise plan is for unlimited stations with a custom quote. Contact our sales team for volume pricing.",
      },
    ],
  },
  {
    label: "Setup & Onboarding",
    faqs: [
      {
        q: "How long does it take to set up PPMS?",
        a: "Most stations are fully operational within one day. The onboarding process involves creating your organisation, adding stations, configuring tanks and dispensers, setting up fuel types, and inviting your team. Our support team can assist you through the entire setup.",
      },
      {
        q: "Do I need technical knowledge to use PPMS?",
        a: "No. PPMS is designed to be used by station managers, operators, and accountants — not IT professionals. The interface is straightforward and role-specific, so each user only sees what is relevant to their job.",
      },
      {
        q: "Can I import my existing data into PPMS?",
        a: "Yes. We support data migration for existing customer and supplier records, opening balances, and station configurations. Contact our team to discuss your specific import needs.",
      },
      {
        q: "Do you provide training?",
        a: "Yes. Enterprise plans include dedicated training and onboarding sessions. Business and Starter plan customers have access to our documentation, video guides, and email support.",
      },
    ],
  },
  {
    label: "Roles & Permissions",
    faqs: [
      {
        q: "What roles are available in PPMS?",
        a: "PPMS has a full hierarchy: MasterAdmin (Razex Solutions platform level), HeadOffice (organisation-wide view), StationAdmin (full station control), Manager (operational management), Accountant (finance-only), and Operator (shift and sales recording). The interface automatically adapts to show only what each role can access.",
      },
      {
        q: "Can I create custom roles?",
        a: "The Enterprise plan supports custom role and permission configuration. Standard plans use the built-in role hierarchy which covers the full range of petrol pump operational needs.",
      },
      {
        q: "Can an operator see data from other stations?",
        a: "No. Station-level roles (Manager, Operator, Accountant) are strictly isolated to their assigned station. Only HeadOffice and MasterAdmin roles have cross-station visibility.",
      },
    ],
  },
  {
    label: "Modules & Features",
    faqs: [
      {
        q: "Can I disable modules I don't need?",
        a: "Yes. PPMS supports module-level enable/disable per organisation and per station. If your station doesn't use CNG, for example, you can disable that module and it disappears from all menus and dashboards automatically.",
      },
      {
        q: "Does PPMS support credit sales?",
        a: "Yes. PPMS supports both cash and credit fuel sales. Credit customers have ledger accounts with running balances, payment tracking, and configurable credit limits. Alerts are triggered when a customer approaches their limit.",
      },
      {
        q: "How does shift management work?",
        a: "A shift is opened by a manager with an initial cash amount. During the shift, operators record nozzle readings and sales. At shift close, total cash collected is entered and the system automatically calculates any variance. All shift data feeds into daily reports.",
      },
      {
        q: "Does PPMS integrate with physical dispensers or tank probes?",
        a: "PPMS has a hardware module for registering dispenser and tank-probe devices and ingesting their readings. Full automated hardware integration is on the product roadmap.",
      },
      {
        q: "Can I access PPMS on mobile?",
        a: "The Flutter-based operational client currently supports Windows desktop. Android and iOS versions are in development. The portal web interface at ppms.razexsolutions.com is fully mobile-responsive.",
      },
    ],
  },
  {
    label: "Support",
    faqs: [
      {
        q: "How do I contact support?",
        a: "You can reach us by email at info@razexsolutions.com or by using the Contact page on this site. Enterprise customers have a dedicated account manager.",
      },
      {
        q: "What is your uptime guarantee?",
        a: "PPMS targets 99.9% uptime. Enterprise plans include an SLA-backed uptime guarantee. You can monitor system status via the status indicator in the portal footer.",
      },
      {
        q: "What happens to my data if I cancel?",
        a: "Your data remains available for 30 days after cancellation. You can export all your records during this period. After 30 days, data is permanently deleted. We recommend exporting your data before cancelling.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-white/5 rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-amber-500/30 bg-amber-500/3" : "hover:border-white/10"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm lg:text-base leading-snug transition-colors ${open ? "text-amber-400" : "text-white group-hover:text-amber-300"}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 ${open ? "text-amber-400" : "text-gray-500"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState("General");

  const current = categories.find((c) => c.label === activeCategory)!;

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
              Help & FAQs
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Frequently Asked{" "}
            <span className="gradient-text-amber">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to know about PPMS. Can&apos;t find your answer?{" "}
            <a href="/contact" className="text-amber-400 hover:underline">
              Contact us
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-2xl p-4 border border-white/5 sticky top-28">
              <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-3 px-2">
                Categories
              </p>
              <nav className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.label
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat.label}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.label ? "bg-amber-500/20 text-amber-400" : "bg-white/5 text-gray-500"}`}>
                      {cat.faqs.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* FAQ items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            <h2 className="text-xl font-bold text-white mb-2">{current.label}</h2>
            {current.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-amber rounded-2xl p-8 border border-amber-500/20 text-center"
        >
          <h3 className="text-white font-bold text-xl mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-5">
            Our team is happy to walk you through everything. Book a demo or drop us a message.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-7 py-3 rounded-xl transition-all hover:scale-105"
          >
            Talk to Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </>
  );
}
