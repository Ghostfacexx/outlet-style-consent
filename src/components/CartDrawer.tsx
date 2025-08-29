import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();

  console.log("CartDrawer rendered, total items:", getTotalItems());

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleCheckout = async () => {
    console.log("Checkout button clicked!");
    console.log("Items in cart:", items);
    console.log("Total price:", getTotalPrice());


    if (items.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Calculate total amount in cents
      const totalAmountCents = Math.round(getTotalPrice() * 100);
      
      // Create product name from cart items
      const productName = items.length === 1 
        ? items[0].title 
        : `${items.length} items from THE OUTNET`;

      console.log("Calling Stripe payment with:", { 
        amount: totalAmountCents, 
        productName 
      });

      // Call the payment API
      const data = await apiClient.createPayment({
        amount: totalAmountCents, 
        productName,
        currency: 'usd' 
      });

      if (data?.url) {
        // Open Stripe checkout in new tab
        window.open(data.url, '_blank');
        toast({
          title: "Redirecting to payment",
          description: "Opening Stripe checkout in a new tab...",
        });
        
        // Close the cart drawer
        setIsOpen(false);
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: error.message || "Failed to start payment process",
        variant: "destructive",
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative flex items-center justify-center h-9 w-9 border border-gray-300 bg-white hover:bg-gray-50 rounded-md transition-colors">
          <ShoppingBag className="h-4 w-4" />
          {getTotalItems() > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {getTotalItems()}
            </Badge>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Bag ({getTotalItems()} items)
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your bag is empty</p>
              <button 
                className="mt-4 px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-3 p-3 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm leading-tight">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      <p className="font-semibold">{item.price}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            className="h-8 w-8 border border-gray-300 bg-white hover:bg-gray-50 rounded-md flex items-center justify-center transition-colors"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            className="h-8 w-8 border border-gray-300 bg-white hover:bg-gray-50 rounded-md flex items-center justify-center transition-colors"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        
                        <button
                          className="h-8 w-8 text-red-600 hover:bg-red-50 rounded-md flex items-center justify-center transition-colors"
                          onClick={() => removeItem(item.id, item.size)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Total:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                
                <div className="space-y-2">
                  <button 
                    className="w-full px-4 py-3 bg-black text-white hover:bg-gray-800 rounded-md transition-colors font-medium"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                  <button 
                    className="w-full px-4 py-3 border border-gray-300 bg-white hover:bg-gray-50 rounded-md transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}