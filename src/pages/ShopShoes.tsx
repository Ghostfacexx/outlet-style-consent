import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { womensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

const shoesProducts = womensProducts.filter(product => product.category === 'shoes');

export default function ShopShoes() {
  return (
    <>
      <Helmet>
        <title>Women's Designer Shoes | THE OUTNET</title>
        <meta name="description" content="Shop luxury women's designer shoes at up to 70% off. Discover boots, heels, sneakers, and more from top fashion brands." />
        <link rel="canonical" href="/shop/shoes" />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <span>Shoes</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              SHOES
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Step into luxury with our collection of designer shoes. From elegant heels to comfortable sneakers.
            </p>
          </div>

          {/* Subcategory Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/shoes/heels" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Heels
            </Link>
            <Link to="/shop/shoes/flats" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Flats
            </Link>
            <Link to="/shop/shoes/boots" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Boots
            </Link>
            <Link to="/shop/shoes/sneakers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Sneakers
            </Link>
            <Link to="/shop/shoes/sandals" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Sandals
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {shoesProducts.map((product) => (
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