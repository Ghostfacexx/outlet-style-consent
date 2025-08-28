import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/contexts/CartContext";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { items, getTotalItems } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "New In" },
    { path: "/clothing", label: "Clothing" },
    { path: "/shoes", label: "Shoes" },
    { path: "/accessories", label: "Accessories" },
    { path: "/designers", label: "Designers" },
    { path: "/clearance", label: "Clearance" },
  ];

  const totalItems = getTotalItems() || 0;

  return (
    <header className="mobile-sticky-header border-b mobile-safe-area">
      <div className="mobile-container py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="mobile-touch p-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <Link 
                  to="/" 
                  className="text-lg font-bold tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  THE OUTNET
                </Link>
              </div>
              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg mobile-touch transition-colors ${
                          isActive(item.path)
                            ? 'bg-accent text-accent-foreground font-medium'
                            : 'hover:bg-accent/50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4 border-t">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Free shipping over $150</p>
                  <p>Download app for 25% off</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link 
          to="/" 
          className="flex-1 text-center text-base font-extrabold tracking-wide hover:opacity-80 transition-opacity"
        >
          THE OUTNET • EXCLUSIVE
        </Link>

        {/* Cart */}
        <div className="relative">
          <CartDrawer />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}