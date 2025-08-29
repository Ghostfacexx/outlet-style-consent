import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MobileBottomNav from "@/components/MobileBottomNav";
import heroWomen from "@/assets/hero-women.jpg";
import heroMen from "@/assets/hero-men.jpg";

// Designer Logos
import chanelLogo from "@/assets/logos/chanel-logo.png";
import diorLogo from "@/assets/logos/dior-logo.png";
import gucciLogo from "@/assets/logos/gucci-logo.png";
import pradaLogo from "@/assets/logos/prada-logo.png";
import saintLaurentLogo from "@/assets/logos/saint-laurent-logo.png";
import hermesLogo from "@/assets/logos/hermes-logo.png";
import tomFordLogo from "@/assets/logos/tom-ford-logo.png";
import burberryLogo from "@/assets/logos/burberry-logo.png";
import stoneIslandLogo from "@/assets/logos/stone-island-logo.png";
import offWhiteLogo from "@/assets/logos/off-white-logo.png";
import balenciagaLogo from "@/assets/logos/balenciaga-logo.png";
import monclerLogo from "@/assets/logos/moncler-logo.png";

const categoryLinks = {
  women: [
    { name: "New In", path: "/shop/just-in", isNewIn: true },
    { name: "Chanel", path: "/shop/designers/chanel", logo: chanelLogo },
    { name: "Dior", path: "/shop/designers/dior", logo: diorLogo },
    { name: "Gucci", path: "/shop/designers/gucci", logo: gucciLogo },
    { name: "Prada", path: "/shop/designers/prada", logo: pradaLogo },
    { name: "Saint Laurent", path: "/shop/designers/saint-laurent", logo: saintLaurentLogo },
    { name: "Hermès", path: "/shop/designers/hermes", logo: hermesLogo },
  ],
  men: [
    { name: "New In", path: "/shop/mens/just-in", isNewIn: true },
    { name: "Tom Ford", path: "/shop/designers/tom-ford", logo: tomFordLogo },
    { name: "Burberry", path: "/shop/designers/burberry", logo: burberryLogo },
    { name: "Stone Island", path: "/shop/designers/stone-island", logo: stoneIslandLogo },
    { name: "Off-White", path: "/shop/designers/off-white", logo: offWhiteLogo },
    { name: "Balenciaga", path: "/shop/designers/balenciaga", logo: balenciagaLogo },
    { name: "Moncler", path: "/shop/designers/moncler", logo: monclerLogo },
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
            
            {/* Women's Designer Showcase */}
            <div className="mt-8 bg-gradient-to-b from-gray-50 to-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full shadow-lg mb-4 group hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <span className="text-4xl font-light text-pink-600 group-hover:text-pink-700 transition-colors duration-300">♀</span>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categoryLinks.women.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {link.isNewIn ? (
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-800 transition-colors">
                        <span className="text-xs font-medium">NEW</span>
                      </div>
                    ) : (
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors overflow-hidden">
                        <img 
                          src={link.logo} 
                          alt={`${link.name} logo`}
                          className="w-12 h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    )}
                    <span className="text-xs font-medium text-gray-700 group-hover:text-black transition-colors text-center">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
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
            
            {/* Men's Designer Showcase */}
            <div className="mt-8 bg-gradient-to-b from-gray-50 to-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full shadow-lg mb-4 group hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <span className="text-4xl font-light text-blue-600 group-hover:text-blue-700 transition-colors duration-300">♂</span>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categoryLinks.men.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {link.isNewIn ? (
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-800 transition-colors">
                        <span className="text-xs font-medium">NEW</span>
                      </div>
                    ) : (
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors overflow-hidden">
                        <img 
                          src={link.logo} 
                          alt={`${link.name} logo`}
                          className="w-12 h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    )}
                    <span className="text-xs font-medium text-gray-700 group-hover:text-black transition-colors text-center">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
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
