import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/marketplace/ProductCard.jsx';
import { mockProducts } from '../data/mockProducts.js';

const categories = ['All', ...new Set(mockProducts.map((product) => product.category))];

export default function Marketplace() {
  return (
    <div className="page-shell py-8">
      <section className="soft-card mb-8 overflow-hidden p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Marketplace</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Fresh finds from student sellers.
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
              Browse mock listings for the MVP. Search, filters, and real
              inventory can connect to the backend later.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                className="h-12 w-full rounded-full border border-stone-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-zinc-950"
                placeholder="Search products"
              />
            </label>
            <button className="btn-secondary h-12 px-4 py-0">
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>
        </div>
      </section>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className="shrink-0 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-zinc-700 first:bg-zinc-950 first:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
