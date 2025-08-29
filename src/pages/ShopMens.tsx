import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { mensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

export default function ShopMens() {
  const location = useLocation();
  const isJustIn = location.pathname.includes('/just-in');
  const isBestsellers = location.pathname.includes('/bestsellers');
  
  // Filter products based on route
  let filteredProducts = mensProducts;
  let pageTitle = "MEN";
  let pageDescription = "Discover luxury designer menswear at unbeatable prices. Shop the latest collections from top fashion houses.";
  
  if (isJustIn) {
    filteredProducts = mensProducts.filter(product => product.isJustIn || mensProducts.indexOf(product) < 12);
    pageTitle = "MEN - JUST IN";
    pageDescription = "Shop the latest men's designer arrivals at unbeatable prices.";
  } else if (isBestsellers) {
    // Show different products for bestsellers (skip first 12, take next 12)
    filteredProducts = mensProducts.slice(12, 24);
    pageTitle = "MEN - BESTSELLERS";
    pageDescription = "Shop our most popular men's designer pieces at unbeatable prices.";
  }

  return (
    <>
      <Helmet>
        <title>Shop {pageTitle} | THE OUTNET</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={location.pathname} />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <span>Men</span>
            {isJustIn && (
              <>
                <span className="mx-2">/</span>
                <span>Just In</span>
              </>
            )}
            {isBestsellers && (
              <>
                <span className="mx-2">/</span>
                <span>Bestsellers</span>
              </>
            )}
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              {pageTitle}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {pageDescription}
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/mens" className={`text-sm px-4 py-2 border transition-colors ${!isJustIn && !isBestsellers ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}>
              All Men
            </Link>
            <Link to="/shop/mens/just-in" className={`text-sm px-4 py-2 border transition-colors ${isJustIn ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}>
              Just In
            </Link>
            <Link to="/shop/mens/bestsellers" className={`text-sm px-4 py-2 border transition-colors ${isBestsellers ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}>
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

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
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
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found in this category.</p>
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