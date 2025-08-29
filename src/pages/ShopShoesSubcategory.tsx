import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { womensProducts } from "@/data/theoutnet-products";
import ProductCard from "@/components/ProductCard";

export default function ShopShoesSubcategory() {
  const { subcategory } = useParams();
  
  // Filter shoes by subcategory
  const shoeProducts = womensProducts.filter(product => 
    product.category === "shoes" && 
    (subcategory === 'all' || 
     product.subcategory === subcategory ||
     product.title.toLowerCase().includes(subcategory?.toLowerCase() || ''))
  );
  
  const subcategoryTitle = subcategory?.replace(/-/g, ' ').toUpperCase() || 'SHOES';

  return (
    <>
      <Helmet>
        <title>Women's {subcategoryTitle} | THE OUTNET</title>
        <meta name="description" content={`Shop luxury women's ${subcategoryTitle.toLowerCase()} at up to 70% off. Discover designer footwear from top fashion brands.`} />
        <link rel="canonical" href={`/shop/shoes/${subcategory}`} />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <Link to="/shop/shoes" className="hover:text-black">Shoes</Link>
            <span className="mx-2">/</span>
            <span>{subcategoryTitle}</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              WOMEN'S {subcategoryTitle}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Step up your style with luxury designer {subcategoryTitle.toLowerCase()} at unbeatable prices.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-6">
            <Link to="/shop/shoes" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              All Shoes
            </Link>
            <span className="text-sm px-4 py-2 border border-black bg-black text-white">
              {subcategoryTitle}
            </span>
            <Link to="/shop/shoes/pumps" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Pumps
            </Link>
            <Link to="/shop/shoes/sandals" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Sandals
            </Link>
            <Link to="/shop/shoes/boots" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Boots
            </Link>
            <Link to="/shop/shoes/sneakers" className="text-sm px-4 py-2 border border-gray-300 hover:border-black transition-colors">
              Sneakers
            </Link>
          </div>

          {/* Products Grid */}
          {shoeProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {shoeProducts.map((product) => (
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
              <p className="text-gray-600">No {subcategoryTitle.toLowerCase()} available at the moment.</p>
              <Link to="/shop/shoes" className="text-blue-600 hover:underline mt-4 inline-block">
                View all shoes
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}