import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const clothingProducts = [
  {
    id: "1",
    title: "OFFICINE GÉNÉRALE • Milos Merino Wool Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$189",
    old: "$315",
    category: "Knitwear",
  },
  {
    id: "2", 
    title: "OFFICINE GÉNÉRALE • Benoit Checked Cotton Twill Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943719/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$129",
    old: "$215",
    category: "Shirts",
  },
  {
    id: "3",
    title: "OFFICINE GÉNÉRALE • James Cotton Corduroy Pants",
    img: "https://www.theoutnet.com/variants/images/46376663162944045/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$149",
    old: "$245",
    category: "Pants",
  },
  {
    id: "4",
    title: "OFFICINE GÉNÉRALE • Harrison Wool Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943938/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$299",
    old: "$495",
    category: "Jackets",
  },
  {
    id: "5",
    title: "OFFICINE GÉNÉRALE • Eloi Cotton Poplin Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943947/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$109",
    old: "$185",
    category: "Shirts",
  },
  {
    id: "6",
    title: "OFFICINE GÉNÉRALE • Giovanni Suit Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162944023/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$399",
    old: "$665",
    category: "Suits",
  },
];

export default function Clothing() {
  return (
    <>
      <Helmet>
        <title>Men's Clothing | Designer Fashion at Outlet Prices</title>
        <meta name="description" content="Shop designer men's clothing at outlet prices. Shirts, jackets, knitwear, and more from top brands." />
        <link rel="canonical" href="/clothing" />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span>Clothing</span>
        </div>

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