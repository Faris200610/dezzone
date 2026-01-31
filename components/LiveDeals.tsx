import ProductCard, { type StoreItem } from "@/components/ProductCard";

type ProductItem = {
  image: string;
  title: string;
  stores: StoreItem[];
};

const dummyProducts: ProductItem[] = [
  {
    image: "/Apple%20iPhone15Pro256GB.jpg",
    title: "Apple iPhone 15 Pro 256GB",
    stores: [
      { name: "Amazon", price: "4200 SAR", link: "#" },
      { name: "Noon", price: "4150 SAR", link: "#" },
      { name: "Extra", price: "4300 SAR", link: "#" },
    ],
  },
  {
    image: "/SonyWH1000XM5.jpg",
    title: "Sony WH-1000XM5 سماعات لاسلكية",
    stores: [
      { name: "Amazon", price: "1200 SAR", link: "#" },
      { name: "Noon", price: "1350 SAR", link: "#" },
      { name: "Extra", price: "1180 SAR", link: "#" },
    ],
  },
  {
    image: "/Apple-20.jpg",
    title: "MacBook Air M3 13 بوصة",
    stores: [
      { name: "Amazon", price: "4999 SAR", link: "#" },
      { name: "Noon", price: "4850 SAR", link: "#" },
      { name: "Extra", price: "5100 SAR", link: "#" },
    ],
  },
  {
    image: "/SamsungGalaxyWatch6.jpg",
    title: "Samsung Galaxy Watch 6",
    stores: [
      { name: "Amazon", price: "899 SAR", link: "#" },
      { name: "Noon", price: "849 SAR", link: "#" },
      { name: "Extra", price: "920 SAR", link: "#" },
    ],
  },
];

export default function LiveDeals() {
  return (
    <section
        id="products"
        className="py-16 sm:py-20"
        aria-labelledby="live-deals-heading"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="live-deals-heading"
          className="text-center text-3xl font-bold text-primary sm:text-4xl"
        >
          منتجات نرشحها لك
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {dummyProducts.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
              stores={product.stores}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
