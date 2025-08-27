import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Heart, Share2, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react";

// Extended product data combining clothing, shoes, and accessories
const allProducts = [
  // Clothing
  {
    id: "c1",
    title: "THOM BROWNE • Striped Cotton Twill Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162874234/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$698",
    old: "$1,550",
    category: "Jackets",
    brand: "THOM BROWNE",
    description: "Striped cotton twill overshirt with signature details. Classic tailoring meets contemporary design in this versatile piece.",
    details: ["100% Cotton Twill", "Dry clean only", "Made in USA", "Regular fit", "Button closure"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c2", 
    title: "JACQUEMUS • Intarsia Alpaca-Blend Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162878498/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$292",
    old: "$730",
    category: "Knitwear",
    brand: "JACQUEMUS",
    description: "Luxurious intarsia alpaca-blend sweater with distinctive pattern. Soft and warm with a contemporary silhouette.",
    details: ["80% Alpaca, 20% Wool", "Hand wash", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  // Shoes
  {
    id: "s1",
    title: "FERRAGAMO • Geremia Gancini Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162956885/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$775",
    old: "$1,550",
    category: "Boots",
    brand: "FERRAGAMO",
    description: "Premium leather boots featuring the iconic Gancini hardware. Crafted in Italy with superior materials and construction.",
    details: ["Premium Italian Leather", "Rubber sole", "Made in Italy", "True to size", "Gancini hardware"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s2",
    title: "MAISON MARGIELA • Tabi Split-Toe Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162908830/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162908830/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162908830/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$596",
    old: "$1,490",
    category: "Boots",
    brand: "MAISON MARGIELA",
    description: "Iconic Tabi boots with distinctive split-toe design. A signature piece that embodies the house's avant-garde aesthetic.",
    details: ["Premium Leather", "Leather sole", "Made in Italy", "Unique split-toe design", "Side zip closure"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  // Accessories
  {
    id: "a1",
    title: "DUNHILL • Logo-Print Textured Backpack",
    img: "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162894600/E/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$559",
    old: "$1,595",
    category: "Bags",
    brand: "DUNHILL",
    description: "Sophisticated textured backpack with subtle logo print. Perfect for the modern professional who values both style and function.",
    details: ["Textured Leather", "Multiple compartments", "Made in Italy", "Laptop compatible", "Adjustable straps"],
    sizes: ["One Size"],
  },
  {
    id: "a2",
    title: "THE ELDER STATESMAN • Parker Ribbed Cashmere Beanie",
    img: "https://www.theoutnet.com/variants/images/46376663162923666/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162923666/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162923666/E/w340_q80.jpg",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$198",
    old: "$495",
    category: "Hats",
    brand: "THE ELDER STATESMAN",
    description: "Luxurious ribbed cashmere beanie from the cult California brand. Ultra-soft and incredibly warm.",
    details: ["100% Cashmere", "Ribbed texture", "Made in USA", "One size fits most", "Hand wash only"],
    sizes: ["One Size"],
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const currentPrice = parseFloat(product.price.replace('$', '').replace(',', ''));
  const originalPrice = parseFloat(product.old.replace('$', '').replace(',', ''));
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  return (
    <>
      <Helmet>
        <title>{product.title} | THE OUTNET • MEN</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/clothing" className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span>{product.brand}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.brand}</Badge>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-xl line-through text-muted-foreground">{product.old}</span>
                <Badge variant="destructive">{discount}% OFF</Badge>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded flex items-center justify-center text-sm font-medium transition-colors ${
                      selectedSize === size 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full" 
                disabled={!selectedSize}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Bag
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-4 h-4" />
                <span>Free shipping over $150</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="w-4 h-4" />
                <span>Free returns within 28 days</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4" />
                <span>Authenticity guaranteed</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold">Product Details</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {product.details.map((detail, index) => (
                  <li key={index}>• {detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProduct.img} 
                      alt={relatedProduct.title}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2">{relatedProduct.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold">{relatedProduct.price}</span>
                      <span className="text-sm line-through text-muted-foreground">{relatedProduct.old}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}