"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroPhone() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
      {/* Phone mockup container */}
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] border-[10px] border-black bg-black shadow-2xl ring-2 ring-black/30">
        {/* iOS-style notch */}
        <div
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-[1rem] bg-[#0a0a0a] px-8 py-1.5 sm:px-10 sm:py-2"
          style={{ width: "min(36%, 120px)" }}
          aria-hidden
        />
        {/* In-app screen content - Price Comparison Scenario */}
        <div className="absolute inset-0 flex flex-col bg-background pt-5 sm:pt-6">
          {/* App Header */}
          <header className="flex shrink-0 items-center justify-between border-b border-primary/10 bg-surface px-2.5 py-1.5 shadow-sm">
            <span className="text-[10px] font-bold text-primary">Dezzone</span>
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-label="بحث"
            >
              <Search className="h-3 w-3" aria-hidden />
            </button>
          </header>

          {/* Scrollable content */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-2">
            {/* Product Summary */}
            <div className="flex flex-col items-center">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-primary/5 shadow-sm">
                <Image
                  src="/Apple%20iPhone15Pro256GB.jpg"
                  alt=""
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                  unoptimized
                />
              </div>
              <p className="mt-1.5 line-clamp-2 text-center text-[10px] font-medium text-primary">
                Apple iPhone 15 Pro Max - 256GB
              </p>
            </div>

            {/* Comparison List */}
            <div className="mt-2 space-y-1">
              {/* Row 1 - Expensive */}
              <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-surface px-2 py-1.5 shadow-sm">
                <span className="text-[10px] text-gray-500">Amazon SA</span>
                <span className="text-[10px] font-medium text-gray-600">
                  4,899 SAR
                </span>
              </div>
              {/* Row 2 - Winner */}
              <div className="flex flex-wrap items-center justify-between gap-1 rounded-lg border-2 border-success/30 bg-success/5 px-2 py-1.5 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold text-success">Noon</span>
                  <span className="rounded bg-secondary px-1 py-0.5 text-[9px] font-semibold text-primary">
                    وفر 400 ريال
                  </span>
                </div>
                <span className="text-[10px] font-bold text-success">
                  4,499 SAR
                </span>
              </div>
              {/* Row 3 - Another option */}
              <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-surface px-2 py-1.5 shadow-sm">
                <span className="text-[10px] text-gray-500">
                  Jarir Bookstore
                </span>
                <span className="text-[10px] font-medium text-gray-600">
                  4,950 SAR
                </span>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-3 shrink-0 pb-1">
              <button
                type="button"
                className="w-full rounded-lg bg-secondary py-2 text-[10px] font-bold text-primary shadow-sm transition hover:bg-secondary/90"
              >
                اذهب لأرخص عرض
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating comparison card */}
      <div
        className="absolute -bottom-2 -right-2 z-10 w-[calc(100%+0.5rem)] max-w-[240px] rounded-xl border border-primary/10 bg-surface p-4 shadow-lg sm:-right-4 sm:bottom-4 sm:max-w-[260px]"
        style={{
          boxShadow: "0 10px 40px -10px rgba(0, 59, 92, 0.2)",
        }}
      >
        <p className="text-xs font-medium uppercase tracking-wide text-primary/70">
          أفضل سعر
        </p>
        <div className="mt-2 flex flex-wrap items-baseline gap-2 text-sm">
          <span className="text-gray-500 line-through">Amazon: 400 SAR</span>
          <span className="font-semibold text-success">Noon: 350 SAR</span>
        </div>
      </div>
    </div>
  );
}
