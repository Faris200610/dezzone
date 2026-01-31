import { Info } from "lucide-react";

export default function DisclaimerStrip() {
  return (
    <section
      className="w-full bg-slate-100 py-4"
      aria-label="إخلاء مسؤولية الشراكة"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 px-4 text-center sm:px-6">
        <Info className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
        <p className="text-sm text-slate-500">
          بصفتنا شركاء لأمازون والمتاجر الكبرى، فإننا نكسب من عمليات الشراء المؤهلة.
        </p>
      </div>
    </section>
  );
}
