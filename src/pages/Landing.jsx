import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Search, Store } from 'lucide-react';
import ProductCard from '../components/marketplace/ProductCard.jsx';
import { mockProducts } from '../data/mockProducts.js';

const steps = [
  {
    title: 'Browse campus drops',
    copy: 'Find snacks, thrift pieces, stationery, art, and student services in one place.',
    icon: Search,
  },
  {
    title: 'Open a student shop',
    copy: 'Set up a simple storefront and list products without payment setup.',
    icon: Store,
  },
  {
    title: 'Request to buy',
    copy: 'Send the seller a short message and finish the handoff on campus.',
    icon: MessageCircle,
  },
];

export default function Landing() {
  return (
    <div className="page-shell py-8 sm:py-12">
      <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7">
          <p className="eyebrow">Student commerce, made local</p>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Buy and sell around campus.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600">
              UniMart helps students discover product drops, student-run shops,
              and useful services without adding checkout complexity to the MVP.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/marketplace" className="btn-primary">
              Browse marketplace <ArrowRight size={18} />
            </Link>
            <Link to="/create-shop" className="btn-secondary">
              Create a shop
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {mockProducts.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="soft-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
                <Icon size={22} />
              </div>
              <h2 className="text-xl font-black">{step.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{step.copy}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
