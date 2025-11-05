export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 sm:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" />
              New: In-browser custom prints
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Your style, your rules.
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Shop premium basics or design your own. Add text, images, and graphics to
              any zone and we’ll craft print‑ready assets for flawless production.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                Shop now
              </a>
              <a
                href="#custom"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Start customizing
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-gray-500">Delivery</dt>
                <dd className="font-semibold">2–5 business days</dd>
              </div>
              <div>
                <dt className="text-gray-500">Quality</dt>
                <dd className="font-semibold">Premium fabrics</dd>
              </div>
              <div>
                <dt className="text-gray-500">Satisfaction</dt>
                <dd className="font-semibold">Free returns 30d</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-4 sm:p-6">
            <div className="h-full w-full rounded-xl bg-white shadow ring-1 ring-gray-100 flex items-center justify-center">
              <div className="text-center px-6 py-10">
                <div className="mx-auto h-24 w-24 rounded-full bg-indigo-50 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-indigo-600" fill="currentColor" aria-hidden>
                    <path d="M21 7l-9-4-9 4 9 4 9-4zm-9 6l-9-4v8l9 4 9-4v-8l-9 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold">Live custom preview</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Move, scale, rotate layers and export print‑ready assets at 300 DPI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
