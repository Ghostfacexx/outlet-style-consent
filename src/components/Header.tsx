import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import CartDrawer from "@/components/CartDrawer";
import MobileHeader from "@/components/MobileHeader";
import { LogIn, LogOut, User } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  // Determine if we're in men's section
  const isInMensSection = location.pathname.startsWith('/shop/mens');
  
  // Get appropriate "New In" link based on current section
  const getNewInLink = () => {
    return isInMensSection ? '/shop/mens/just-in' : '/shop/just-in';
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop Header */}
      <header role="banner" className="hidden md:block sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-extrabold tracking-wide hover:opacity-80 transition-opacity">
            THE OUTNET
          </Link>
          <div className="flex items-center gap-4">
            <nav aria-label="Primary">
            <ul className="flex gap-4 text-sm">
              <li>
                <Link 
                  to={getNewInLink()} 
                  className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                    isActive('/shop/just-in') || isActive('/shop/mens/just-in') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  New In
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop/clothing" 
                  className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                    isActive('/shop/clothing') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop/shoes" 
                  className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                    isActive('/shop/shoes') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop/accessories" 
                  className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                    isActive('/shop/accessories') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop/designers" 
                  className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                    isActive('/shop/designers') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  Designers
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop/mens" 
                  className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                    isActive('/shop/mens') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  Men
                </Link>
              </li>
              </ul>
            </nav>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    <User className="w-4 h-4 inline mr-1" />
                    {user?.email}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center gap-1"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button asChild variant="outline" size="sm">
                  <Link to="/auth" className="flex items-center gap-1">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Link>
                </Button>
              )}
              <CartDrawer />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}