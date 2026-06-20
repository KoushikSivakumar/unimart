import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Store } from "lucide-react";
import { products } from "../data/mockProducts";
import { useState } from "react";
import RequestModal from "../components/marketplace/RequestModal";


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-20">
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <Link to="/marketplace" className="mt-4 inline-block text-neutral-600">
          Go back to marketplace
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <Link
        to="/marketplace"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black"
      >
        <ArrowLeft size={16} />
        Back to marketplace
      </Link>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-[520px] w-full object-cover"
          />
        </div>

        <div>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
            {product.category}
          </span>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-3xl font-semibold">₹{product.price}</p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            {product.description}
          </p>

          <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-500">Sold by</p>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">{product.seller}</h2>
                <p className="text-sm text-neutral-500">{product.college}</p>
              </div>

              <Link
                to={`/shop/${product.shopId}`}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium"
              >
                <Store size={16} />
                View shop
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              <MessageCircle size={17} />
              Request to buy
            </button>

            <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold">
              Save product
            </button>
          </div>
        </div>
      </section>
      {isRequestModalOpen && (
        <RequestModal
          product={product}
          onClose={() => setIsRequestModalOpen(false)}
        />
      )}
    </main>
  );
}