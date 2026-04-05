import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQContent from "@/components/pages/FAQContent";

export const metadata: Metadata = {
  title: "FAQ | PPMS — Petrol Pump Management System",
  description:
    "Answers to the most common questions about PPMS — pricing, setup, roles, modules, and more.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <FAQContent />
      <Footer />
    </main>
  );
}
