import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About | PPMS by Razex Solutions",
  description:
    "Learn about Razex Solutions — the software house behind PPMS, Pakistan's fuel station management platform.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
