import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import CartDrawer from "@/components/CartDrawer";
import MobileHeader from "@/components/MobileHeader";
import { LogIn, LogOut, User } from "lucide-react";

// Designer suggestions for women (more feminine/luxury fashion focused)
const womensDesigners = [
  { name: "Chanel", slug: "chanel" },
  { name: "Dior", slug: "dior" },
  { name: "Gucci", slug: "gucci" },
  { name: "Prada", slug: "prada" },
  { name: "Valentino", slug: "valentino" },
  { name: "Saint Laurent", slug: "saint-laurent" },
  { name: "Bottega Veneta", slug: "bottega-veneta" },
  { name: "Hermès", slug: "hermes" },
];

// Designer suggestions for men (more masculine/menswear focused)
const mensDesigners = [
  { name: "Tom Ford", slug: "tom-ford" },
  { name: "Burberry", slug: "burberry" },
  { name: "Stone Island", slug: "stone-island" },
  { name: "Off-White", slug: "off-white" },
  { name: "Balenciaga", slug: "balenciaga" },
  { name: "Givenchy", slug: "givenchy" },
  { name: "Moncler", slug: "moncler" },
  { name: "Polo Ralph Lauren", slug: "polo-ralph-lauren" },
];

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

  // Get appropriate designers based on current section
  const currentDesigners = isInMensSection ? mensDesigners : womensDesigners;

  // Get appropriate clothing link
  const getClothingLink = () => {
    return isInMensSection ? '/shop/mens/clothing' : '/shop/clothing';
  };

  // Get appropriate accessories link
  const getAccessoriesLink = () => {
    return isInMensSection ? '/shop/mens/accessories' : '/shop/accessories';
  };

  // Get men link
  const getMenLink = () => {
    return '/shop/mens';
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
      {/* <div className="md:hidden">
        <MobileHeader />
      </div> */}

      {/* Desktop Header */}
      <header role="banner" className="hidden md:block sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-extrabold tracking-wide hover:opacity-80 transition-opacity">
            THE OUTNET
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              to={getNewInLink()} 
              className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                isActive('/shop/just-in') || isActive('/shop/mens/just-in') ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              New In
            </Link>

            <Link 
              to="/shop/designers" 
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm"
            >
              Designers
            </Link>

            <Link 
              to={getClothingLink()} 
              className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                isActive('/shop/clothing') || isActive('/shop/mens/clothing') ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              Clothing
            </Link>

            <Link 
              to={getAccessoriesLink()} 
              className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                isActive('/shop/accessories') || isActive('/shop/mens/accessories') ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              Accessories
            </Link>

            <Link 
              to="/shop/designers" 
              className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                isActive('/shop/designers') ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              All Designers
            </Link>

            <Link 
              to={getMenLink()} 
              className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                isActive('/shop/mens') ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              Men
            </Link>
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
            {/* <CartDrawer /> */}
          </div>
        </div>
      </header>
    </>
  );
}