import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Shree Shyam Enterprise",
    default:
      "Shree Shyam Enterprise | Precision Aluminium Flanges & Castings",
  },
  description:
    "ISO 9001:2015 certified manufacturer of precision aluminium flanges and custom castings in Ankleshwar, Gujarat. Trusted by BHEL, Aditya Birla, and leading industrial companies.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shree Shyam Enterprise",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
