import { Link, NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, ShoppingBag, Store } from 'lucide-react';

const navItems = [
  { label: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { label: 'Create Shop', href: '/create-shop', icon: PlusCircle },
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
      <nav className="page-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white">
            <Store size={21} />
          </span>
          <span>
            <span className="block text-lg font-black leading-5">UniMart</span>
            <span className="hidden text-xs font-medium text-zinc-500 sm:block">
              Campus marketplace
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'text-zinc-600 hover:bg-white hover:text-zinc-950',
                  ].join(' ')
                }
              >
                <Icon size={17} />
                {item.label}
              </NavLink>
            );
          })}
        </div>

        <Link to="/marketplace" className="btn-primary px-4 py-2.5">
          Browse
        </Link>
      </nav>

      <div className="page-shell pb-4 md:hidden">
        <div className="grid grid-cols-3 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold',
                    isActive ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-600',
                  ].join(' ')
                }
              >
                <Icon size={15} />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}
