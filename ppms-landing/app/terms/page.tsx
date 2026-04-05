import Link from "next/link";
import { Fuel } from "lucide-react";

export const metadata = {
  title: "Terms of Service | PPMS by Razex Solutions",
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PPMS (&quot;the Service&quot;), operated by Razex Solutions, you agree
              to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Use of the Service</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms.
              You agree not to use the Service in any way that violates applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Subscription and Billing</h2>
            <p>
              Paid subscriptions are billed in advance on a monthly or annual basis. Cancellations
              take effect at the end of the current billing period. Refunds are not provided for
              partial subscription periods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by Razex Solutions
              and are protected by international copyright, trademark, patent, trade secret, and other
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              Razex Solutions shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of the Service or any content obtained through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contact Us</h2>
            <p>
              For questions about these Terms, contact us at{" "}
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
