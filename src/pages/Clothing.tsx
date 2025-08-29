import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { allProducts } from "@/data/products";

// Filter clothing from all products
const clothingProducts = allProducts.filter(product => 
  product.category === "Clothing"
);

export default function Clothing() {
  return (
    <>
      <Helmet>
        <title>Men's Clothing | Designer Fashion at Outlet Prices</title>
        <meta name="description" content="Shop designer men's clothing at outlet prices. Shirts, jackets, knitwear, and more from top brands." />
        <link rel="canonical" href="/clothing" />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li>
              <span className="text-muted-foreground/60">/</span>
            </li>
            <li>
              <span className="text-foreground font-medium">Clothing</span>
            </li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Men's Clothing</h1>
          <p className="text-muted-foreground">Designer menswear at unbeatable outlet prices</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm">All Categories</Button>
          <Button variant="outline" size="sm">Shirts</Button>
          <Button variant="outline" size="sm">Jackets</Button>
          <Button variant="outline" size="sm">Knitwear</Button>
          <Button variant="outline" size="sm">Pants</Button>
          <Button variant="outline" size="sm">Suits</Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clothingProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium line-clamp-2 mb-2">{product.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-lg">{product.price}</span>
                    <span className="text-sm line-through text-muted-foreground">{product.old}</span>
                  </div>
                  <div className="text-xs text-green-600 font-medium mt-1">
                    {product.discount || (() => {
                      const currentPrice = parseFloat(product.price.replace('$', '').replace(',', ''));
                      const originalPrice = parseFloat(product.old.replace('$', '').replace(',', ''));
                      const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
                      return `${discount}% OFF`;
                    })()}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">Load More Products</Button>
        </div>
      </div>
    </>
  );
}