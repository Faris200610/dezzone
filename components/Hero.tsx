import HeroPhone from "./HeroPhone";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      {/* Subtle gradient + pattern for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #003B5C 1px, transparent 1px),
                            radial-gradient(circle at 80% 50%, #003B5C 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-secondary/[0.02]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text block - Right in RTL (first in DOM) */}
          <div className="order-2 flex max-w-xl flex-col items-center text-center lg:order-1 lg:items-start lg:text-right">
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl"
            >
              ليه تدفع أكتر والمنتج نفسه أرخص؟
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              قارن الأسعار بين أمازون، نون، والمتاجر الكبرى بضغطة زر.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#search"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white shadow-sm transition hover:bg-primary/90"
              >
                جرب البحث الآن
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary/30 bg-transparent px-6 py-3.5 text-base font-medium text-primary transition hover:border-primary hover:bg-primary/5"
              >
                شاهد الفيديو
              </a>
            </div>
          </div>

          {/* Visual block - Left in RTL (phone + floating card) */}
          <div className="order-1 flex flex-1 justify-center lg:order-2">
            <HeroPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
