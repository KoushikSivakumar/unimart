import { Link } from "react-router-dom";
import { ShoppingBag, Store, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#F7F7F5]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <ShoppingBag size={18} />
          </div>
          <span>CampusCart</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
          <Link to="/marketplace" className="hover:text-black">
            Marketplace
          </Link>
          <Link to="/create-shop" className="hover:text-black">
            Start selling
          </Link>
          <Link to="/dashboard" className="hover:text-black">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-white md:block"
          >
            Login
          </Link>

          <Link
            to="/create-shop"
            className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            <Store size={16} />
            Sell
          </Link>

          <button className="rounded-full border border-neutral-200 bg-white p-2">
            <User size={17} />
          </button>
        </div>
      </nav>
    </header>
  );
}