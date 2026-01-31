"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "عروض اليوم", href: "#products" },
  { label: "اتصل بنا", href: "mailto:contact@dezzone.com" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo: Dezzone على يمين اللوجو (RTL) */}
        <a
          href="#"
          className="flex items-center gap-2 text-primary"
          aria-label="Dezzone - الصفحة الرئيسية"
        >
          <span className="text-xl font-bold md:text-2xl">Dezzone</span>
          <Image
            src="/logo.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
            unoptimized
          />
        </a>

        {/* Center links - hidden on mobile */}
        <div className="hidden flex-1 justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary/90 transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - left in RTL */}
        <div className="hidden md:block">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
          >
            حمل التطبيق
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary hover:bg-primary/10 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-primary/10 bg-surface md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-primary transition hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg bg-primary px-4 py-3 font-medium text-white transition hover:bg-primary/90"
            >
              حمل التطبيق
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
