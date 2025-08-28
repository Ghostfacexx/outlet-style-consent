import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import ProductCard from "@/components/ProductCard";
import MobileBottomNav from "@/components/MobileBottomNav";


// Working hero images
const heroImg = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3";
const sideImg = "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3";

const promos = [
  {
    title: "THIS FALL, FIND THE ONE",
    subtitle: "Meet your match: The sweaters and jackets you've been waiting for are finally here",
    img: "https://images.unsplash.com/photo-1503342250614-ca440786f637?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    cta: "Shop Now",
  },
  {
    title: "NEW IN: THE ELDER STATESMAN", 
    subtitle: "Lean into laid-back LA cool with the coolest pieces in the game",
    img: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    cta: "Shop Now",
  },
  {
    title: "JUST IN",
    subtitle: "A curated selection of the latest styles",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    cta: "Shop Now",
  },
];

// Real products from THE OUTNET - OFFICINE GÉNÉRALE collection
const products = [
  {
    id: "1",
    title: "OFFICINE GÉNÉRALE • Milos Merino Wool Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$189",
    old: "$315",
  },
  {
    id: "2", 
    title: "OFFICINE GÉNÉRALE • Benoit Checked Cotton Twill Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943719/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$129", 
    old: "$215",
  },
  {
    id: "3",
    title: "THOM BROWNE • Leather-Trimmed Canvas Backpack",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    price: "$653",
    old: "$1,450",
  },
  {
    id: "c1",
    title: "THOM BROWNE • Striped Cotton Twill Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
    price: "$698",
    old: "$1,550",
  },
  {
    id: "c2",
    title: "JACQUEMUS • Intarsia Alpaca-Blend Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
    price: "$292",
    old: "$730",
  },
  {
    id: "s1",
    title: "FERRAGAMO • Geremia Gancini Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
    price: "$775",
    old: "$1,550",
  },
  {
    id: "c7",
    title: "THOM BROWNE • Intarsia Merino Wool Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162874216/F/w340_q80.jpg",
    price: "$775",
    old: "$1,550",
  },
  {
    id: "a1",
    title: "THOM BROWNE • Gold-Tone Watch",
    img: "https://www.theoutnet.com/variants/images/46376663162947872/F/w340_q80.jpg",
    price: "$1,195",
    old: "$2,390",
  },
];

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
        <title>Outlet Fashion | Men | 25% App Discount</title>
        <meta name="description" content="Designer menswear at outlet prices. Download our official app and get 25% off your first in‑app purchase." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Outlet Fashion | Men" />
        <meta property="og:description" content="Shop premium menswear. Get 25% off in the app." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImg} />
      </Helmet>

      <a href="#main" className="sr-only">Skip to content</a>

      <main id="main" role="main" className="mobile-container pb-20 md:pb-6">
        <section className="grid lg:grid-cols-[1.2fr,1fr] gap-4 lg:gap-6 items-center py-4 lg:py-8">
          <article className="rounded-2xl border overflow-hidden bg-gradient-to-b from-muted/40 to-accent mobile-fade-in" aria-roledescription="hero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 lg:p-6 flex flex-col justify-center gap-3">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">Designer menswear at outlet prices</h1>
                <p className="text-muted-foreground text-sm lg:text-base">Discover this week's drops, seasonal staples, and clearance steals from top designers.</p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <Button variant="hero" className="mobile-touch" data-test="cta-shop-now" onClick={() => {
                    const el = document.getElementById('products');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}>Shop now</Button>
                  <Button variant="outline" className="mobile-touch" asChild>
                    <a href="#new">New arrivals</a>
                  </Button>
                </div>
              </div>
              <img src={heroImg} alt="Man wearing designer outfit" loading="lazy" className="h-48 md:h-full w-full object-cover" />
            </div>
          </article>
          <aside className="hidden lg:block">
            <img src={sideImg} alt="Men's fashion lookbook" loading="lazy" className="rounded-2xl border" />
          </aside>
        </section>

        <section aria-label="Promotions" className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 lg:my-6">
          {promos.map((p, i) => (
            <Card key={i} className="overflow-hidden group hover:shadow-lg transition-all duration-300 mobile-fade-in">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-36 md:h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardContent className="flex items-start justify-between gap-2 p-3 md:p-4">
                <div className="flex-1">
                  <strong className="block text-sm font-semibold mb-1">{p.title}</strong>
                  <span className="text-muted-foreground text-xs leading-relaxed">{p.subtitle}</span>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 mobile-touch">{p.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="products" aria-labelledby="products-title" className="my-4">
          <h2 id="products-title" className="text-lg lg:text-xl font-semibold mb-3">Just In: Designer Menswear</h2>
          <div className="mobile-grid gap-3 lg:gap-4">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                img={p.img}
                price={p.price}
                old={p.old}
              />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/clothing">
              <Button variant="outline" className="mobile-touch min-w-32">
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="border-t mt-10 py-6 text-sm text-muted-foreground">
        <div className="mobile-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Track Your Order</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Create A Return</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">About THE OUTNET</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Press</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Download Our App</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Personal Shopping</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Gift Cards</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors mobile-touch">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Connect</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors mobile-touch">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors mobile-touch">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors mobile-touch">Facebook</a>
              </div>
              <p className="text-xs">Free shipping over $150</p>
              <p className="text-xs">10% off first app order with APP10</p>
            </div>
          </div>
          <div className="border-t pt-4 text-center">
            © 2025 THE OUTNET • MEN. Data sourced from theoutnet.com for testing purposes.
          </div>
        </div>
      </footer>

      <MobileBottomNav />
      
    </>
  );
}
