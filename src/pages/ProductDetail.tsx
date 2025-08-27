import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Heart, Share2, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react";

// Mock product data - in real app this would come from API
const allProducts = [
  {
    id: "1",
    title: "OFFICINE GÉNÉRALE • Milos Merino Wool Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$189",
    old: "$315",
    category: "Knitwear",
    brand: "OFFICINE GÉNÉRALE",
    description: "Crafted from premium merino wool, this Milos cardigan offers unparalleled comfort and versatility. The classic silhouette features a button-front closure and ribbed trim details.",
    details: ["100% Merino Wool", "Dry clean only", "Made in Italy", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "7",
    title: "COMMON PROJECTS • Achilles Leather Sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975930414-c2b5c3a50f0a?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$259",
    old: "$430",
    category: "Sneakers", 
    brand: "COMMON PROJECTS",
    description: "The iconic Achilles sneaker in premium Italian leather. Minimalist design with gold foil serial numbers and sophisticated craftsmanship.",
    details: ["Premium Italian Leather", "Rubber sole", "Made in Italy", "True to size"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  // Add more products as needed
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

  const discount = Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.old.slice(1))) * 100);

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