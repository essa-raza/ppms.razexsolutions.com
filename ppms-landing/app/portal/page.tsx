import type { Metadata } from "next";
import PortalLogin from "@/components/portal/PortalLogin";

export const metadata: Metadata = {
  title: "Portal — PPMS by Razex Solutions",
  description: "Sign in to the PPMS platform portal.",
};

export default function PortalPage() {
  return <PortalLogin />;
}
