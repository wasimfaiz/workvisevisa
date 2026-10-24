import RefundPolicyPage, { metadata as baseMetadata } from "../refund-policy/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: "https://www.workwisevisa.com/refund-policy",
  },
};

export default RefundPolicyPage;
