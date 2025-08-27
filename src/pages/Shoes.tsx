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
    title: "TOD'S • Suede Driving Shoes",
    img: "https://www.theoutnet.com/variants/images/1647597338572372/F/w340_q80.jpg",
    price: "$244",
    old: "$695",
    category: "Loafers",
    brand: "TOD'S",
  },
  {
    id: "s12",
    title: "ACNE STUDIOS • N3W Coated Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597290348742/F/w340_q80.jpg",
    price: "$123",
    old: "$410",
    category: "Sneakers",
    brand: "ACNE STUDIOS",
  },
  {
    id: "s13",
    title: "THOM BROWNE • Pebbled-Leather Chelsea Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162849655/F/w340_q80.jpg",
    price: "$356",
    old: "$890",
    category: "Boots",
    brand: "THOM BROWNE",
  },
  {
    id: "s14",
    title: "TOD'S NO_CODE • Leather and Stretch-Knit Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597351192052/F/w340_q80.jpg",
    price: "$209",
    old: "$695",
    category: "Sneakers",
    brand: "TOD'S NO_CODE",
  },
  {
    id: "s15",
    title: "FERRAGAMO • Lux Pebbled-Leather Brogues",
    img: "https://www.theoutnet.com/variants/images/1647597359162325/F/w340_q80.jpg",
    price: "$575",
    old: "$1,150",
    category: "Dress Shoes",
    brand: "FERRAGAMO",
  },
  {
    id: "s16",
    title: "ADIDAS ORIGINALS BY CRAIG GREEN • Stan Smith Boost Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597349740831/F/w340_q80.jpg",
    price: "$90",
    old: "$300",
    category: "Sneakers",
    brand: "ADIDAS X CRAIG GREEN",
  },
  {
    id: "s17",
    title: "FERRAGAMO • Genesio Leather Chelsea Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162871194/F/w340_q80.jpg",
    price: "$626",
    old: "$1,390",
    category: "Boots",
    brand: "FERRAGAMO",
  },
  {
    id: "s18",
    title: "FRESCOBOL CARIOCA • Telo Suede Collapsible-Heel Loafers",
    img: "https://www.theoutnet.com/variants/images/1647597357004652/F/w340_q80.jpg",
    price: "$120",
    old: "$265",
    category: "Loafers",
    brand: "FRESCOBOL CARIOCA",
  },
  {
    id: "s19",
    title: "TOD'S • Pebbled-Leather Slip-On Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597357343399/F/w340_q80.jpg",
    price: "$237",
    old: "$525",
    category: "Sneakers",
    brand: "TOD'S",
  },
  {
    id: "s20",
    title: "Y-3 • Terrex Two-Tone Shell Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597332577086/F/w340_q80.jpg",
    price: "$203",
    old: "$450",
    category: "Sneakers",
    brand: "Y-3",
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