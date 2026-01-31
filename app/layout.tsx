import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Dezzone | قارن واشترِ بأرخص سعر",
  description:
    "محرك البحث الذكي لمقارنة الأسعار بين أمازون، نون، والمتاجر السعودية. لا تدفع أكثر من اللازم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
