import { Link } from "react-router-dom";

export default function ProductCard({ product, compact = false }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className={compact ? "h-36 overflow-hidden" : "h-56 overflow-hidden"}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
            {product.category}
          </span>
          <span className="font-semibold">₹{product.price}</span>
        </div>

        <h3 className="line-clamp-1 font-semibold text-neutral-950">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          by {product.seller}
        </p>
      </div>
    </Link>
  );
}