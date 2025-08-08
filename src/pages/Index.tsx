import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import AppDownloadPrompt from "@/components/AppDownloadPrompt";

const heroImg = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop";
const sideImg = "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop";

const promos = [
  {
    title: "Sneaker spotlight",
    subtitle: "Save up to 60%",
    img: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    cta: "Shop",
  },
  {
    title: "Tailoring edit",
    subtitle: "Half-price heroes",
    img: "https://images.unsplash.com/photo-1503342250614-ca440786f637?q=80&w=1200&auto=format&fit=crop",
    cta: "Explore",
  },
  {
    title: "Accessories under $150",
    subtitle: "Belts, caps & more",
    img: "https://images.unsplash.com/photo-1548625361-58a9b86aa83b?q=80&w=1200&auto=format&fit=crop",
    cta: "View",
  },
];

const products = [
  {
    title: "Brand • Leather Jacket",
    img: "https://images.unsplash.com/photo-1528702762834-46017996a8f5?q=80&w=1200&auto=format&fit=crop",
    price: "$299",
    old: "$540",
  },
  {
    title: "Brand • Sneakers",
    img: "https://images.unsplash.com/photo-1520975930414-c2b5c3a50f0a?q=80&w=1200&auto=format&fit=crop",
    price: "$129",
    old: "$220",
  },
  {
    title: "Brand • Denim",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    price: "$89",
    old: "$150",
  },
  {
    title: "Brand • Backpack",
    img: "https://images.unsplash.com/photo-1520975940070-6c0b5a61a616?q=80&w=1200&auto=format&fit=crop",
    price: "$99",
    old: "$160",
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

      <header role="banner" className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-extrabold tracking-wide">THE OUTNET • MEN</div>
          <nav aria-label="Primary">
            <ul className="hidden md:flex gap-4 text-sm">
              <li><a href="#" aria-current="page" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">New In</a></li>
              <li><a href="#" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">Clothing</a></li>
              <li><a href="#" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">Shoes</a></li>
              <li><a href="#" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">Accessories</a></li>
              <li><a href="#" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">Designers</a></li>
              <li><a href="#" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">Clearance</a></li>
            </ul>
          </nav>
        </div>
      </header>

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
            <Card key={i} className="overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-44 w-full object-cover" />
              <CardContent className="flex items-center justify-between gap-2 p-4">
                <div>
                  <strong className="block text-sm">{p.title}</strong>
                  <span className="text-muted-foreground text-sm">{p.subtitle}</span>
                </div>
                <Button variant="outline">{p.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="products" aria-labelledby="products-title" className="my-4">
          <h2 id="products-title" className="text-xl font-semibold mb-3">Trending now</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <Card key={i} className="overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-48 w-full object-cover" />
                <CardContent className="grid gap-2 p-4">
                  <div className="text-sm text-muted-foreground">{p.title}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-foreground">{p.price}</span>
                    <span className="text-xs line-through text-muted-foreground">{p.old}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="border-t mt-10 py-6 text-sm text-muted-foreground">
        <div className="container mx-auto px-4">© 2025 Outlet Mirror. For testing only.</div>
      </footer>

      {mounted && <AppDownloadPrompt />}
    </>
  );
}
