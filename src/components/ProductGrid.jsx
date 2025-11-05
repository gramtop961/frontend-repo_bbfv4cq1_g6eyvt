import { useMemo, useState } from 'react';
import { Filter } from 'lucide-react';

const seedProducts = [
  {
    id: 'sku-ts-001',
    name: 'Premium Tee',
    category: 'T-Shirt',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 24,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    customizable: true,
  },
  {
    id: 'sku-hd-002',
    name: 'Cozy Hoodie',
    category: 'Hoodie',
    colors: ['Gray', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 56,
    image: 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1200&auto=format&fit=crop',
    customizable: true,
  },
  {
    id: 'sku-cp-003',
    name: 'Classic Cap',
    category: 'Cap',
    colors: ['Khaki', 'Black', 'Blue'],
    sizes: ['One Size'],
    price: 18,
    image: 'https://images.unsplash.com/photo-1662973947945-2638d3d733a2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQ2FwfGVufDB8MHx8fDE3NjIzNTg4NjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    customizable: true,
  },
  {
    id: 'sku-sw-004',
    name: 'Crewneck Sweatshirt',
    category: 'Sweatshirt',
    colors: ['Oat', 'Forest', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 48,
    image: 'https://images.unsplash.com/photo-1758225709308-189d0b98787b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmV3bmVjayUyMFN3ZWF0c2hpcnR8ZW58MHwwfHx8MTc2MjM1ODg2MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    customizable: true,
  },
  {
    id: 'sku-ts-005',
    name: 'Heavyweight Tee',
    category: 'T-Shirt',
    colors: ['White', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 32,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    customizable: true,
  },
  {
    id: 'sku-hd-006',
    name: 'Zip Hoodie',
    category: 'Hoodie',
    colors: ['Navy', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 62,
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop',
    customizable: true,
  },
  {
    id: 'sku-sw-007',
    name: 'Fleece Sweatshirt',
    category: 'Sweatshirt',
    colors: ['Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 52,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop',
    customizable: true,
  },
  {
    id: 'sku-ts-008',
    name: 'Organic Tee',
    category: 'T-Shirt',
    colors: ['White', 'Sage'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 28,
    image: 'https://images.unsplash.com/photo-1675239514439-1c128b0cffcd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwVGVlfGVufDB8MHx8fDE3NjIzNTg4NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    customizable: true,
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-sm transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-500">{product.category} · {product.colors.join(', ')}</p>
          </div>
          {product.customizable && (
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">Custom</span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${product.price}</span>
          <div className="flex gap-2">
            <button className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium hover:bg-gray-50">Add</button>
            {product.customizable && (
              <button
                onClick={() => alert('Open customizer – server-side editor will generate print assets in the full app.')}
                className="rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-semibold hover:bg-black"
              >
                Customize
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(80);
  const [page, setPage] = useState(1);
  const perPage = 8;

  const categories = ['All', 'T-Shirt', 'Hoodie', 'Sweatshirt', 'Cap'];

  const filtered = useMemo(() => {
    return seedProducts
      .filter((p) => (category === 'All' ? true : p.category === category))
      .filter((p) => p.price <= maxPrice)
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  }, [category, maxPrice, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <section id="shop" className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured products</h2>
            <p className="text-gray-600 mt-1">Browse by category, search, and filter by price.</p>
          </div>
          <div className="grid grid-cols-2 sm:flex items-center gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="appearance-none w-40 rounded-full border border-gray-200 bg-white py-2 pl-9 pr-8 text-sm outline-none focus:border-gray-300"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search"
                className="w-40 sm:w-56 rounded-full border border-gray-200 bg-white py-2 px-4 text-sm outline-none focus:border-gray-300"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600">Max ${maxPrice}</label>
              <input
                type="range"
                min={10}
                max={80}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setPage(1);
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="text-sm text-gray-700">
            Page <span className="font-semibold">{page}</span> of <span className="font-semibold">{totalPages}</span>
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        <div id="custom" className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 px-6 py-5 text-indigo-900">
          <h3 className="font-semibold">Design your own</h3>
          <p className="text-sm opacity-90 mt-1">
            Our full experience includes a powerful editor with text, images, layer ordering, and server‑side generation of print‑ready assets (PNG 300 DPI and PDF when vector). This preview focuses on the storefront UI.
          </p>
        </div>
      </div>
    </section>
  );
}
