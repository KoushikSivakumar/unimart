import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Store, ShoppingBag } from "lucide-react";
import { products } from "../data/mockProducts";
import ProductCard from "../components/marketplace/ProductCard";

export default function Landing() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
            <Sparkles size={15} />
            A marketplace built for students
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
            Buy, sell, and discover student-made things on campus.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            Create your own campus shop, list products or services, and let other
            students request to buy directly from you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Explore marketplace
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/create-shop"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-black hover:border-neutral-400"
            >
              Start your shop
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="rounded-[1.5rem] bg-neutral-100 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Trending on campus
                </p>
                <h2 className="text-xl font-semibold">Today’s finds</h2>
              </div>

              <div className="rounded-full bg-white p-3">
                <ShoppingBag size={20} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            title="Student storefronts"
            text="Every seller gets a clean public shop page with their products, profile, and contact flow."
          />
          <Feature
            title="No payment pressure"
            text="For MVP, buyers only send requests. Sellers can confirm manually through chat or in person."
          />
          <Feature
            title="Campus-first discovery"
            text="Browse notes, accessories, services, food, art, design, and student-made goods."
          />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-2 w-14 rounded-full bg-black" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-neutral-600">{text}</p>
    </div>
  );
}