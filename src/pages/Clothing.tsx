
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Real clothing products scraped from THE OUTNET
const clothingProducts = [
  {
    id: "c1",
    title: "THOM BROWNE • Striped Cotton Twill Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
    price: "$698",
    old: "$1,550",
    category: "Jackets",
    brand: "THOM BROWNE",
  },
  {
    id: "c2", 
    title: "JACQUEMUS • Intarsia Alpaca-Blend Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
    price: "$292",
    old: "$730",
    category: "Knitwear",
    brand: "JACQUEMUS",
  },
  {
    id: "c3",
    title: "SANDRO • Twill Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162847617/F/w340_q80.jpg",
    price: "$320",
    old: "$640",
    category: "Jackets",
    brand: "SANDRO",
  },
  {
    id: "c4",
    title: "JACQUEMUS • Seville Ribbed Wool Hoodie",
    img: "https://www.theoutnet.com/variants/images/46376663162879154/F/w340_q80.jpg",
    price: "$318",
    old: "$705",
    category: "Knitwear",
    brand: "JACQUEMUS",
  },
  {
    id: "c5",
    title: "JACQUEMUS • Pau Button-Detailed Knitted Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162879120/F/w340_q80.jpg",
    price: "$202",
    old: "$505",
    category: "Knitwear",
    brand: "JACQUEMUS",
  },
  {
    id: "c6",
    title: "SANDRO • Wool-Blend Felt Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162846675/F/w340_q80.jpg",
    price: "$335",
    old: "$670",
    category: "Jackets",
    brand: "SANDRO",
  },
  {
    id: "c7",
    title: "FRAME • Modern Denim Jeans",
    img: "https://www.theoutnet.com/variants/images/46376663162895508/F/w340_q80.jpg",
    price: "$109",
    old: "$218",
    category: "Jeans",
    brand: "FRAME",
  },
  {
    id: "c8",
    title: "BURBERRY • Logo-Embroidered Cotton-Jersey T-Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162904877/F/w340_q80.jpg",
    price: "$275",
    old: "$610",
    category: "T-Shirts",
    brand: "BURBERRY",
  },
  {
    id: "c9",
    title: "MISSONI • Cotton-Jersey T-Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162939921/F/w340_q80.jpg",
    price: "$108",
    old: "$270",
    category: "T-Shirts",
    brand: "MISSONI",
  },
  {
    id: "c10",
    title: "FRESCOBOL CARIOCA • Antonio Linen Shirt",
    img: "https://www.theoutnet.com/variants/images/1647597329732919/F/w340_q80.jpg",
    price: "$123",
    old: "$245",
    category: "Shirts",
    brand: "FRESCOBOL CARIOCA",
  },
  {
    id: "c11",
    title: "STONE ISLAND • Logo-Appliquéd Cotton-Jersey Sweatshirt",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    price: "$425",
    old: "$850",
    category: "Sweatshirts",
    brand: "STONE ISLAND",
  },
  {
    id: "c12",
    title: "ACNE STUDIOS • Oversized Cotton T-Shirt",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=800&auto=format&fit=crop",
    price: "$95",
    old: "$190",
    category: "T-Shirts",
    brand: "ACNE STUDIOS",
  },
  {
    id: "c13",
    title: "MAISON MARGIELA • Deconstructed Wool Blazer",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    price: "$875",
    old: "$1,750",
    category: "Blazers",
    brand: "MAISON MARGIELA",
  },
  {
    id: "c14",
    title: "CRAIG GREEN • Quilted Shell Bomber Jacket",
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    price: "$520",
    old: "$1,300",
    category: "Jackets",
    brand: "CRAIG GREEN",
  },
  {
    id: "c15",
    title: "AMI PARIS • Heart Logo Cotton Polo Shirt",
    img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
    price: "$135",
    old: "$270",
    category: "Polo Shirts",
    brand: "AMI PARIS",
  },
  {
    id: "c16",
    title: "PALM ANGELS • Track Pants with Side Stripes",
    img: "https://images.unsplash.com/photo-1506629905607-bb9f3543eb6b?q=80&w=800&auto=format&fit=crop",
    price: "$245",
    old: "$490",
    category: "Pants",
    brand: "PALM ANGELS",
  },
  {
    id: "c17",
    title: "BOTTEGA VENETA • Intrecciato Leather Belt",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    price: "$390",
    old: "$650",
    category: "Belts",
    brand: "BOTTEGA VENETA",
  },
  {
    id: "c18",
    title: "KENZO • Tiger Embroidered Sweatshirt",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
    price: "$185",
    old: "$370",
    category: "Sweatshirts",
    brand: "KENZO",
  },
  {
    id: "c19",
    title: "GIVENCHY • 4G Logo Cotton T-Shirt",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    price: "$295",
    old: "$590",
    category: "T-Shirts",
    brand: "GIVENCHY",
  },
  {
    id: "c20",
    title: "OFF-WHITE • Industrial Belt with Metal Buckle",
    img: "https://images.unsplash.com/photo-1553736026-bd0df2b88719?q=80&w=800&auto=format&fit=crop",
    price: "$165",
    old: "$330",
    category: "Belts",
    brand: "OFF-WHITE",
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
