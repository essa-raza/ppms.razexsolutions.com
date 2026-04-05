"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Eye, EyeOff, ArrowRight, Shield, Lock } from "lucide-react";

export default function PortalLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Placeholder — connect to FastAPI backend later
    // POST /auth/login with { username, password }
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setError("Backend not connected yet. Integration coming soon.");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex overflow-hidden">
      {/* Left panel — branding */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12"
      >
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-blue-500/5" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl" />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <Fuel className="w-5 h-5 text-[#0a0f1e]" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-white font-bold text-xl leading-none">PPMS</p>
            <p className="text-amber-500 text-[10px] font-semibold uppercase tracking-widest">Razex Solutions</p>
          </div>
        </div>

        {/* Centre content */}
        <div className="relative">
          <h1 className="text-4xl xl:text-5xl font-black text-white mb-6 leading-tight">
            Welcome to the{" "}
            <span className="gradient-text-amber">PPMS Portal</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            Your centralised command centre for managing stations, users,
            databases, and application configuration across the entire platform.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "Station Management",
              "User & Role Control",
              "Database Access",
              "Module Config",
              "Billing & Plans",
              "System Monitoring",
            ].map((f) => (
              <span
                key={f}
                className="glass-amber text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full border border-amber-500/20"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="relative flex items-center gap-3 glass rounded-xl p-4 border border-white/5">
          <div className="w-9 h-9 bg-emerald-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Secured & Isolated</p>
            <p className="text-gray-500 text-xs">All portal actions are logged and role-restricted.</p>
          </div>
        </div>
      </motion.div>

      {/* Right panel — login form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex items-center justify-center p-6 lg:p-12"
      >
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center">
              <Fuel className="w-5 h-5 text-[#0a0f1e]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-white font-bold leading-none">PPMS</p>
              <p className="text-amber-500 text-[9px] uppercase tracking-widest">Razex Solutions</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-1">Sign in to Portal</h2>
            <p className="text-gray-400 text-sm">Enter your credentials to access the platform.</p>
          </div>

          {/* Coming soon banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-amber rounded-xl p-4 border border-amber-500/20 mb-6 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-amber-400 text-xs font-semibold">Backend Integration Coming Soon</p>
              <p className="text-gray-400 text-xs">The portal will connect to the PPMS FastAPI backend. UI is ready.</p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Username */}
            <div>
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                Username
              </label>
              <input
                type="text"
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 outline-none transition-colors bg-transparent"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-amber-400 hover:text-amber-300 text-xs transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full glass border border-white/10 focus:border-amber-500/50 rounded-xl px-4 py-3.5 pr-12 text-white text-sm placeholder-gray-600 outline-none transition-colors bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-xl px-4 py-3 border border-rose-500/30 text-rose-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#0a0f1e] font-bold py-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/30 mt-1"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#0a0f1e]/30 border-t-[#0a0f1e] rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-600 text-xs mb-3">
              Portal access is restricted to authorised PPMS users only.
            </p>
            <a href="/" className="text-amber-400 hover:text-amber-300 text-xs transition-colors">
              ← Back to PPMS website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
