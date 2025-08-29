import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ShopMens() {
  return (
    <>
      <Helmet>
        <title>Shop Men's Designer Fashion | THE OUTNET</title>
        <meta name="description" content="Discover luxury men's designer fashion at up to 70% off. Shop clothing, shoes, accessories from top fashion brands." />
        <link rel="canonical" href="/shop/mens" />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <span>Shop</span>
            <span className="mx-2">/</span>
            <span>Men</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              MEN
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover luxury designer menswear at unbeatable prices. Shop the latest collections from top fashion houses.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/mens/just-in" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Just In
            </Link>
            <Link to="/shop/mens/bestsellers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Bestsellers
            </Link>
            <Link to="/shop/mens/designers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Designers
            </Link>
            <Link to="/shop/mens/clothing" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Clothing
            </Link>
            <Link to="/shop/mens/shoes" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Shoes
            </Link>
            <Link to="/shop/mens/bags" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Bags
            </Link>
            <Link to="/shop/mens/accessories" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Accessories
            </Link>
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center py-20">
            <h2 className="text-2xl font-light text-gray-600 mb-4">Men's Collection Coming Soon</h2>
            <p className="text-gray-500">We're currently expanding our men's designer collection. Check back soon for amazing deals!</p>
          </div>
        </div>
      </main>
    </>
  );
}