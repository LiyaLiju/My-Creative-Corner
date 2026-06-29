"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FlowerIcon from "./FlowerIcon";

/* ---- Nav Links ---- */
const navLinks = [
  { href: "/", label: "home" },
  { href: "/baking", label: "baking" },
  { href: "/crochet", label: "crochet" },
  { href: "/coding", label: "coding" },
  { href: "/order", label: "order" },
];

export default function Navbar() {
  // Controls whether mobile menu is open or closed
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white-warm/95 backdrop-blur-sm border-b border-cream">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ---- Logo ---- */}
        <Link href="/" className="flex items-center gap-2 group">
          <FlowerIcon size={22} />
          <span className="font-serif text-lg font-semibold text-brown">
            my <span className="text-pink">creative</span> corner
          </span>
        </Link>

        {/* ---- Desktop Nav Links ---- */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors relative pb-0.5 ${
                  isActive
                    ? "text-green-dark font-medium"
                    : "text-brown-light hover:text-pink"
                }`}
              >
                {link.label}

                {/* Pink underline on active link */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ---- Mobile Hamburger Button ---- */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-0.5 bg-brown transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-brown transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-brown transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* ---- Mobile Dropdown Menu ---- */}
      {/* Only renders when mobileOpen is true */}
      {mobileOpen && (
        <div className="md:hidden border-t border-cream bg-white-warm px-6 pb-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                // Close menu when a link is tapped
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm border-b border-cream/50 ${
                  isActive
                    ? "text-pink font-medium"
                    : "text-brown-light"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
