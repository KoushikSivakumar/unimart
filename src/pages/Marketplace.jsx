import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products } from "../data/mockProducts";
import ProductCard from "../components/marketplace/ProductCard";

const categories = [
  "All",
  "Study",
  "Design",
  "Accessories",
  "Lifestyle",
  "Food",
  "Services",
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <section className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-neutral-500">Marketplace</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            Discover what students are selling.
          </h1>
        </div>

        <button className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </section>

      <section className="mb-8 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3 rounded-2xl bg-neutral-100 px-4 py-3">
          <Search size={18} className="text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search notes, keychains, posters, snacks..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {filteredProducts.length > 0 ? (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <EmptyState searchQuery={searchQuery} activeCategory={activeCategory} />
      )}
    </main>
  );
}

function EmptyState({ searchQuery, activeCategory }) {
  return (
    <section className="rounded-[2rem] border border-dashed border-neutral-300 bg-white p-10 text-center">
      <h2 className="text-2xl font-semibold">No products found</h2>

      <p className="mx-auto mt-3 max-w-md leading-7 text-neutral-600">
        No products matched{" "}
        {searchQuery ? <span className="font-medium">“{searchQuery}”</span> : "your search"}{" "}
        {activeCategory !== "All" && (
          <>
            in <span className="font-medium">{activeCategory}</span>
          </>
        )}
        .
      </p>

      <p className="mt-2 text-sm text-neutral-500">
        Try another keyword or switch categories.
      </p>
    </section>
  );
}