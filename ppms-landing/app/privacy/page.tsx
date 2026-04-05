import Link from "next/link";
import { Fuel } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | PPMS by Razex Solutions",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-gray-300">
      {/* Header */}
      <div className="border-b border-white/5 py-4 px-6">
        <Link href="/" className="flex items-center gap-2.5 w-fit">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
            <Fuel className="w-4 h-4 text-[#0a0f1e]" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-white">PPMS</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              subscribe to a plan, or contact us for support. This includes your name, email address,
              business name, station details, and billing information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, send you technical notices, and respond to your comments and questions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide you services.
              You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@razexsolutions.com" className="text-amber-400 hover:underline">
                info@razexsolutions.com
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="inline-block mt-12 text-amber-400 hover:text-amber-300 font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
