import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { womensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop Women's Designer Fashion | THE OUTNET</title>
        <meta name="description" content="Discover luxury women's designer fashion at up to 70% off. Shop clothing, shoes, bags and accessories from top fashion brands." />
        <link rel="canonical" href="/shop" />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <span>Shop</span>
            <span className="mx-2">/</span>
            <span>Women</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              WOMEN
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover luxury designer fashion at unbeatable prices. Shop the latest collections from top fashion houses.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/just-in" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Just In
            </Link>
            <Link to="/shop/bestsellers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Bestsellers
            </Link>
            <Link to="/shop/designers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Designers
            </Link>
            <Link to="/shop/clothing" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Clothing
            </Link>
            <Link to="/shop/shoes" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Shoes
            </Link>
            <Link to="/shop/bags" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Bags
            </Link>
            <Link to="/shop/accessories" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Accessories
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {womensProducts.map((product) => (
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

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-300 text-sm hover:border-black transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </main>
    </>
  );
}