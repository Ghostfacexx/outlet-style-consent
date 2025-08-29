import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { womensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

// Get unique designers
const designers = Array.from(new Set(womensProducts.map(product => product.brand))).sort();

export default function ShopDesigners() {
  return (
    <>
      <Helmet>
        <title>Designer Fashion | THE OUTNET</title>
        <meta name="description" content="Shop luxury designer fashion from top fashion houses at up to 70% off. Discover collections from Gucci, Valentino, and more." />
        <link rel="canonical" href="/shop/designers" />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <span>Designers</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              DESIGNERS
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover luxury fashion from the world's most coveted designers. Each piece curated for the discerning fashion lover.
            </p>
          </div>

          {/* Designer List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {designers.map((designer) => (
              <Link
                key={designer}
                to={`/shop/designers/${designer.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="group block p-6 border border-gray-200 hover:border-black transition-colors text-center"
              >
                <h3 className="text-lg font-medium tracking-wide group-hover:text-black transition-colors">
                  {designer}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {womensProducts.filter(p => p.brand === designer).length} products
                </p>
              </Link>
            ))}
          </div>

          {/* Featured Products */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-light text-center mb-8">Featured Designer Pieces</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {womensProducts.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={`${product.brand} ${product.title}`}
                  img={product.image}
                  price={product.discountedPrice}
                  old={product.originalPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}