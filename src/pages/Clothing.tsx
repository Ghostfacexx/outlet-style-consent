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
    title: "MISSONI • Jacquard-Knit Cotton and Wool-Blend Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162882568/F/w340_q80.jpg",
    price: "$392",
    old: "$980",
    category: "Knitwear",
    brand: "MISSONI",
  },
  {
    id: "c12",
    title: "SANDRO • Open-Knit Polo Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162846655/F/w340_q80.jpg",
    price: "$170",
    old: "$340",
    category: "Polo Shirts",
    brand: "SANDRO",
  },
  {
    id: "c13",
    title: "MISSONI • Space-Dyed Cotton-Piqué Polo Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162939877/F/w340_q80.jpg",
    price: "$164",
    old: "$410",
    category: "Polo Shirts",
    brand: "MISSONI",
  },
  {
    id: "c14",
    title: "THOM BROWNE • Striped Intarsia Wool Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162875218/F/w340_q80.jpg",
    price: "$500",
    old: "$1,250",
    category: "Knitwear",
    brand: "THOM BROWNE",
  },
  {
    id: "c15",
    title: "TOM FORD • Skinny-Fit Denim Jeans",
    img: "https://www.theoutnet.com/variants/images/46376663162868115/F/w340_q80.jpg",
    price: "$473",
    old: "$1,050",
    category: "Jeans",
    brand: "TOM FORD",
  },
  {
    id: "c16",
    title: "THOM BROWNE • Striped Waffle-Knit Cotton Drawstring Shorts",
    img: "https://www.theoutnet.com/variants/images/46376663162848832/F/w340_q80.jpg",
    price: "$475",
    old: "$950",
    category: "Shorts",
    brand: "THOM BROWNE",
  },
  {
    id: "c17",
    title: "BOGLIOLI • Slim-Fit Cotton-Blend Corduroy Pants",
    img: "https://www.theoutnet.com/variants/images/46376663162900277/F/w340_q80.jpg",
    price: "$223",
    old: "$556",
    category: "Pants",
    brand: "BOGLIOLI",
  },
  {
    id: "c18",
    title: "THOM BROWNE • Striped Wool and Mohair-Blend Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162852518/F/w340_q80.jpg",
    price: "$445",
    old: "$890",
    category: "Knitwear",
    brand: "THOM BROWNE",
  },
  {
    id: "c19",
    title: "SANDRO • Cotton-Piqué Polo Shirt",
    img: "https://www.theoutnet.com/variants/images/1647597349494773/F/w340_q80.jpg",
    price: "$70",
    old: "$175",
    category: "Polo Shirts",
    brand: "SANDRO",
  },
  {
    id: "c20",
    title: "SANDRO • Cotton-Drill Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162847400/F/w340_q80.jpg",
    price: "$187",
    old: "$415",
    category: "Jackets",
    brand: "SANDRO",
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