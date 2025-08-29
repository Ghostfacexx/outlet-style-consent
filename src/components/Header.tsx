import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import CartDrawer from "@/components/CartDrawer";
import MobileHeader from "@/components/MobileHeader";
import { LogIn, LogOut, User, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
  const getCurrentDesigners = () => {
    return isInMensSection ? mensDesigners : womensDesigners;
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to={getNewInLink()} 
                    className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                      isActive('/shop/just-in') || isActive('/shop/mens/just-in') ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    New In
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    {isInMensSection ? 'Men' : 'Women'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-1 p-4">
                      <h4 className="text-sm font-medium mb-2">
                        {isInMensSection ? 'Popular Men\'s Designers' : 'Popular Women\'s Designers'}
                      </h4>
                      {getCurrentDesigners().map((designer) => (
                        <NavigationMenuLink key={designer.slug} asChild>
                          <Link
                            to={`/shop/designers/${designer.slug}`}
                            className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                          >
                            {designer.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Clothing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[250px] gap-1 p-4">
                      {isInMensSection ? (
                        <>
                          <h4 className="text-sm font-medium mb-2">Men's Essentials</h4>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/mens/clothing" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              All Men's Clothing
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/tom-ford" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Tom Ford Tailoring
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/stone-island" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Stone Island Casual
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/moncler" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Moncler Outerwear
                            </Link>
                          </NavigationMenuLink>
                        </>
                      ) : (
                        <>
                          <h4 className="text-sm font-medium mb-2">Women's Fashion</h4>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/clothing" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              All Women's Clothing
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/chanel" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Chanel Classics
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/dior" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Dior Elegance
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/valentino" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Valentino Romance
                            </Link>
                          </NavigationMenuLink>
                        </>
                      )}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Accessories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[250px] gap-1 p-4">
                      {isInMensSection ? (
                        <>
                          <h4 className="text-sm font-medium mb-2">Men's Accessories</h4>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/mens/accessories" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              All Men's Accessories
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/burberry" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Burberry Scarves
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/off-white" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Off-White Streetwear
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/mens/bags" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Designer Bags
                            </Link>
                          </NavigationMenuLink>
                        </>
                      ) : (
                        <>
                          <h4 className="text-sm font-medium mb-2">Women's Accessories</h4>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/accessories" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              All Women's Accessories
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/hermes" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Hermès Heritage
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/designers/saint-laurent" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Saint Laurent Bags
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/bags" className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                              Designer Handbags
                            </Link>
                          </NavigationMenuLink>
                        </>
                      )}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/shop/designers" 
                    className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm ${
                      isActive('/shop/designers') ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    All Designers
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to={isInMensSection ? "/shop" : "/shop/mens"} 
                    className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-sm"
                  >
                    {isInMensSection ? 'Women' : 'Men'}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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