import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Heart, Share2, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import PaymentButton from "@/components/PaymentButton";
import { allProducts } from "@/data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.img,
      size: selectedSize || product.sizes[0] || "",
    });

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted 
        ? `${product.title} has been removed from your wishlist.`
        : `${product.title} has been added to your wishlist.`,
    });
  };

  // Get category path for breadcrumb
  const getCategoryPath = (category: string) => {
    switch (category.toLowerCase()) {
      case 'knitwear':
      case 'jackets':
      case 'shirts':
      case 't-shirts':
      case 'polo shirts':
      case 'sweatshirts':
      case 'coats':
      case 'jeans':
      case 'shorts':
      case 'blazers':
      case 'pants':
      case 'belts':
        return { name: 'Clothing', path: '/clothing' };
      case 'sneakers':
      case 'boots':
      case 'loafers':
      case 'sandals':
        return { name: 'Shoes', path: '/shoes' };
      case 'bags':
      case 'hats':
      case 'wallets':
      case 'watches':
      case 'sunglasses':
        return { name: 'Accessories', path: '/accessories' };
      default:
        return { name: 'Products', path: '/' };
    }
  };

  const categoryInfo = getCategoryPath(product.category);

  return (
    <>
      <Helmet>
        <title>{product.title} | THE OUTNET • EXCLUSIVE</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li>
              <span className="text-muted-foreground/60">/</span>
            </li>
            <li>
              <Link to={categoryInfo.path} className="hover:text-foreground transition-colors">
                {categoryInfo.name}
              </Link>
            </li>
            <li>
              <span className="text-muted-foreground/60">/</span>
            </li>
            <li>
              <span className="text-foreground font-medium">{product.brand}</span>
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.images[selectedImage] || product.img} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-xl line-through text-muted-foreground">{product.old}</span>
                <Badge variant="destructive" className="text-sm">
                  {product.discount || (() => {
                    const currentPrice = parseFloat(product.price.replace(/[$,]/g, ''));
                    const originalPrice = parseFloat(product.old.replace(/[$,]/g, ''));
                    const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
                    return `${discount}% OFF`;
                  })()}
                </Badge>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button onClick={handleAddToCart} className="w-full" size="lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Bag
                </Button>
                <PaymentButton 
                  amount={parseFloat(product.price.replace(/[$,]/g, '')) * 100}
                  productName={product.title}
                  productId={product.id}
                  currency="usd"
                />
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={toggleWishlist}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Shipping & Returns */}
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