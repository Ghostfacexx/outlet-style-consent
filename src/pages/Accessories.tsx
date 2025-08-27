import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const accessoryProducts = [
  {
    id: "13",
    title: "HERMÈS • H Reversible Leather Belt",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    price: "$299",
    old: "$490",
    category: "Belts",
  },
  {
    id: "14",
    title: "TOM FORD • Aviator Sunglasses",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    price: "$189",
    old: "$315",
    category: "Sunglasses",
  },
  {
    id: "15",
    title: "BOTTEGA VENETA • Intrecciato Leather Wallet",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    price: "$259",
    old: "$430",
    category: "Wallets",
  },
  {
    id: "16",
    title: "STONE ISLAND • Logo Baseball Cap",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    price: "$89",
    old: "$150",
    category: "Hats",
  },
  {
    id: "17",
    title: "OMEGA • Seamaster Professional Watch",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    price: "$1,299",
    old: "$2,165",
    category: "Watches",
  },
  {
    id: "18",
    title: "ACNE STUDIOS • Logo Scarf",
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
    price: "$119",
    old: "$200",
    category: "Scarves",
  },
];

export default function Accessories() {
  return (
    <>
      <Helmet>
        <title>Men's Accessories | Designer Items at Outlet Prices</title>
        <meta name="description" content="Shop designer men's accessories at outlet prices. Belts, watches, sunglasses, and more from luxury brands." />
        <link rel="canonical" href="/accessories" />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span>Accessories</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Men's Accessories</h1>
          <p className="text-muted-foreground">Complete your look with designer accessories</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm">All Accessories</Button>
          <Button variant="outline" size="sm">Belts</Button>
          <Button variant="outline" size="sm">Watches</Button>
          <Button variant="outline" size="sm">Sunglasses</Button>
          <Button variant="outline" size="sm">Wallets</Button>
          <Button variant="outline" size="sm">Hats</Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessoryProducts.map((product) => (
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
                    {Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.old.slice(1))) * 100)}% OFF
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