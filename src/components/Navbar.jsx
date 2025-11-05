import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="text-xl font-extrabold tracking-tight">
              ThreadForge
            </a>
            <nav className="hidden lg:flex items-center gap-6 ml-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">New</a>
              <a href="#" className="hover:text-gray-900">Men</a>
              <a href="#" className="hover:text-gray-900">Women</a>
              <a href="#" className="hover:text-gray-900">Accessories</a>
              <a href="#" className="text-indigo-600 font-medium">Customize</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-gray-300 focus:ring-0"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-semibold text-white">2</span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-gray-300 focus:ring-0"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
                <User className="h-5 w-5" />
              </button>
              <button className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-semibold text-white">2</span>
              </button>
            </div>
            <nav className="grid gap-2 text-sm text-gray-700">
              <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">New</a>
              <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">Men</a>
              <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">Women</a>
              <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">Accessories</a>
              <a href="#" className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-700 font-medium">Customize</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
