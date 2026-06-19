import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Sparkles, Store } from 'lucide-react';
import ProductCard from '../components/marketplace/ProductCard.jsx';
import { getShopById } from '../data/mockProducts.js';

export default function ShopPage() {
  const { shopId } = useParams();
  const shop = getShopById(shopId);

  if (!shop) {
    return (
      <div className="page-shell py-12">
        <div className="soft-card p-8">
          <p className="text-xl font-black">Shop not found.</p>
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

      <section className="soft-card mb-8 p-6 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-zinc-950 text-white">
              <Store size={28} />
            </div>
            <p className="eyebrow">Student storefront</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              {shop.name}
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
              Run by {shop.seller}. A compact storefront for campus-friendly
              products and request-based buying.
            </p>
          </div>

          <div className="grid gap-3 text-sm font-bold text-zinc-600 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-3">
              <MapPin size={17} />
              {shop.campus}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-3">
              <Sparkles size={17} />
              {shop.productCount} listings
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shop.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
