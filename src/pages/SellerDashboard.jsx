import { Link } from 'react-router-dom';
import { Eye, MessageSquare, PackagePlus, Pencil, Store } from 'lucide-react';
import { mockProducts } from '../data/mockProducts.js';

const stats = [
  { label: 'Active listings', value: '6' },
  { label: 'Buy requests', value: '12' },
  { label: 'Pending replies', value: '3' },
];

export default function SellerDashboard() {
  return (
    <div className="page-shell py-8">
      <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Seller dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Manage your campus shop.
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            Track listings, preview your storefront, and handle simple request
            messages without checkout or payments.
          </p>
        </div>

        <Link to="/create-shop" className="btn-primary">
          <PackagePlus size={18} />
          Add product
        </Link>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="soft-card p-6">
            <p className="text-sm font-bold text-zinc-500">{stat.label}</p>
            <p className="mt-3 text-4xl font-black">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="soft-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-zinc-950 text-white">
                <Store size={24} />
              </div>
              <h2 className="text-2xl font-black">Sugar Lab</h2>
              <p className="mt-3 leading-7 text-zinc-600">
                Homemade snacks and tiny dessert boxes for hostel study nights.
              </p>
            </div>
            <button className="btn-secondary px-4 py-2">
              <Pencil size={16} />
              Edit
            </button>
          </div>

          <div className="mt-6 grid gap-3">
            <Link to="/shop/sugar-lab" className="btn-primary">
              <Eye size={18} />
              View storefront
            </Link>
            <button className="btn-secondary">
              <MessageSquare size={18} />
              View requests
            </button>
          </div>
        </div>

        <div className="soft-card overflow-hidden">
          <div className="border-b border-stone-200 p-5">
            <h2 className="text-xl font-black">Recent listings</h2>
          </div>
          <div className="divide-y divide-stone-200">
            {mockProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[72px_1fr_auto] items-center gap-4 p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[72px] w-[72px] rounded-2xl object-cover"
                />
                <div>
                  <p className="font-black">{product.name}</p>
                  <p className="text-sm text-zinc-500">
                    {product.category} · Rs. {product.price}
                  </p>
                </div>
                <button className="rounded-full border border-stone-300 p-3">
                  <Pencil size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
