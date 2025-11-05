import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
