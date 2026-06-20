import { Package, Plus, ShoppingBag, Store } from "lucide-react";
import { products } from "../data/mockProducts";
import { Link } from "react-router-dom";

export default function SellerDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-neutral-500">Seller dashboard</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            Manage your shop.
          </h1>
        </div>

        <Link
          to="/dashboard/add-product"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
        >
          <Plus size={17} />
          Add product
        </Link>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <StatCard icon={<Store size={20} />} label="Shop status" value="Active" />
        <StatCard icon={<Package size={20} />} label="Products listed" value="4" />
        <StatCard icon={<ShoppingBag size={20} />} label="Buy requests" value="12" />
      </section>

      <section className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Your products</h2>
          <button className="text-sm font-medium text-neutral-500 hover:text-black">
            View all
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-100 text-neutral-500">
              <tr>
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-neutral-200">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-600">{product.category}</td>
                  <td className="px-4 py-4 font-medium">₹{product.price}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Live
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
        {icon}
      </div>
      <p className="text-sm text-neutral-500">{label}</p>
      <h2 className="mt-1 text-2xl font-semibold">{value}</h2>
    </div>
  );
}