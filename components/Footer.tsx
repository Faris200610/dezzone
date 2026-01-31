import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Logo + Dezzone على يمين اللوجو (RTL) */}
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white"
            aria-label="Dezzone - الصفحة الرئيسية"
          >
            <span className="text-xl font-bold">Dezzone</span>
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg border-2 border-white object-contain p-0.5"
              unoptimized
            />
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-white/80">
            قارن الأسعار بين أمازون، نون، والمتاجر الكبرى واشترِ بأفضل سعر.
          </p>
          {/* Contact - Get in Touch */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
              تواصل معنا
            </span>
            <a
              href="mailto:contact@dezzone.com"
              className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-secondary"
              aria-label="راسلنا على contact@dezzone.com"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              contact@dezzone.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            © 2026 Dezzone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
