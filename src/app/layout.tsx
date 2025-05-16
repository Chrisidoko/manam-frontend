import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Navigation } from "@/components/ui/Navbar";
// import Footer from "@/components/ui/Footer";
import "@/app/globals.css";
import PersistentLayout from "./PersistentLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // metadataBase: new URL("mannamprofessionalservices.com"),
  title: "Manam Professional Services",
  description:
    "Manam Professional Services, for credibility, and expertise in management consulting, training and Tax & Assurance services",
  keywords: ["Management Consulting", "Training", "Tax & Assurance services."],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navigation />
        {children}
        <Footer /> */}
        <PersistentLayout>{children}</PersistentLayout>
      </body>
    </html>
  );
}
