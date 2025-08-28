import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { allProducts } from "@/data/products";

// Get clearance products (filter by ID prefix 'cl' or random selection)
const clearanceProducts = allProducts.filter(product => 
  product.id.startsWith('cl') || Math.random() > 0.7
).slice(0, 8);

export default function Clearance() {
  return (
    <>
      <Helmet>
        <title>Clearance Sale | Up to 70% Off Designer Items</title>
        <meta name="description" content="Final clearance on designer menswear. Up to 70% off luxury brands. Limited stock, shop now!" />
        <link rel="canonical" href="/clearance" />
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
              <span className="text-foreground font-medium">Clearance</span>
            </li>
          </ol>
        </nav>

        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            FINAL CLEARANCE SALE
          </div>
          <h1 className="text-4xl font-bold mb-2">Up to 70% Off</h1>
          <p className="text-muted-foreground text-lg">Final reductions on designer pieces. Limited stock available.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <Button variant="default" size="sm">All Clearance</Button>
          <Button variant="outline" size="sm">60% Off+</Button>
          <Button variant="outline" size="sm">70% Off+</Button>
          <Button variant="outline" size="sm">Under $100</Button>
          <Button variant="outline" size="sm">Under $200</Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clearanceProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer border-red-200 dark:border-red-800">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                    {product.discount || (() => {
                      const currentPrice = parseFloat(product.price.replace(/[$,]/g, ''));
                      const originalPrice = parseFloat(product.old.replace(/[$,]/g, ''));
                      return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
                    })()}% OFF
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
                    FINAL SALE
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">{product.brand}</Badge>
                  <h3 className="text-sm font-medium line-clamp-2 mb-2">{product.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-lg text-red-600">{product.price}</span>
                    <span className="text-sm line-through text-muted-foreground">{product.old}</span>
                  </div>
                  <div className="text-xs text-red-600 font-bold mt-1 uppercase">
                    Final Sale - No Returns
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Important: Final Sale Items</h3>
            <p className="text-sm text-red-700 dark:text-red-300">
              All clearance items are final sale and cannot be returned or exchanged. 
              Please check sizing carefully before purchase.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}