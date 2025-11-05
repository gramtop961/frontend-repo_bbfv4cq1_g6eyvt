export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ThreadForge. All rights reserved.</p>
          <p>Built for speed • Responsive • Accessible</p>
        </div>
      </div>
    </footer>
  );
}
