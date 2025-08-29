import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MobileBottomNav from "@/components/MobileBottomNav";
import heroWomen from "@/assets/hero-women.jpg";
import heroMen from "@/assets/hero-men.jpg";

const categoryLinks = {
  women: [
    { name: "Just In", path: "/shop/just-in" },
    { name: "Bestsellers", path: "/shop/bestsellers" },
    { name: "Designers", path: "/shop/designers" },
    { name: "Clothing", path: "/shop/clothing" },
    { name: "Shoes", path: "/shop/shoes" },
    { name: "Bags", path: "/shop/bags" },
    { name: "Accessories", path: "/shop/accessories" },
  ],
  men: [
    { name: "Just In", path: "/shop/mens/just-in" },
    { name: "Bestsellers", path: "/shop/mens/bestsellers" },
    { name: "Designers", path: "/shop/mens/designers" },
    { name: "Clothing", path: "/shop/mens/clothing" },
    { name: "Shoes", path: "/shop/mens/shoes" },
    { name: "Bags", path: "/shop/mens/bags" },
    { name: "Accessories", path: "/shop/mens/accessories" },
  ],
};

export default function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const canonical = useMemo(() => {
    if (typeof window === "undefined") return "/";
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    return url.pathname || "/";
  }, []);

  return (
    <>
      <Helmet>
        <title>THE OUTNET - Discount Designer Fashion for Women and Men</title>
        <meta name="description" content="Designer fashion at outlet prices. Shop luxury women's and men's clothing, shoes, bags and accessories from top brands." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="THE OUTNET - Designer Fashion Outlet" />
        <meta property="og:description" content="Shop designer fashion at outlet prices." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroWomen} />
        
        {/* Preload critical resources */}
        <link rel="preload" href={heroWomen} as="image" />
        <link rel="preload" href={heroMen} as="image" />
        
        {/* Performance hints */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* THE OUTNET Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-black">
            THE OUTNET
          </h1>
        </header>

        {/* Main Split Layout */}
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto px-4 gap-8 pb-16">
          
          {/* Women's Section */}
          <div className="group cursor-pointer">
            <Link to="/shop" className="block">
              <div className="relative overflow-hidden">
                <img 
                  src={heroWomen}
                  alt="Shop Women's Fashion"
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-light mb-8 border-b border-white pb-2 inline-block">
                    WOMEN
                  </h2>
                </div>
              </div>
            </Link>
            
            {/* Women's Category Links */}
            <div className="mt-6 space-y-3 text-center">
              {categoryLinks.women.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-700 hover:text-black transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Men's Section */}
          <div className="group cursor-pointer">
            <Link to="/shop/mens" className="block">
              <div className="relative overflow-hidden">
                <img 
                  src={heroMen}
                  alt="Shop Men's Fashion"
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-light mb-8 border-b border-white pb-2 inline-block">
                    MEN
                  </h2>
                </div>
              </div>
            </Link>
            
            {/* Men's Category Links */}
            <div className="mt-6 space-y-3 text-center">
              {categoryLinks.men.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-700 hover:text-black transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t bg-gray-50 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-medium text-black mb-4">Customer Care</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Track Your Order</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-black mb-4">About</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">About THE OUTNET</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-black mb-4">Services</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Personal Shopping</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Gift Cards</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Download App</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-black mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-500">
              <p>© 2025 THE OUTNET. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>

      <MobileBottomNav />
    </>
  );
}
