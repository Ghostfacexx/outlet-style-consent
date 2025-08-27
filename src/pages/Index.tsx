import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import AppDownloadPrompt from "@/components/AppDownloadPrompt";

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
    title: "OFFICINE GÉNÉRALE • Milos Merino Wool Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$189",
    old: "$315",
  },
  {
    title: "OFFICINE GÉNÉRALE • Benoit Checked Cotton Twill Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943719/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$129", 
    old: "$215",
  },
  {
    title: "OFFICINE GÉNÉRALE • James Cotton Corduroy Pants",
    img: "https://www.theoutnet.com/variants/images/46376663162944045/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$149",
    old: "$245",
  },
  {
    title: "OFFICINE GÉNÉRALE • Harrison Wool Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943938/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$299",
    old: "$495",
  },
  {
    title: "OFFICINE GÉNÉRALE • Eloi Cotton Poplin Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943947/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$109",
    old: "$185",
  },
  {
    title: "OFFICINE GÉNÉRALE • Giovanni Suit Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162944023/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$399",
    old: "$665",
  },
  {
    title: "OFFICINE GÉNÉRALE • Matty Wool Bomber Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162885748/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$349",
    old: "$585",
  },
  {
    title: "OFFICINE GÉNÉRALE • Tahar Ribbed Merino Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879932/F/w300.jpg?imwidth=800&improfile=isc",
    price: "$199",
    old: "$335",
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

      <main id="main" role="main" className="container mx-auto px-4">
        <section className="grid lg:grid-cols-[1.2fr,1fr] gap-6 items-center py-8">
          <article className="rounded-2xl border overflow-hidden bg-gradient-to-b from-muted/40 to-accent" aria-roledescription="hero">
            <div className="grid md:grid-cols-2">
              <div className="p-6 flex flex-col justify-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">Designer menswear at outlet prices</h1>
                <p className="text-muted-foreground">Discover this week's drops, seasonal staples, and clearance steals from top designers.</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button variant="hero" data-test="cta-shop-now" onClick={() => {
                    const el = document.getElementById('products');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}>Shop now</Button>
                  <Button variant="outline" asChild>
                    <a href="#new">New arrivals</a>
                  </Button>
                </div>
              </div>
              <img src={heroImg} alt="Man wearing designer outfit" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </article>
          <aside>
            <img src={sideImg} alt="Men's fashion lookbook" loading="lazy" className="rounded-2xl border" />
          </aside>
        </section>

        <section aria-label="Promotions" className="grid md:grid-cols-3 gap-4 my-6">
          {promos.map((p, i) => (
            <Card key={i} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardContent className="flex items-start justify-between gap-2 p-4">
                <div className="flex-1">
                  <strong className="block text-sm font-semibold mb-1">{p.title}</strong>
                  <span className="text-muted-foreground text-xs leading-relaxed">{p.subtitle}</span>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">{p.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="products" aria-labelledby="products-title" className="my-4">
          <h2 id="products-title" className="text-xl font-semibold mb-3">Just In: Designer Menswear</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <Link key={i} to={`/product/${i + 1}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      SALE
                    </div>
                  </div>
                  <CardContent className="grid gap-2 p-4">
                    <div className="text-sm text-muted-foreground line-clamp-2">{p.title}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-foreground">{p.price}</span>
                      <span className="text-xs line-through text-muted-foreground">{p.old}</span>
                      <span className="text-xs text-green-600 font-medium ml-auto">
                        {(() => {
                          const currentPrice = parseFloat(p.price.replace('$', '').replace(',', ''));
                          const originalPrice = parseFloat(p.old.replace('$', '').replace(',', ''));
                          const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
                          return `${discount}% OFF`;
                        })()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/clothing">
              <Button variant="outline" className="min-w-32">
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="border-t mt-10 py-6 text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Create A Return</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors">About THE OUTNET</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors">Download Our App</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Personal Shopping</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Gift Cards</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Connect</h3>
              <div className="flex gap-3 mb-3">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
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

      {mounted && <AppDownloadPrompt />}
    </>
  );
}
