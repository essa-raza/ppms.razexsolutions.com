"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const statValues = [
  { value: 200, suffix: "+" },
  { value: 50,  suffix: "M+" },
  { value: 99.9, suffix: "%" },
  { value: 6,   suffix: " Roles" },
];

function AnimatedCounter({
  value,
  suffix,
  duration = 2000,
  start,
}: {
  value: number;
  suffix: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, value, duration]);

  return (
    <span className="ltr-force" style={{ fontFamily: "Inter, sans-serif" }}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-16 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-blue-500/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black gradient-text-amber mb-2">
                <AnimatedCounter
                  value={statValues[i].value}
                  suffix={statValues[i].suffix}
                  start={inView}
                />
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
