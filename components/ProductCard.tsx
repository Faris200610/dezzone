"use client";

import { useState } from "react";
import Image from "next/image";

export type StoreItem = {
  name: string;
  price: string;
  link?: string;
};

type ProductCardProps = {
  image: string;
  title: string;
  stores: StoreItem[];
};

/** Extract numeric value from price string (e.g. "4200 SAR" -> 4200) */
function parsePrice(priceStr: string): number {
  const match = priceStr.replace(/,/g, "").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : Infinity;
}

/** Find index of the store with the lowest price */
function getCheapestIndex(stores: StoreItem[]): number {
  let minIndex = 0;
  let minValue = parsePrice(stores[0]?.price ?? "");
  stores.forEach((store, i) => {
    const value = parsePrice(store.price);
    if (value < minValue) {
      minValue = value;
      minIndex = i;
    }
  });
  return minIndex;
}

export default function ProductCard({ image, title, stores }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const cheapestIndex = getCheapestIndex(stores);

  return (
    <article className="overflow-hidden rounded-xl bg-surface shadow-md transition-shadow hover:shadow-xl">
      {/* Product image */}
      <div className="relative aspect-square w-full bg-background">
        {!imgError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-primary/40">
            <span className="text-4xl">📦</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-primary line-clamp-2">{title}</h3>

        {/* Price rows */}
        <ul className="mt-4 space-y-2">
          {stores.map((store, index) => {
            const isCheapest = index === cheapestIndex;
            return (
              <li
                key={store.name}
                className={`flex flex-wrap items-center justify-between gap-2 rounded-lg px-3 py-2 ${
                  isCheapest ? "bg-green-50" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-primary/90">{store.name}</span>
                  {isCheapest && (
                    <span className="rounded bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
                      أفضل سعر
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-semibold ${isCheapest ? "text-success" : "text-primary"}`}
                  >
                    {store.price}
                  </span>
                  {isCheapest && store.link && (
                    <a
                      href={store.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white transition hover:bg-primary/90"
                    >
                      شراء الآن
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
