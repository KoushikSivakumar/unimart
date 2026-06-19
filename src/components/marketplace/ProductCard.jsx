import { Link } from 'react-router-dom';
import { MapPin, Store } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="soft-card group overflow-hidden">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              to={`/product/${product.id}`}
              className="text-lg font-black leading-tight hover:underline"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-sm text-zinc-500">{product.category}</p>
          </div>
          <p className="rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-zinc-950">
            Rs. {product.price}
          </p>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-zinc-600">
          {product.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <Link
            to={`/shop/${product.shopId}`}
            className="inline-flex items-center gap-1.5 font-semibold text-zinc-700 hover:text-zinc-950"
          >
            <Store size={15} />
            {product.shopName}
          </Link>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} />
            {product.campus}
          </span>
        </div>
      </div>
    </article>
  );
}
