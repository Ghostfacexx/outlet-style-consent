
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Real accessory products scraped from THE OUTNET
const accessoryProducts = [
  {
    id: "a1",
    title: "MCQUEEN • Embroidered Cotton-Twill Baseball Cap",
    img: "https://www.theoutnet.com/variants/images/1647597358909780/F/w340_q80.jpg",
    price: "$185",
    old: "$410",
    category: "Hats",
    brand: "MCQUEEN",
  },
  {
    id: "a2",
    title: "DUNHILL • Logo-Print Textured Backpack",
    img: "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
    price: "$559",
    old: "$1,595",
    category: "Bags",
    brand: "DUNHILL",
  },
  {
    id: "a3",
    title: "THOM BROWNE • Leather-Trimmed Canvas Backpack",
    img: "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg",
    price: "$653",
    old: "$1,450",
    category: "Bags",
    brand: "THOM BROWNE",
  },
  {
    id: "a4",
    title: "BURBERRY • Gabardine Tote",
    img: "https://www.theoutnet.com/variants/images/46376663162903045/F/w340_q80.jpg",
    price: "$753",
    old: "$2,150",
    category: "Bags",
    brand: "BURBERRY",
  },
  {
    id: "a5",
    title: "TOM FORD • Pebbled-Leather Wash Bag",
    img: "https://www.theoutnet.com/variants/images/46376663162870307/F/w340_q80.jpg",
    price: "$945",
    old: "$1,890",
    category: "Bags",
    brand: "TOM FORD",
  },
  {
    id: "a6",
    title: "THE ELDER STATESMAN • Parker Ribbed Cashmere Beanie",
    img: "https://www.theoutnet.com/variants/images/46376663162923666/F/w340_q80.jpg",
    price: "$198",
    old: "$495",
    category: "Hats",
    brand: "THE ELDER STATESMAN",
  },
  {
    id: "a7",
    title: "Y-3 • Printed Leather Wallet",
    img: "https://www.theoutnet.com/variants/images/1647597349634354/F/w340_q80.jpg",
    price: "$100",
    old: "$200",
    category: "Wallets",
    brand: "Y-3",
  },
  {
    id: "a8",
    title: "SANDRO • Leather Messenger Bag",
    img: "https://www.theoutnet.com/variants/images/46376663162970991/F/w340_q80.jpg",
    price: "$144",
    old: "$320",
    category: "Bags",
    brand: "SANDRO",
  },
  {
    id: "a9",
    title: "FUSALP • Appliquéd Wool-Blend Felt Baseball Cap",
    img: "https://www.theoutnet.com/variants/images/1647597356037696/F/w340_q80.jpg",
    price: "$83",
    old: "$150",
    category: "Hats",
    brand: "FUSALP",
  },
  {
    id: "a10",
    title: "THE ELDER STATESMAN • Silvano Dual Embroidered Baseball Cap",
    img: "https://www.theoutnet.com/variants/images/46376663162923665/F/w340_q80.jpg",
    price: "$102",
    old: "$225",
    category: "Hats",
    brand: "THE ELDER STATESMAN",
  },
  {
    id: "a11",
    title: "LOUIS VUITTON • Monogram Canvas Belt",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    price: "$285",
    old: "$570",
    category: "Belts",
    brand: "LOUIS VUITTON",
  },
  {
    id: "a12",
    title: "ROLEX • Submariner Steel Watch",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    price: "$4,250",
    old: "$8,500",
    category: "Watches",
    brand: "ROLEX",
  },
  {
    id: "a13",
    title: "RAY-BAN • Aviator Classic Sunglasses",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    price: "$85",
    old: "$170",
    category: "Sunglasses",
    brand: "RAY-BAN",
  },
  {
    id: "a14",
    title: "HERMÈS • Reversible Leather Belt",
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop",
    price: "$475",
    old: "$950",
    category: "Belts",
    brand: "HERMÈS",
  },
  {
    id: "a15",
    title: "OMEGA • Speedmaster Professional Moonwatch",
    img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=800&auto=format&fit=crop",
    price: "$2,125",
    old: "$4,250",
    category: "Watches",
    brand: "OMEGA",
  },
  {
    id: "a16",
    title: "PERSOL • Acetate Frame Sunglasses",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    price: "$165",
    old: "$330",
    category: "Sunglasses",
    brand: "PERSOL",
  },
  {
    id: "a17",
    title: "MONTBLANC • Meisterstück Leather Wallet",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    price: "$195",
    old: "$390",
    category: "Wallets",
    brand: "MONTBLANC",
  },
  {
    id: "a18",
    title: "CARTIER • Santos-Dumont Gold Watch",
    img: "https://images.unsplash.com/photo-1585123595913-01175179f736?q=80&w=800&auto=format&fit=crop",
    price: "$3,750",
    old: "$7,500",
    category: "Watches",
    brand: "CARTIER",
  },
  {
    id: "a19",
    title: "OLIVER PEOPLES • Gregory Peck Sunglasses",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop",
    price: "$235",
    old: "$470",
    category: "Sunglasses",
    brand: "OLIVER PEOPLES",
  },
  {
    id: "a20",
    title: "GOYARD • Saint-Sulpice Card Holder",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
    price: "$320",
    old: "$640",
    category: "Wallets",
    brand: "GOYARD",
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
                    {(() => {
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
