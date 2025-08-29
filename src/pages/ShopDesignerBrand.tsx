import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { womensProducts, mensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

export default function ShopDesignerBrand() {
  const { brand } = useParams();
  
  // Get all products from both genders for the specific brand
  const allProducts = [...womensProducts, ...mensProducts];
  const brandProducts = allProducts.filter(product => 
    product.brand.toLowerCase().replace(/\s+/g, '-') === brand?.toLowerCase()
  );
  
  // Get the brand name for display
  const brandName = brandProducts[0]?.brand || brand?.replace(/-/g, ' ').toUpperCase();

  return (
    <>
      <Helmet>
        <title>{brandName} Designer Fashion | THE OUTNET</title>
        <meta name="description" content={`Shop luxury ${brandName} designer fashion at up to 70% off. Discover clothing, shoes, bags and accessories.`} />
        <link rel="canonical" href={`/shop/designers/${brand}`} />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <Link to="/shop/designers" className="hover:text-black">Designers</Link>
            <span className="mx-2">/</span>
            <span>{brandName}</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              {brandName}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover luxury {brandName} designer pieces at unbeatable prices. Shop the latest collections with up to 70% off.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/designers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              All Designers
            </Link>
            <span className="text-sm px-4 py-2 border border-black bg-black text-white">
              {brandName}
            </span>
          </div>

          {/* Products Grid */}
          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {brandProducts.map((product) => (
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
              <p className="text-gray-600">No products found for {brandName}.</p>
              <Link to="/shop/designers" className="text-blue-600 hover:underline mt-4 inline-block">
                View all designers
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}