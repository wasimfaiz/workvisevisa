import TermsOfServicePage, { metadata as baseMetadata } from "../terms-of-service/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: "https://www.workwisevisa.com/terms-of-service",
  },
};

export default TermsOfServicePage;
