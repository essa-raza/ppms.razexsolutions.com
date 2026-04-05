import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesHero from "@/components/pages/FeaturesHero";
import FeaturesModules from "@/components/pages/FeaturesModules";
import FeaturesCTA from "@/components/pages/FeaturesCTA";

export const metadata: Metadata = {
  title: "Features | PPMS — Petrol Pump Management System",
  description:
    "Explore every module of PPMS — from real-time sales tracking and inventory to payroll, accounting, multi-station oversight, and smart alerts.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <FeaturesHero />
      <FeaturesModules />
      <FeaturesCTA />
      <Footer />
    </main>
  );
}
