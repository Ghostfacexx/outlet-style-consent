import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const shoeProducts = [
  {
    id: "7",
    title: "COMMON PROJECTS • Achilles Leather Sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    price: "$259",
    old: "$430",
    category: "Sneakers",
  },
  {
    id: "8",
    title: "MAISON MARGIELA • GAT Replica Sneakers",
    img: "https://images.unsplash.com/photo-1520975930414-c2b5c3a50f0a?q=80&w=800&auto=format&fit=crop",
    price: "$319",
    old: "$530",
    category: "Sneakers",
  },
  {
    id: "9",
    title: "CHURCH'S • Shannon Leather Brogues",
    img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
    price: "$399",
    old: "$665",
    category: "Dress Shoes",
  },
  {
    id: "10",
    title: "BOTTEGA VENETA • Intrecciato Leather Loafers",
    img: "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=800&auto=format&fit=crop",
    price: "$599",
    old: "$990",
    category: "Loafers",
  },
  {
    id: "11",
    title: "OFF-WHITE • Vulcanized Canvas Sneakers",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    price: "$189",
    old: "$315",
    category: "Sneakers",
  },
  {
    id: "12",
    title: "BALENCIAGA • Triple S Mesh Sneakers",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop",
    price: "$549",
    old: "$915",
    category: "Sneakers",
  },
];

export default function Shoes() {
  return (
    <>
      <Helmet>
        <title>Men's Shoes | Designer Footwear at Outlet Prices</title>
        <meta name="description" content="Shop designer men's shoes at outlet prices. Sneakers, dress shoes, loafers and more from luxury brands." />
        <link rel="canonical" href="/shoes" />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span>Shoes</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Men's Shoes</h1>
          <p className="text-muted-foreground">Luxury footwear at unbeatable outlet prices</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm">All Shoes</Button>
          <Button variant="outline" size="sm">Sneakers</Button>
          <Button variant="outline" size="sm">Dress Shoes</Button>
          <Button variant="outline" size="sm">Loafers</Button>
          <Button variant="outline" size="sm">Boots</Button>
          <Button variant="outline" size="sm">Sandals</Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shoeProducts.map((product) => (
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