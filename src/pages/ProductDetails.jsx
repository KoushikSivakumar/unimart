import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShieldCheck, Store } from 'lucide-react';
import { getProductById } from '../data/mockProducts.js';

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="page-shell py-12">
        <div className="soft-card p-8">
          <p className="text-xl font-black">Product not found.</p>
          <Link to="/marketplace" className="mt-5 inline-flex text-sm font-bold underline">
            Back to marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell py-8">
      <Link
        to="/marketplace"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-950"
      >
        <ArrowLeft size={17} />
        Back to marketplace
      </Link>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="soft-card overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>

        <div className="soft-card p-6 sm:p-8">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-black">Rs. {product.price}</p>
          <p className="mt-5 leading-8 text-zinc-600">{product.description}</p>

          <div className="my-7 grid gap-3 sm:grid-cols-2">
            <Link to={`/shop/${product.shopId}`} className="rounded-3xl bg-stone-100 p-4">
              <span className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                <Store size={16} />
                Seller
              </span>
              <span className="mt-2 block text-lg font-black">{product.shopName}</span>
            </Link>
            <div className="rounded-3xl bg-amber-100 p-4">
              <span className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                <ShieldCheck size={16} />
                Status
              </span>
              <span className="mt-2 block text-lg font-black">{product.stock}</span>
            </div>
          </div>

          <button className="btn-primary w-full text-base">
            <MessageCircle size={19} />
            Request to buy
          </button>
          <p className="mt-3 text-center text-sm text-zinc-500">
            No payments in the MVP. This sends a simple buy request.
          </p>
        </div>
      </section>
    </div>
  );
}
