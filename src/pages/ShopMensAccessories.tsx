import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { mensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

export default function ShopMensAccessories() {
  const accessoryProducts = mensProducts.filter(product => product.category === "accessories");

  return (
    <>
      <Helmet>
        <title>Men's Designer Accessories | THE OUTNET</title>
        <meta name="description" content="Shop luxury men's designer accessories at up to 70% off. Discover watches, belts, wallets from top fashion brands." />
        <link rel="canonical" href="/shop/mens/accessories" />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <Link to="/shop/mens" className="hover:text-black">Men</Link>
            <span className="mx-2">/</span>
            <span>Accessories</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              MEN'S ACCESSORIES
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your look with luxury designer accessories at unbeatable prices.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/mens" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              All Men
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
            <span className="text-sm px-4 py-2 border border-black bg-black text-white">
              Accessories
            </span>
          </div>

          {/* Products Grid */}
          {accessoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {accessoryProducts.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No accessory products available at the moment.</p>
              <Link to="/shop/mens" className="text-blue-600 hover:underline mt-4 inline-block">
                View all men's products
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}