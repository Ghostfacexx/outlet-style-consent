import { Link, useLocation } from "react-router-dom";
import { Home, Shirt, ShoppingBag, Star, Tag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function MobileBottomNav() {
  const location = useLocation();
  const { items, getTotalItems } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const totalItems = getTotalItems() || 0;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/clothing", icon: Shirt, label: "Clothing" },
    { path: "/designers", icon: Star, label: "Designers" },
    { path: "/clearance", icon: Tag, label: "Sale" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t mobile-safe-area z-40">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors mobile-touch ${
                active 
                  ? 'text-primary bg-accent/30' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}