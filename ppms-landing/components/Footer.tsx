"use client";

import { motion } from "framer-motion";
import { Fuel, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="relative border-t border-white/5 bg-[#04081a]">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a href="#" className="flex items-center gap-2.5 mb-4 ltr-force">
                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center">
                  <Fuel className="w-5 h-5 text-[#0a0f1e]" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>PPMS</span>
                  <span className="text-[10px] text-amber-500 font-medium tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                    Razex Solutions
                  </span>
                </div>
              </a>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
                {f.tagline}
              </p>

              <a
                href="mailto:info@razexsolutions.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors group ltr-force"
              >
                <Mail className="w-4 h-4 group-hover:text-amber-400" />
                <span style={{ fontFamily: "Inter, sans-serif" }}>info@razexsolutions.com</span>
              </a>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(f.sections).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-white font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {(links as { label: string; href: string }[]).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-1 group"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm ltr-force" style={{ fontFamily: "Inter, sans-serif" }}>
              © 2026 Razex Solutions. {f.rights}
            </p>
            <div className="flex items-center gap-2 ltr-force">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-500 text-xs">{f.status}</span>
            </div>
            <p className="text-gray-600 text-xs ltr-force" style={{ fontFamily: "Inter, sans-serif" }}>
              ppms.razexsolutions.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
