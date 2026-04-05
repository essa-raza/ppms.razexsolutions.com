"use client";

import { motion } from "framer-motion";

export default function HeroDashboard() {
  const bars = [38, 62, 48, 78, 65, 90, 72, 84, 58, 76, 88, 70];
  const linePoints = bars.map((v, i) => `${i * 30 + 15},${90 - v * 0.7}`).join(" ");

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative glass rounded-2xl border border-white/8 overflow-hidden shadow-2xl shadow-black/40"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                <path d="M8 2C8 2 4 7 4 10C4 12.209 5.791 14 8 14C10.209 14 12 12.209 12 10C12 7 8 2 8 2Z" fill="#0a0f1e"/>
                <polyline points="5,10 6.2,10 6.8,7.5 7.5,12.5 8.2,8.5 8.9,11 9.5,10 10.8,10" stroke="#f59e0b" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white text-xs font-bold tracking-wide">PPMS Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-medium">Live</span>
            </div>
            <div className="flex gap-1">
              {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/10" />)}
            </div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Today's Sales", value: "₨ 2,84,500", change: "+12.4%", up: true, color: "text-emerald-400", bg: "bg-emerald-400/10" },
              { label: "Net Profit", value: "₨ 38,210", change: "+8.2%", up: true, color: "text-amber-400", bg: "bg-amber-400/10" },
              { label: "Fuel Stock", value: "18,420 L", change: "3 tanks", up: null, color: "text-blue-400", bg: "bg-blue-400/10" },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass rounded-xl p-3 border border-white/5"
              >
                <p className="text-gray-500 text-[9px] uppercase tracking-wider mb-1">{kpi.label}</p>
                <p className="text-white font-bold text-xs mb-1">{kpi.value}</p>
                <div className={`inline-flex items-center gap-1 ${kpi.bg} rounded-full px-1.5 py-0.5`}>
                  {kpi.up !== null && (
                    <svg viewBox="0 0 8 8" className={`w-2 h-2 ${kpi.color}`}>
                      <path d={kpi.up ? "M4 1L7 5H1L4 1Z" : "M4 7L1 3H7L4 7Z"} fill="currentColor"/>
                    </svg>
                  )}
                  <span className={`${kpi.color} text-[9px] font-semibold`}>{kpi.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sales chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="glass rounded-xl p-4 border border-white/5"
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-white text-xs font-semibold">Revenue Trend</p>
                <p className="text-gray-500 text-[10px]">Last 12 weeks</p>
              </div>
              <div className="flex gap-2">
                {["W", "M", "Y"].map((t, i) => (
                  <button key={i} className={`text-[9px] px-2 py-0.5 rounded-full font-medium transition-colors ${i === 0 ? "bg-amber-500/20 text-amber-400" : "text-gray-500"}`}>{t}</button>
                ))}
              </div>
            </div>

            {/* SVG line + area chart */}
            <svg viewBox="0 0 375 100" className="w-full h-20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4"/>
                  <stop offset="60%" stopColor="#f59e0b"/>
                  <stop offset="100%" stopColor="#fbbf24"/>
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[20, 45, 70].map(y => (
                <line key={y} x1="0" y1={y} x2="375" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              ))}
              {/* Area fill */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                d={`M15,${90 - bars[0]*0.7} ${bars.map((v, i) => `L${i*30+15},${90 - v*0.7}`).join(" ")} L${(bars.length-1)*30+15},90 L15,90 Z`}
                fill="url(#chartGrad)"
              />
              {/* Line */}
              <motion.polyline
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                points={linePoints}
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Highlight dot at peak */}
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 }}
                cx={5 * 30 + 15}
                cy={90 - bars[5] * 0.7}
                r="4"
                fill="#f59e0b"
                stroke="#0a0f1e"
                strokeWidth="2"
              />
              {/* Value tooltip at peak */}
              <g>
                <rect x={5*30+2} y={90-bars[5]*0.7-22} width="34" height="16" rx="4" fill="#f59e0b"/>
                <text x={5*30+19} y={90-bars[5]*0.7-11} textAnchor="middle" fontSize="7" fill="#0a0f1e" fontWeight="700">₨ 48K</text>
              </g>
            </svg>
          </motion.div>

          {/* Bottom row: stations + shifts */}
          <div className="grid grid-cols-2 gap-3">
            {/* Station status */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="glass rounded-xl p-3 border border-white/5"
            >
              <p className="text-gray-500 text-[9px] uppercase tracking-wider mb-2">Stations</p>
              <div className="space-y-1.5">
                {[
                  { name: "Main Road", online: true, sales: "₨82K" },
                  { name: "Airport Blvd", online: true, sales: "₨61K" },
                  { name: "Ring Road", online: false, sales: "—" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${s.online ? "bg-emerald-400" : "bg-gray-600"}`} />
                      <span className="text-gray-300 text-[10px]">{s.name}</span>
                    </div>
                    <span className={`text-[10px] font-medium ${s.online ? "text-white" : "text-gray-600"}`}>{s.sales}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fuel gauges */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="glass rounded-xl p-3 border border-white/5"
            >
              <p className="text-gray-500 text-[9px] uppercase tracking-wider mb-2">Tank Levels</p>
              <div className="space-y-2">
                {[
                  { label: "Petrol", pct: 72, color: "bg-amber-500" },
                  { label: "Diesel", pct: 28, color: "bg-rose-500", warn: true },
                  { label: "CNG", pct: 55, color: "bg-blue-500" },
                ].map((tank, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-gray-400 text-[9px]">{tank.label}</span>
                      <span className={`text-[9px] font-semibold ${tank.warn ? "text-rose-400" : "text-gray-300"}`}>{tank.pct}%{tank.warn ? " ⚠" : ""}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tank.pct}%` }}
                        transition={{ delay: 1.4 + i * 0.1, duration: 0.7 }}
                        className={`h-full ${tank.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification cards */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
        className="absolute -right-4 top-10 glass rounded-xl p-3 border border-amber-500/25 shadow-xl shadow-black/30 max-w-[155px] z-10"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 bg-amber-500/20 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
              <path d="M6 1C6 1 2 5.5 2 8C2 10.209 3.791 12 6 12C8.209 12 10 10.209 10 8C10 5.5 6 1 6 1Z" fill="#f59e0b"/>
            </svg>
          </div>
          <span className="text-amber-400 text-[9px] font-bold uppercase tracking-wide">Low Stock</span>
        </div>
        <p className="text-white text-[10px] font-semibold">Diesel · Station 3</p>
        <p className="text-gray-400 text-[9px]">1,200 L remaining</p>
        <div className="mt-1.5 h-1 bg-white/5 rounded-full">
          <div className="h-full w-[28%] bg-rose-500 rounded-full" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.7, type: "spring", stiffness: 100 }}
        className="absolute -left-4 bottom-16 glass rounded-xl p-3 border border-emerald-500/20 shadow-xl shadow-black/30 max-w-[155px] z-10"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 bg-emerald-400/15 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 12 12" className="w-3 h-3 text-emerald-400" fill="none">
              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-emerald-400 text-[9px] font-bold uppercase tracking-wide">Shift Closed</span>
        </div>
        <p className="text-white text-[10px] font-semibold">Morning Shift ✓</p>
        <p className="text-gray-400 text-[9px]">₨ 92,400 collected</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, type: "spring" }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2.5 border border-blue-500/20 shadow-xl shadow-black/30 whitespace-nowrap z-10"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400/15 rounded flex items-center justify-center">
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-blue-400" fill="currentColor">
              <circle cx="5" cy="5" r="4"/>
              <path d="M5 3V5.5L6.5 7" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <span className="text-gray-300 text-[10px]">Report generated · </span>
          <span className="text-blue-400 text-[10px] font-semibold">Daily closing ready</span>
        </div>
      </motion.div>
    </div>
  );
}
