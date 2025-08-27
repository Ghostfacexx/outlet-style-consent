
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Real shoe products scraped from THE OUTNET
const shoeProducts = [
  {
    id: "s1",
    title: "FERRAGAMO • Geremia Gancini Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
    price: "$775",
    old: "$1,550",
    category: "Boots",
    brand: "FERRAGAMO",
  },
  {
    id: "s2",
    title: "CONVERSE X COMME DES GARÇONS PLAY • Chuck 70 Canvas High-Top Sneakers",
    img: "https://www.theoutnet.com/variants/images/46376663162858873/F/w340_q80.jpg",
    price: "$105",
    old: "$150",
    category: "Sneakers",
    brand: "CONVERSE X CDG",
  },
  {
    id: "s3",
    title: "SANDRO • Mesh and Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/46376663162847635/F/w340_q80.jpg",
    price: "$165",
    old: "$330",
    category: "Sneakers",
    brand: "SANDRO",
  },
  {
    id: "s4",
    title: "MAISON MARGIELA • Shell Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597342177057/F/w340_q80.jpg",
    price: "$296",
    old: "$740",
    category: "Sneakers",
    brand: "MAISON MARGIELA",
  },
  {
    id: "s5",
    title: "Y-3 • Superstar Embroidered Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597345838032/F/w340_q80.jpg",
    price: "$116",
    old: "$330",
    category: "Sneakers",
    brand: "Y-3",
  },
  {
    id: "s6",
    title: "MAISON MARGIELA • Tabi Split-Toe Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162908830/F/w340_q80.jpg",
    price: "$596",
    old: "$1,490",
    category: "Boots",
    brand: "MAISON MARGIELA",
  },
  {
    id: "s7",
    title: "TOD'S • Suede Boots",
    img: "https://www.theoutnet.com/variants/images/1647597357378138/F/w340_q80.jpg",
    price: "$226",
    old: "$645",
    category: "Boots",
    brand: "TOD'S",
  },
  {
    id: "s8",
    title: "BURBERRY • Quilted Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597338994089/F/w340_q80.jpg",
    price: "$510",
    old: "$850",
    category: "Sneakers",
    brand: "BURBERRY",
  },
  {
    id: "s9",
    title: "TOD'S • T Timeless Suede Driving Shoes",
    img: "https://www.theoutnet.com/variants/images/1647597338572190/F/w340_q80.jpg",
    price: "$237",
    old: "$675",
    category: "Loafers",
    brand: "TOD'S",
  },
  {
    id: "s10",
    title: "FRESCOBOL CARIOCA • Humberto Suede Slides",
    img: "https://www.theoutnet.com/variants/images/1647597331126760/F/w340_q80.jpg",
    price: "$97",
    old: "$215",
    category: "Sandals",
    brand: "FRESCOBOL CARIOCA",
  },
  {
    id: "s11",
    title: "GOLDEN GOOSE • Super-Star Distressed Leather Sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    price: "$320",
    old: "$560",
    category: "Sneakers",
    brand: "GOLDEN GOOSE",
  },
  {
    id: "s12",
    title: "COMMON PROJECTS • Achilles Leather Sneakers",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop",
    price: "$285",
    old: "$475",
    category: "Sneakers",
    brand: "COMMON PROJECTS",
  },
  {
    id: "s13",
    title: "BOTTEGA VENETA • Intrecciato Leather Loafers",
    img: "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=800&auto=format&fit=crop",
    price: "$620",
    old: "$1,240",
    category: "Loafers",
    brand: "BOTTEGA VENETA",
  },
  {
    id: "s14",
    title: "RICK OWENS • DRKSHDW Canvas High-Top Sneakers",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    price: "$275",
    old: "$550",
    category: "Sneakers",
    brand: "RICK OWENS",
  },
  {
    id: "s15",
    title: "GUCCI • Horsebit Leather Loafers",
    img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop",
    price: "$475",
    old: "$790",
    category: "Loafers",
    brand: "GUCCI",
  },
  {
    id: "s16",
    title: "BALENCIAGA • Triple S Mesh and Leather Sneakers",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
    price: "$595",
    old: "$850",
    category: "Sneakers",
    brand: "BALENCIAGA",
  },
  {
    id: "s17",
    title: "SAINT LAURENT • Wyatt Suede Chelsea Boots",
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    price: "$695",
    old: "$1,390",
    category: "Boots",
    brand: "SAINT LAURENT",
  },
  {
    id: "s18",
    title: "VEJA • V-10 Leather and Suede Sneakers",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    price: "$85",
    old: "$170",
    category: "Sneakers",
    brand: "VEJA",
  },
  {
    id: "s19",
    title: "DR. MARTENS • 1460 Leather Ankle Boots",
    img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?q=80&w=800&auto=format&fit=crop",
    price: "$95",
    old: "$190",
    category: "Boots",
    brand: "DR. MARTENS",
  },
  {
    id: "s20",
    title: "ALEXANDER MCQUEEN • Oversized Leather Sneakers",
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=800&auto=format&fit=crop",
    price: "$315",
    old: "$525",
    category: "Sneakers",
    brand: "ALEXANDER MCQUEEN",
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
