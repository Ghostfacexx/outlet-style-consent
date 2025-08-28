import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const designers = [
  {
    name: "THOM BROWNE",
    description: "American luxury fashion house known for sophisticated tailoring and iconic striped details",
    image: "https://images.unsplash.com/photo-1594736797933-d0c5d1f82cf2?q=80&w=800&auto=format&fit=crop",
    productCount: 12,
    priceRange: "$200 - $2,000",
    specialties: ["Suiting", "Knitwear", "Accessories"],
  },
  {
    name: "JACQUEMUS",
    description: "French fashion house celebrated for architectural silhouettes and modern Mediterranean aesthetic",
    image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=800&auto=format&fit=crop",
    productCount: 8,
    priceRange: "$150 - $800",
    specialties: ["Ready-to-wear", "Bags", "Accessories"],
  },
  {
    name: "MAISON MARGIELA",
    description: "Belgian luxury fashion house known for deconstructivist and avant-garde designs",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    productCount: 15,
    priceRange: "$200 - $1,500",
    specialties: ["Footwear", "Knitwear", "Fragrances"],
  },
  {
    name: "FERRAGAMO",
    description: "Italian luxury goods company specializing in shoes, leather goods, and ready-to-wear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    productCount: 20,
    priceRange: "$300 - $2,500",
    specialties: ["Footwear", "Leather Goods", "Accessories"],
  },
  {
    name: "BURBERRY",
    description: "British luxury fashion house known for trench coats and distinctive check pattern",
    image: "https://images.unsplash.com/photo-1503342250614-ca440786f637?q=80&w=800&auto=format&fit=crop",
    productCount: 25,
    priceRange: "$150 - $3,000",
    specialties: ["Outerwear", "Scarves", "Bags"],
  },
  {
    name: "TOD'S",
    description: "Italian luxury fashion house known for leather goods, shoes, and lifestyle accessories",
    image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=800&auto=format&fit=crop",
    productCount: 18,
    priceRange: "$200 - $1,200",
    specialties: ["Footwear", "Leather Goods", "Driving Shoes"],
  },
  {
    name: "Y-3",
    description: "Collaboration between Yohji Yamamoto and Adidas, merging high fashion with sportswear",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    productCount: 10,
    priceRange: "$100 - $600",
    specialties: ["Sneakers", "Sportswear", "Streetwear"],
  },
  {
    name: "SANDRO",
    description: "French ready-to-wear brand offering contemporary fashion with Parisian flair",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    productCount: 22,
    priceRange: "$70 - $800",
    specialties: ["Ready-to-wear", "Knitwear", "Accessories"],
  },
  {
    name: "THE ELDER STATESMAN",
    description: "California-based luxury knitwear brand known for cashmere and laid-back luxury",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    productCount: 6,
    priceRange: "$100 - $500",
    specialties: ["Knitwear", "Cashmere", "Accessories"],
  },
];

export default function Designers() {
  return (
    <>
      <Helmet>
        <title>Designer Brands | Luxury Fashion at Outlet Prices</title>
        <meta name="description" content="Shop luxury designer brands at outlet prices. Thom Browne, Jacquemus, Maison Margiela, Ferragamo and more." />
        <link rel="canonical" href="/designers" />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li>
              <span className="text-muted-foreground/60">/</span>
            </li>
            <li>
              <span className="text-foreground font-medium">Designers</span>
            </li>
          </ol>
        </nav>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Designer Brands</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover luxury fashion from the world's most coveted designers, 
            all at unbeatable outlet prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designers.map((designer, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={designer.image} 
                  alt={`${designer.name} collection`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{designer.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {designer.productCount} items
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {designer.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Price Range</span>
                    <p className="font-semibold">{designer.priceRange}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Specialties</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {designer.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/clothing" 
                  className="inline-flex items-center text-sm font-medium mt-4 hover:underline"
                >
                  Shop {designer.name} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-muted/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find Your Designer?</h2>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Our designer selection changes frequently. Sign up for notifications 
            when your favorite brands arrive.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}