"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  LayoutDashboard, Receipt, Package, Calculator, Users,
  Building2, ShieldCheck, FileBarChart2, Smartphone, Bell,
  Clock, CreditCard, Truck, Droplets, UserCheck, PieChart,
} from "lucide-react";

const modules = [
  {
    id: "dashboard",
    tag: "Core",
    title: "Real-Time Dashboard",
    icon: LayoutDashboard,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-500/20",
    accent: "from-amber-500/20 to-transparent",
    description:
      "Your command centre. Get an instant overview of every metric that matters — updated live as your operators record transactions.",
    bullets: [
      "Total cash & credit sales for the day",
      "Net profit calculated in real time",
      "Fuel stock levels across all tanks",
      "Low stock and credit limit alerts",
      "Station-level and organisation-level views",
      "Role-aware data — operators see their station, head-office sees all",
    ],
  },
  {
    id: "sales",
    tag: "Operations",
    title: "Sales & Shift Management",
    icon: Receipt,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-500/20",
    accent: "from-blue-500/20 to-transparent",
    description:
      "From the moment a shift opens to the final cash reconciliation — every litre sold, every rupee collected, tracked precisely.",
    bullets: [
      "Shift open/close with initial cash tracking",
      "Nozzle start and end meter readings",
      "Cash and credit sales per nozzle",
      "Automatic meter reading updates",
      "Shift variance and difference detection",
      "End-of-shift cash reconciliation report",
    ],
  },
  {
    id: "inventory",
    tag: "Inventory",
    title: "Inventory & Tanker Deliveries",
    icon: Package,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-500/20",
    accent: "from-emerald-500/20 to-transparent",
    description:
      "Never run dry unexpectedly. Track every litre in every tank, manage deliveries, and automatically flag when stock gets low.",
    bullets: [
      "Tank dip readings (stick measurement in mm)",
      "Automated volume calculation from dip readings",
      "Evaporation and leakage gain/loss analysis",
      "Tanker delivery management and records",
      "Fuel type configuration (Petrol, Diesel, CNG)",
      "Real-time stock level tracking per tank",
    ],
  },
  {
    id: "accounting",
    tag: "Finance",
    title: "Accounting & Ledgers",
    icon: Calculator,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-500/20",
    accent: "from-purple-500/20 to-transparent",
    description:
      "A complete financial layer built into the platform. Customer accounts, supplier balances, expenses, and profit — all in one place.",
    bullets: [
      "Customer ledgers with running balances",
      "Supplier ledgers and payment records",
      "Receivables management (customer payments)",
      "Payables management (supplier payments)",
      "Station-wise operational expense tracking",
      "Expense approval workflow support",
      "Real-time net profit calculation",
      "Credit limit monitoring and alerts",
    ],
  },
  {
    id: "payroll",
    tag: "HR",
    title: "Attendance & Payroll",
    icon: Users,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-500/20",
    accent: "from-rose-500/20 to-transparent",
    description:
      "Manage your workforce from check-in to pay slip. Built for the realities of shift-based fuel station staffing.",
    bullets: [
      "Staff attendance check-in and check-out",
      "Manual attendance correction by managers",
      "Payroll run generation per period",
      "Payroll finalization and record keeping",
      "Employee profile management",
      "Shift-linked attendance tracking",
    ],
  },
  {
    id: "multistation",
    tag: "Enterprise",
    title: "Multi-Station & Multi-Org",
    icon: Building2,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-500/20",
    accent: "from-cyan-500/20 to-transparent",
    description:
      "Whether you run one pump or fifty, PPMS scales with you. Head-office users see across all their stations without leaving one screen.",
    bullets: [
      "Unlimited stations per organisation",
      "Head-office designation per organisation",
      "Organisation-level dashboard and reports",
      "Cross-station sales and profit comparison",
      "Station-level data isolation for operators",
      "Module enable/disable per station",
    ],
  },
  {
    id: "rbac",
    tag: "Security",
    title: "Role-Based Access Control",
    icon: ShieldCheck,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-500/20",
    accent: "from-amber-500/20 to-transparent",
    description:
      "A deep permission hierarchy that maps exactly to how petrol pump businesses are actually structured and staffed.",
    bullets: [
      "MasterAdmin — Razex Solutions platform level",
      "HeadOffice — Organisation-wide read access",
      "StationAdmin — Full station control",
      "Manager — Operational management",
      "Accountant — Finance-only access",
      "Operator — Shift and sales recording only",
      "Dynamic UI — menus change based on role",
    ],
  },
  {
    id: "reports",
    tag: "Analytics",
    title: "Reports & Smart Alerts",
    icon: FileBarChart2,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-500/20",
    accent: "from-indigo-500/20 to-transparent",
    description:
      "Automated reports so nothing slips through the cracks — from daily closing summaries to long-term stock movement trends.",
    bullets: [
      "Daily closing reports (auto-generated)",
      "Shift variance reports",
      "Stock movement and delivery reports",
      "Customer balance and supplier balance reports",
      "Organisation-aware filters by date and station",
      "Low fuel stock alerts (configurable threshold)",
      "Customer credit limit warnings",
    ],
  },
];

const additionalFeatures = [
  { icon: Smartphone, label: "Flutter Mobile App", desc: "Windows desktop now, Android & iOS coming" },
  { icon: Bell, label: "Smart Notifications", desc: "Alerts for low stock, credit limits, shift variances" },
  { icon: Clock, label: "Session Management", desc: "Refresh tokens, logout, session visibility" },
  { icon: CreditCard, label: "POS Foundation", desc: "POS stock and sales workflow support" },
  { icon: Truck, label: "Hardware Integration", desc: "Dispenser and tank-probe device registry" },
  { icon: Droplets, label: "Fuel Type Management", desc: "Petrol, Diesel, CNG — fully configurable" },
  { icon: UserCheck, label: "Account Lockout", desc: "Temporary lockout after repeated failed logins" },
  { icon: PieChart, label: "Profit Analysis", desc: "Real-time profit based on sales minus expenses" },
];

export default function FeaturesModules() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main modules */}
        <div ref={ref} className="space-y-8">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
              className={`glass rounded-2xl border ${mod.border} overflow-hidden`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 ${mod.bg} rounded-xl flex items-center justify-center`}>
                      <mod.icon className={`w-5 h-5 ${mod.color}`} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${mod.color} glass-amber px-3 py-1 rounded-full`}>
                      {mod.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
                    {mod.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{mod.description}</p>

                  <ul className="space-y-2.5">
                    {mod.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${mod.color} mt-2 flex-shrink-0`} style={{ background: "currentColor" }} />
                        <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className={`relative hidden lg:flex items-center justify-center p-10 bg-gradient-to-br ${mod.accent} border-l border-white/5`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 ${mod.bg} rounded-3xl flex items-center justify-center mx-auto mb-4 border ${mod.border}`}>
                      <mod.icon className={`w-12 h-12 ${mod.color}`} />
                    </div>
                    <p className={`text-4xl font-black ${mod.color} mb-1`}>{mod.bullets.length}</p>
                    <p className="text-gray-500 text-sm">key capabilities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
              Plus <span className="gradient-text-amber">Even More</span> Built In
            </h2>
            <p className="text-gray-400">Everything else that makes PPMS a complete platform.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 border border-white/5 hover:border-amber-500/20 transition-all"
              >
                <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{f.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
