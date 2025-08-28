import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  img: string;
  price: string;
  old?: string;
  className?: string;
}

export default function ProductCard({ id, title, img, price, old, className = "" }: ProductCardProps) {
  const { addItem } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id,
      title,
      price,
      image: img,
      size: "M" // Default size for quick add
    });
    
    toast.success("Added to cart", {
      description: title,
      duration: 2000,
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Removed from wishlist" : "Added to wishlist", {
      duration: 1500,
    });
  };

  const calculateDiscount = () => {
    if (!old) return null;
    const currentPrice = parseFloat(price.replace('$', '').replace(',', ''));
    const originalPrice = parseFloat(old.replace('$', '').replace(',', ''));
    const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
    return discount;
  };

  const discount = calculateDiscount();

  return (
    <Link to={`/product/${id}`}>
      <Card className={`overflow-hidden group hover:shadow-lg transition-all duration-300 mobile-fade-in ${className}`}>
        <div className="relative overflow-hidden">
          <img 
            src={img} 
            alt={title} 
            loading="lazy" 
            className="h-48 sm:h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          
          {/* Sale Badge */}
          {discount && (
            <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded font-medium">
              {discount}% OFF
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              variant="secondary"
              size="sm"
              className="h-8 w-8 p-0 rounded-full"
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-red-500' : ''}`} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              variant="secondary"
              size="sm"
              className="w-full mobile-touch"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        <CardContent className="p-3 sm:p-4">
          <div className="space-y-2">
            <h3 className="text-sm mobile-text text-muted-foreground line-clamp-2 leading-snug">
              {title}
            </h3>
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline space-x-2">
                <span className="font-bold text-foreground">{price}</span>
                {old && (
                  <span className="text-xs line-through text-muted-foreground">{old}</span>
                )}
              </div>
              {discount && (
                <span className="text-xs text-green-600 font-medium">
                  Save {discount}%
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}