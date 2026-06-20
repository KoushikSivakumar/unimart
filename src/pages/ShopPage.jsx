import { useParams } from "react-router-dom";
import { AtSign, MapPin } from "lucide-react";
import { products } from "../data/mockProducts";
import ProductCard from "../components/marketplace/ProductCard";

export default function ShopPage() {
  const { shopId } = useParams();
  const shopProducts = products.filter((product) => product.shopId === shopId);
  const seller = shopProducts[0]?.seller || "Student Seller";

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
        <div className="h-48 bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-400" />

        <div className="p-6 md:p-8">
          <div className="-mt-20 mb-5 h-28 w-28 rounded-3xl border-4 border-white bg-neutral-100 shadow-sm" />

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">
                {seller}
              </h1>

              <p className="mt-3 max-w-xl leading-7 text-neutral-600">
                A student-run shop selling handmade goods, study materials,
                creative services, and campus-friendly products.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={15} />
                  Sathyabama University
                </span>
                <span className="inline-flex items-center gap-1">
                  <AtSign size={15} />
                  @{seller.toLowerCase().replaceAll(" ", "")}
                </span>
              </div>
            </div>

            <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
              Contact seller
            </button>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500">Products</p>
            <h2 className="text-2xl font-semibold">Available from this shop</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}