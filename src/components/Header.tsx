import { Link, useLocation } from "react-router-dom";
import CartDrawer from "@/components/CartDrawer";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header role="banner" className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-extrabold tracking-wide hover:opacity-80 transition-opacity">
          THE OUTNET • EXCLUSIVE
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Primary">
          <ul className="hidden md:flex gap-4 text-sm">
            <li>
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                  isActive('/') ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                New In
              </Link>
            </li>
            <li>
              <Link 
                to="/clothing" 
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                  isActive('/clothing') ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                Clothing
              </Link>
            </li>
            <li>
              <Link 
                to="/shoes" 
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                  isActive('/shoes') ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                Shoes
              </Link>
            </li>
            <li>
              <Link 
                to="/accessories" 
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                  isActive('/accessories') ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link 
                to="/designers" 
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                  isActive('/designers') ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                Designers
              </Link>
            </li>
            <li>
              <Link 
                to="/clearance" 
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition ${
                  isActive('/clearance') ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                Clearance
              </Link>
            </li>
            </ul>
          </nav>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}