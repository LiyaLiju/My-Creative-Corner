import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

/* ---- Font Setup ---- */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

/* ---- Metadata ---- */
export const metadata: Metadata = {
  title: "My Creative Corner",
  description:
    "Baker, maker & coder — a portfolio of baking recipes, crochet projects, and software engineering work.",
};

/* ---- Root Layout ---- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brown bg-white-warm">
        <Navbar />

        {/* flex-1 makes main expand to fill the space
            between navbar and footer, so the footer
            always stays at the bottom even on short pages */}
        <main className="flex-1">{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
