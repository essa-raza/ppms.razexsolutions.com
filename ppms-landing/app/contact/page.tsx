import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Demo | PPMS by Razex Solutions",
  description:
    "Get in touch with Razex Solutions to request a demo, ask about pricing, or discuss how PPMS can work for your fuel stations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
