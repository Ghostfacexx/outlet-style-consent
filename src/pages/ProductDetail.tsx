import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Heart, Share2, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import PaymentButton from "@/components/PaymentButton";

// All products from main page and other sections
const allProducts = [
  // Main page products (1, 2, 3)
  {
    id: "1",
    title: "OFFICINE GÉNÉRALE • Milos Merino Wool Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$189",
    old: "$315",
    category: "Knitwear",
    brand: "OFFICINE GÉNÉRALE",
    description: "Luxurious merino wool cardigan with contemporary design. Perfect for layering with sophisticated styling.",
    details: ["100% Merino Wool", "Dry clean only", "Made in Italy", "Regular fit", "Button closure"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    title: "OFFICINE GÉNÉRALE • Benoit Checked Cotton Twill Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162943719/F/w300.jpg?imwidth=800&improfile=isc",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162943719/F/w300.jpg?imwidth=800&improfile=isc",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$129",
    old: "$215",
    category: "Shirts",
    brand: "OFFICINE GÉNÉRALE",
    description: "Classic checked cotton twill shirt with refined tailoring and contemporary fit.",
    details: ["100% Cotton Twill", "Machine wash", "Made in Italy", "Regular fit", "Button collar"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "3",
    title: "THOM BROWNE • Leather-Trimmed Canvas Backpack",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$653",
    old: "$1,450",
    category: "Bags",
    brand: "THOM BROWNE",
    description: "Premium canvas backpack with leather trim, featuring signature details and superior craftsmanship.",
    details: ["Canvas with leather trim", "Interior laptop compartment", "Made in Italy", "One size", "Adjustable straps"],
    sizes: ["One Size"],
  },
  
  // Clothing (c1-c20)
  // Clothing (c1-c20)
  {
    id: "c1",
    title: "THOM BROWNE • Striped Cotton Twill Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162874234/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$698",
    old: "$1,550",
    category: "Jackets",
    brand: "THOM BROWNE",
    description: "Striped cotton twill overshirt with signature details. Classic tailoring meets contemporary design in this versatile piece.",
    details: ["100% Cotton Twill", "Dry clean only", "Made in USA", "Regular fit", "Button closure"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c2",
    title: "JACQUEMUS • Intarsia Alpaca-Blend Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162878498/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$292",
    old: "$730",
    category: "Knitwear",
    brand: "JACQUEMUS",
    description: "Luxurious intarsia alpaca-blend sweater with distinctive pattern. Soft and warm with a contemporary silhouette.",
    details: ["80% Alpaca, 20% Wool", "Hand wash", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c3",
    title: "SANDRO • Twill Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162847617/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847617/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$320",
    old: "$640",
    category: "Jackets",
    brand: "SANDRO",
    description: "Classic twill jacket with modern tailoring. Perfect for both casual and formal occasions.",
    details: ["Cotton Twill", "Dry clean", "Made in France", "Regular fit", "Front closure"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c4",
    title: "JACQUEMUS • Seville Ribbed Wool Hoodie",
    img: "https://www.theoutnet.com/variants/images/46376663162879154/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879154/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1556821840-3a9c6c1a8b18?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$318",
    old: "$705",
    category: "Knitwear",
    brand: "JACQUEMUS",
    description: "Luxurious ribbed wool hoodie with contemporary design elements.",
    details: ["100% Merino Wool", "Hand wash", "Made in Italy", "Relaxed fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c5",
    title: "JACQUEMUS • Pau Button-Detailed Knitted Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162879120/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879120/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$202",
    old: "$505",
    category: "Knitwear",
    brand: "JACQUEMUS",
    description: "Distinctive button-detailed knitted sweater with architectural design.",
    details: ["Wool blend", "Hand wash", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c6",
    title: "SANDRO • Wool-Blend Felt Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162846675/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162846675/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$335",
    old: "$670",
    category: "Jackets",
    brand: "SANDRO",
    description: "Premium wool-blend felt jacket with contemporary tailoring and luxurious finish.",
    details: ["Wool blend felt", "Dry clean", "Made in France", "Regular fit", "Button closure"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c7",
    title: "THOM BROWNE • Intarsia Merino Wool Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162874216/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874216/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$775",
    old: "$1,550",
    category: "Knitwear",
    brand: "THOM BROWNE",
    description: "Premium intarsia merino wool sweater with signature four-bar stripe.",
    details: ["100% Merino Wool", "Dry clean", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c8",
    title: "SANDRO • Striped Cotton T-Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162847684/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847684/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$48",
    old: "$95",
    category: "T-Shirts",
    brand: "SANDRO",
    description: "Classic striped cotton t-shirt with modern fit and premium quality.",
    details: ["100% Cotton", "Machine wash", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "c9",
    title: "JACQUEMUS • Le T-Shirt Brodé",
    img: "https://www.theoutnet.com/variants/images/46376663162879088/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879088/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$135",
    old: "$270",
    category: "T-Shirts",
    brand: "JACQUEMUS",
    description: "Embroidered t-shirt with subtle logo detailing and premium cotton construction.",
    details: ["100% Cotton", "Machine wash", "Made in Portugal", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c10",
    title: "SANDRO • Logo Hoodie",
    img: "https://www.theoutnet.com/variants/images/46376663162847651/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847651/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1556821840-3a9c6c1a8b18?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$155",
    old: "$310",
    category: "Sweatshirts",
    brand: "SANDRO",
    description: "Comfortable logo hoodie with contemporary styling and quality construction.",
    details: ["Cotton blend", "Machine wash", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c11",
    title: "JACQUEMUS • Le Polo Mousse",
    img: "https://www.theoutnet.com/variants/images/46376663162879104/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879104/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$168",
    old: "$335",
    category: "Polo Shirts",
    brand: "JACQUEMUS",
    description: "Elevated polo shirt with contemporary design and premium materials.",
    details: ["Premium Cotton", "Machine wash", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c12",
    title: "THOM BROWNE • Oxford Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162874200/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874200/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$276",
    old: "$690",
    category: "Shirts",
    brand: "THOM BROWNE",
    description: "Classic oxford shirt with signature three-quarter sleeve and button-down collar.",
    details: ["100% Cotton Oxford", "Machine wash", "Made in USA", "Slim fit"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c13",
    title: "SANDRO • Wool Blend Coat",
    img: "https://www.theoutnet.com/variants/images/46376663162847668/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847668/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$398",
    old: "$995",
    category: "Coats",
    brand: "SANDRO",
    description: "Sophisticated wool blend coat with timeless design and modern tailoring.",
    details: ["Wool blend", "Dry clean", "Made in France", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c14",
    title: "JACQUEMUS • Le Jean de Nîmes",
    img: "https://www.theoutnet.com/variants/images/46376663162879072/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879072/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$224",
    old: "$445",
    category: "Jeans",
    brand: "JACQUEMUS",
    description: "Contemporary jeans with distinctive cut and premium denim construction.",
    details: ["100% Cotton Denim", "Machine wash", "Made in France", "Slim fit"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "c15",
    title: "THOM BROWNE • 4-Bar Stripe Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162874182/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874182/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$892",
    old: "$1,785",
    category: "Knitwear",
    brand: "THOM BROWNE",
    description: "Iconic 4-bar stripe cardigan crafted from premium merino wool.",
    details: ["100% Merino Wool", "Dry clean", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c16",
    title: "SANDRO • Printed Silk Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162847700/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847700/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$168",
    old: "$335",
    category: "Shirts",
    brand: "SANDRO",
    description: "Luxurious printed silk shirt with contemporary pattern and refined finish.",
    details: ["100% Silk", "Dry clean", "Made in France", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c17",
    title: "JACQUEMUS • Le Short Gardian",
    img: "https://www.theoutnet.com/variants/images/46376663162879056/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879056/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$135",
    old: "$270",
    category: "Shorts",
    brand: "JACQUEMUS",
    description: "Contemporary shorts with relaxed fit and premium construction.",
    details: ["Cotton blend", "Machine wash", "Made in Portugal", "Relaxed fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c18",
    title: "THOM BROWNE • Unconstructed Blazer",
    img: "https://www.theoutnet.com/variants/images/46376663162874166/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874166/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$1,595",
    old: "$3,190",
    category: "Blazers",
    brand: "THOM BROWNE",
    description: "Unconstructed blazer with signature shrunken fit and premium tailoring.",
    details: ["Wool blend", "Dry clean", "Made in USA", "Slim fit"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c19",
    title: "SANDRO • Cashmere Scarf",
    img: "https://www.theoutnet.com/variants/images/46376663162847717/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847717/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$135",
    old: "$270",
    category: "Accessories",
    brand: "SANDRO",
    description: "Luxurious cashmere scarf with timeless design and superior softness.",
    details: ["100% Cashmere", "Hand wash", "Made in Scotland", "One size"],
    sizes: ["One Size"],
  },
  {
    id: "c20",
    title: "JACQUEMUS • Le Pantalon Santon",
    img: "https://www.theoutnet.com/variants/images/46376663162879040/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879040/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$292",
    old: "$585",
    category: "Trousers",
    brand: "JACQUEMUS",
    description: "Tailored trousers with contemporary cut and premium fabric construction.",
    details: ["Wool blend", "Dry clean", "Made in Italy", "Slim fit"],
    sizes: ["28", "30", "32", "34", "36"],
  },

  // Shoes (s1-s20)
  {
    id: "s1",
    title: "FERRAGAMO • Geremia Gancini Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162956885/R/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$775",
    old: "$1,550",
    category: "Boots",
    brand: "FERRAGAMO",
    description: "Premium leather boots featuring the iconic Gancini hardware. Crafted in Italy with superior materials and construction.",
    details: ["Premium Italian Leather", "Rubber sole", "Made in Italy", "True to size", "Gancini hardware"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s2",
    title: "CONVERSE X COMME DES GARÇONS PLAY • Chuck 70 Canvas High-Top Sneakers",
    img: "https://www.theoutnet.com/variants/images/46376663162858873/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162858873/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$105",
    old: "$150",
    category: "Sneakers",
    brand: "CONVERSE X CDG",
    description: "Iconic Chuck 70 sneakers with CDG PLAY heart logo. Classic design meets contemporary collaboration.",
    details: ["Canvas upper", "Rubber sole", "High-top design", "CDG PLAY branding"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s3",
    title: "SANDRO • Mesh and Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/46376663162847635/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847635/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$165",
    old: "$330",
    category: "Sneakers",
    brand: "SANDRO",
    description: "Contemporary mesh and leather sneakers with modern design and comfortable fit.",
    details: ["Mesh and leather upper", "Rubber sole", "Made in Portugal", "Regular fit"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s4",
    title: "MAISON MARGIELA • Shell Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597342177057/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597342177057/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$296",
    old: "$740",
    category: "Sneakers",
    brand: "MAISON MARGIELA",
    description: "Avant-garde shell sneakers with distinctive construction and innovative design.",
    details: ["Premium materials", "Rubber sole", "Made in Italy", "Unique shell design"],
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    id: "s5",
    title: "Y-3 • Superstar Embroidered Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597345838032/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597345838032/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$116",
    old: "$330",
    category: "Sneakers",
    brand: "Y-3",
    description: "Luxury athletic sneakers combining adidas performance with Yohji Yamamoto's aesthetic.",
    details: ["Leather upper", "Rubber sole", "Made in Vietnam", "Y-3 collaboration"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s6",
    title: "GOLDEN GOOSE • Super-Star Distressed Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597354394734/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597354394734/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$264",
    old: "$530",
    category: "Sneakers",
    brand: "GOLDEN GOOSE",
    description: "Iconic Super-Star sneakers with signature distressed finish and star logo.",
    details: ["Distressed leather", "Rubber sole", "Made in Italy", "Star logo"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s7",
    title: "STONE ISLAND • Compass Logo Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597353075102/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597353075102/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$185",
    old: "$370",
    category: "Sneakers",
    brand: "STONE ISLAND",
    description: "Technical sneakers featuring the iconic compass logo and innovative materials.",
    details: ["Technical fabric", "Rubber sole", "Made in Italy", "Compass logo"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s8",
    title: "VEJA • V-10 Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597351397294/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597351397294/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$87",
    old: "$145",
    category: "Sneakers",
    brand: "VEJA",
    description: "Sustainable leather sneakers with V-logo and eco-friendly construction.",
    details: ["Sustainable leather", "Wild rubber sole", "Made in Brazil", "V-logo"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s9",
    title: "COMMON PROJECTS • Achilles Original Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597349719566/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597349719566/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$224",
    old: "$448",
    category: "Sneakers",
    brand: "COMMON PROJECTS",
    description: "Minimalist luxury sneakers with premium leather and clean design aesthetic.",
    details: ["Premium leather", "Rubber sole", "Made in Italy", "Gold-stamped numbers"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s10",
    title: "BALENCIAGA • Track Mesh and Rubber Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597348041838/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597348041838/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$497",
    old: "$995",
    category: "Sneakers",
    brand: "BALENCIAGA",
    description: "Futuristic Track sneakers with complex mesh and rubber construction.",
    details: ["Mesh and rubber", "Complex sole", "Made in Italy", "Futuristic design"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s11",
    title: "BOTTEGA VENETA • Speedster Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597346364110/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597346364110/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$443",
    old: "$885",
    category: "Sneakers",
    brand: "BOTTEGA VENETA",
    description: "Luxury Speedster sneakers with signature intrecciato detailing.",
    details: ["Premium leather", "Intrecciato details", "Made in Italy", "Luxury finish"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s12",
    title: "FEAR OF GOD ESSENTIALS • Basketball Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597344686382/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597344686382/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$78",
    old: "$195",
    category: "Sneakers",
    brand: "FEAR OF GOD",
    description: "Contemporary basketball-inspired sneakers with minimalist aesthetics.",
    details: ["Canvas and leather", "Rubber sole", "Made in Vietnam", "Basketball inspired"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "s13",
    title: "RICK OWENS • DRKSHDW Ramones Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597343008654/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597343008654/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$276",
    old: "$690",
    category: "Sneakers",
    brand: "RICK OWENS",
    description: "Avant-garde Ramones sneakers with distinctive DRKSHDW aesthetic.",
    details: ["Canvas upper", "Rubber sole", "Made in Italy", "Avant-garde design"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s14",
    title: "ACNE STUDIOS • Perey Lace-Up Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597341330926/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597341330926/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$168",
    old: "$420",
    category: "Sneakers",
    brand: "ACNE STUDIOS",
    description: "Minimalist lace-up sneakers with Scandinavian design sensibility.",
    details: ["Leather upper", "Rubber sole", "Made in Portugal", "Minimalist design"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s15",
    title: "ALEXANDER MCQUEEN • Oversized Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597339653198/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597339653198/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$297",
    old: "$595",
    category: "Sneakers",
    brand: "ALEXANDER MCQUEEN",
    description: "Iconic oversized sneakers with exaggerated proportions and luxury finish.",
    details: ["Premium leather", "Oversized sole", "Made in Italy", "Luxury construction"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s16",
    title: "MAISON MARGIELA • Tabi Split-Toe Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597337975470/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597337975470/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$387",
    old: "$775",
    category: "Sneakers",
    brand: "MAISON MARGIELA",
    description: "Signature Tabi sneakers with distinctive split-toe design in sneaker form.",
    details: ["Premium materials", "Split-toe design", "Made in Italy", "Signature Tabi style"],
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    id: "s17",
    title: "PALM ANGELS • Track Runner Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597336297742/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597336297742/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$264",
    old: "$665",
    category: "Sneakers",
    brand: "PALM ANGELS",
    description: "Contemporary track runner sneakers with street-luxury aesthetics.",
    details: ["Mixed materials", "Rubber sole", "Made in Italy", "Street luxury"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s18",
    title: "OFF-WHITE • Out Of Office Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597334620014/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597334620014/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$297",
    old: "$595",
    category: "Sneakers",
    brand: "OFF-WHITE",
    description: "Signature Out Of Office sneakers with iconic OFF-WHITE design elements.",
    details: ["Leather and fabric", "Rubber sole", "Made in Italy", "Signature branding"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s19",
    title: "LANVIN • Curb Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597332942286/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597332942286/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$443",
    old: "$885",
    category: "Sneakers",
    brand: "LANVIN",
    description: "Luxury Curb sneakers with distinctive chunky silhouette and premium materials.",
    details: ["Premium leather", "Chunky sole", "Made in Italy", "Luxury streetwear"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "s20",
    title: "GIVENCHY • City Sport Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597331264558/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597331264558/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$387",
    old: "$775",
    category: "Sneakers",
    brand: "GIVENCHY",
    description: "Contemporary City Sport sneakers with refined athletic aesthetics.",
    details: ["Mixed materials", "Rubber sole", "Made in Italy", "Athletic luxury"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },

  // Clearance products (cl1-cl8)
  {
    id: "cl1",
    title: "ACNE STUDIOS • N3W Coated Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597290348742/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597290348742/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$123",
    old: "$410",
    category: "Sneakers",
    brand: "ACNE STUDIOS",
    description: "Contemporary coated sneakers with distinctive Scandinavian design aesthetic and premium construction.",
    details: ["Coated upper", "Rubber sole", "Made in Portugal", "Regular fit"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "cl2",
    title: "Y-3 • Superstar Embroidered Leather Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597345838032/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597345838032/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$116",
    old: "$330",
    category: "Sneakers",
    brand: "Y-3",
    description: "Luxury athletic sneakers combining adidas performance with Yohji Yamamoto's aesthetic.",
    details: ["Leather upper", "Rubber sole", "Made in Vietnam", "Y-3 collaboration"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "cl3",
    title: "ADIDAS ORIGINALS BY CRAIG GREEN • Stan Smith Boost Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597349740831/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597349740831/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$90",
    old: "$300",
    category: "Sneakers",
    brand: "ADIDAS X CRAIG GREEN",
    description: "Innovative Stan Smith Boost sneakers with Craig Green's avant-garde design approach.",
    details: ["Boost technology", "Premium materials", "Made in Vietnam", "Limited edition"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "cl4",
    title: "RICK OWENS • Metallic Leather Pouch",
    img: "https://www.theoutnet.com/variants/images/1647597286810916/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597286810916/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$159",
    old: "$528",
    category: "Bags",
    brand: "RICK OWENS",
    description: "Avant-garde metallic leather pouch with distinctive Rick Owens aesthetic and functional design.",
    details: ["Metallic leather", "Zip closure", "Made in Italy", "Avant-garde design"],
    sizes: ["One Size"],
  },
  {
    id: "cl5",
    title: "DOLCE&GABBANA • Velvet and Leather Belt",
    img: "https://www.theoutnet.com/variants/images/1647597335681009/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597335681009/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$134",
    old: "$445",
    category: "Belts",
    brand: "DOLCE&GABBANA",
    description: "Luxurious velvet and leather belt with signature D&G craftsmanship and Italian elegance.",
    details: ["Velvet and leather", "Metal buckle", "Made in Italy", "Adjustable"],
    sizes: ["85", "90", "95", "100", "105"],
  },
  {
    id: "cl6",
    title: "SANDRO • Cotton-Piqué Polo Shirt",
    img: "https://www.theoutnet.com/variants/images/1647597349494773/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597349494773/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$70",
    old: "$175",
    category: "Polo Shirts",
    brand: "SANDRO",
    description: "Classic cotton-piqué polo shirt with refined Sandro styling and comfortable fit.",
    details: ["100% Cotton Piqué", "Machine wash", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "cl7",
    title: "TOD'S • Suede Boots",
    img: "https://www.theoutnet.com/variants/images/1647597357378138/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597357378138/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$226",
    old: "$645",
    category: "Boots",
    brand: "TOD'S",
    description: "Premium suede boots with Italian craftsmanship and timeless Tod's elegance.",
    details: ["Premium suede", "Leather sole", "Made in Italy", "Classic fit"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "cl8",
    title: "TOD'S NO_CODE • Leather and Stretch-Knit Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597351192052/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597351192052/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$209",
    old: "$695",
    category: "Sneakers",
    brand: "TOD'S NO_CODE",
    description: "Contemporary leather and stretch-knit sneakers from Tod's innovative NO_CODE line.",
    details: ["Leather and stretch-knit", "Rubber sole", "Made in Italy", "Innovative design"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },

  // Accessories (a1-a20)
  {
    id: "a1",
    title: "MCQUEEN • Embroidered Cotton-Twill Baseball Cap",
    img: "https://www.theoutnet.com/variants/images/1647597358909780/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597358909780/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$185",
    old: "$410",
    category: "Hats",
    brand: "MCQUEEN",
    description: "Premium embroidered cotton-twill baseball cap with signature McQueen skull motif.",
    details: ["Cotton twill", "Embroidered details", "Made in Italy", "Adjustable"],
    sizes: ["One Size"],
  },
  {
    id: "a2",
    title: "DUNHILL • Logo-Print Textured Backpack",
    img: "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
      "https://www.theoutnet.com/variants/images/46376663162894600/E/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$559",
    old: "$1,595",
    category: "Bags",
    brand: "DUNHILL",
    description: "Sophisticated textured backpack with subtle logo print. Perfect for the modern professional who values both style and function.",
    details: ["Textured Leather", "Multiple compartments", "Made in Italy", "Laptop compatible", "Adjustable straps"],
    sizes: ["One Size"],
  },
  {
    id: "a3",
    title: "THOM BROWNE • Leather-Trimmed Canvas Backpack",
    img: "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$653",
    old: "$1,450",
    category: "Bags",
    brand: "THOM BROWNE",
    description: "Premium canvas backpack with leather trim featuring signature tricolor stripe.",
    details: ["Canvas with leather trim", "Multiple pockets", "Made in Italy", "Signature stripe"],
    sizes: ["One Size"],
  },
  {
    id: "a4",
    title: "BURBERRY • Gabardine Tote",
    img: "https://www.theoutnet.com/variants/images/46376663162903045/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162903045/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$753",
    old: "$2,150",
    category: "Bags",
    brand: "BURBERRY",
    description: "Classic gabardine tote with timeless Burberry craftsmanship and heritage check lining.",
    details: ["Gabardine fabric", "Check lining", "Made in England", "Spacious interior"],
    sizes: ["One Size"],
  },
  {
    id: "a5",
    title: "TOM FORD • Pebbled-Leather Wash Bag",
    img: "https://www.theoutnet.com/variants/images/46376663162870307/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162870307/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$945",
    old: "$1,890",
    category: "Bags",
    brand: "TOM FORD",
    description: "Luxurious pebbled-leather wash bag with impeccable craftsmanship and functional design.",
    details: ["Pebbled leather", "Multiple compartments", "Made in Italy", "Luxury finish"],
    sizes: ["One Size"],
  },
  {
    id: "a6",
    title: "STONE ISLAND • Compass Badge Beanie",
    img: "https://www.theoutnet.com/variants/images/1647597356141270/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597356141270/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$78",
    old: "$130",
    category: "Hats",
    brand: "STONE ISLAND",
    description: "Technical beanie featuring the iconic compass badge and premium wool construction.",
    details: ["Wool blend", "Compass badge", "Made in Italy", "One size fits most"],
    sizes: ["One Size"],
  },
  {
    id: "a7",
    title: "BOTTEGA VENETA • Intrecciato Leather Card Holder",
    img: "https://www.theoutnet.com/variants/images/1647597354756942/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597354756942/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$185",
    old: "$370",
    category: "Wallets",
    brand: "BOTTEGA VENETA",
    description: "Signature intrecciato leather card holder showcasing the house's iconic weaving technique.",
    details: ["Intrecciato leather", "Multiple card slots", "Made in Italy", "Compact design"],
    sizes: ["One Size"],
  },
  {
    id: "a8",
    title: "ACNE STUDIOS • Face Patch Wool Scarf",
    img: "https://www.theoutnet.com/variants/images/1647597353372614/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597353372614/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$115",
    old: "$230",
    category: "Scarves",
    brand: "ACNE STUDIOS",
    description: "Minimalist wool scarf featuring the signature Acne Studios face patch.",
    details: ["Wool blend", "Face patch", "Made in Italy", "Oversized"],
    sizes: ["One Size"],
  },
  {
    id: "a9",
    title: "PALM ANGELS • Bear Baseball Cap",
    img: "https://www.theoutnet.com/variants/images/1647597351988286/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597351988286/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$95",
    old: "$190",
    category: "Hats",
    brand: "PALM ANGELS",
    description: "Street-luxury baseball cap featuring iconic Palm Angels bear logo embroidery.",
    details: ["Cotton twill", "Embroidered logo", "Made in Italy", "Adjustable"],
    sizes: ["One Size"],
  },
  {
    id: "a10",
    title: "MAISON MARGIELA • Numbers Leather Wallet",
    img: "https://www.theoutnet.com/variants/images/1647597350603958/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597350603958/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$224",
    old: "$560",
    category: "Wallets",
    brand: "MAISON MARGIELA",
    description: "Minimalist leather wallet featuring the signature four-stitch detail and numbers print.",
    details: ["Premium leather", "Four-stitch detail", "Made in Italy", "Multiple compartments"],
    sizes: ["One Size"],
  },
  {
    id: "a11",
    title: "OFF-WHITE • Industrial Belt",
    img: "https://www.theoutnet.com/variants/images/1647597349219630/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597349219630/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$168",
    old: "$420",
    category: "Belts",
    brand: "OFF-WHITE",
    description: "Iconic industrial belt featuring signature yellow webbing and metal hardware.",
    details: ["Webbing construction", "Metal hardware", "Made in Italy", "Signature style"],
    sizes: ["85", "90", "95", "100"],
  },
  {
    id: "a12",
    title: "FEAR OF GOD ESSENTIALS • Knit Beanie",
    img: "https://www.theoutnet.com/variants/images/1647597347835302/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597347835302/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$39",
    old: "$65",
    category: "Hats",
    brand: "FEAR OF GOD",
    description: "Contemporary knit beanie with minimalist FOG Essentials branding.",
    details: ["Knit construction", "Logo patch", "Made in China", "One size fits most"],
    sizes: ["One Size"],
  },
  {
    id: "a13",
    title: "RICK OWENS • DRKSHDW Tote Bag",
    img: "https://www.theoutnet.com/variants/images/1647597346450974/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597346450974/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$264",
    old: "$660",
    category: "Bags",
    brand: "RICK OWENS",
    description: "Avant-garde tote bag from DRKSHDW line with minimalist aesthetic and functional design.",
    details: ["Cotton canvas", "DRKSHDW branding", "Made in Italy", "Spacious interior"],
    sizes: ["One Size"],
  },
  {
    id: "a14",
    title: "BALENCIAGA • Logo Leather Keychain",
    img: "https://www.theoutnet.com/variants/images/1647597345066646/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597345066646/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$95",
    old: "$190",
    category: "Accessories",
    brand: "BALENCIAGA",
    description: "Luxury leather keychain featuring embossed Balenciaga logo and premium construction.",
    details: ["Premium leather", "Embossed logo", "Made in Italy", "Metal keyring"],
    sizes: ["One Size"],
  },
  {
    id: "a15",
    title: "GIVENCHY • 4G Logo Leather Gloves",
    img: "https://www.theoutnet.com/variants/images/1647597343682318/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597343682318/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$224",
    old: "$560",
    category: "Gloves",
    brand: "GIVENCHY",
    description: "Luxury leather gloves featuring the signature 4G logo and superior craftsmanship.",
    details: ["Premium leather", "4G logo", "Made in Italy", "Lined interior"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "a16",
    title: "ALEXANDER MCQUEEN • Skull Print Silk Scarf",
    img: "https://www.theoutnet.com/variants/images/1647597342297990/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597342297990/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$168",
    old: "$420",
    category: "Scarves",
    brand: "ALEXANDER MCQUEEN",
    description: "Signature silk scarf featuring iconic skull print and luxurious finish.",
    details: ["100% Silk", "Skull print", "Made in Italy", "Large size"],
    sizes: ["One Size"],
  },
  {
    id: "a17",
    title: "VETEMENTS • Logo Snapback Cap",
    img: "https://www.theoutnet.com/variants/images/1647597340913662/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597340913662/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$115",
    old: "$230",
    category: "Hats",
    brand: "VETEMENTS",
    description: "Contemporary snapback cap with oversized Vetements logo and street-luxury aesthetic.",
    details: ["Cotton twill", "Embroidered logo", "Made in China", "Adjustable"],
    sizes: ["One Size"],
  },
  {
    id: "a18",
    title: "MONCLER • Ribbed Wool Scarf",
    img: "https://www.theoutnet.com/variants/images/1647597339529334/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597339529334/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$135",
    old: "$270",
    category: "Scarves",
    brand: "MONCLER",
    description: "Premium ribbed wool scarf with signature Moncler patch and superior warmth.",
    details: ["100% Wool", "Ribbed texture", "Made in Italy", "Logo patch"],
    sizes: ["One Size"],
  },
  {
    id: "a19",
    title: "LANVIN • Curb Chain Necklace",
    img: "https://www.theoutnet.com/variants/images/1647597338145006/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597338145006/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$264",
    old: "$530",
    category: "Jewelry",
    brand: "LANVIN",
    description: "Luxury curb chain necklace with sophisticated finish and premium construction.",
    details: ["Metal construction", "Curb chain design", "Made in France", "Signature style"],
    sizes: ["One Size"],
  },
  {
    id: "a20",
    title: "JACQUEMUS • Le Chiquito Micro Bag",
    img: "https://www.theoutnet.com/variants/images/1647597336760678/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597336760678/F/w340_q80.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800&auto=format&fit=crop"
    ],
    price: "$395",
    old: "$790",
    category: "Bags",
    brand: "JACQUEMUS",
    description: "Iconic micro bag that became a fashion phenomenon with its impossibly small size.",
    details: ["Premium leather", "Micro size", "Made in Italy", "Signature design"],
    sizes: ["One Size"],
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const addToBag = () => {
    console.log("addToBag called", { selectedSize, product: product?.title });
    
    if (!selectedSize || !product) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to bag",
        variant: "destructive",
      });
      return;
    }
    
    const itemToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
    };
    
    console.log("Adding item to cart:", itemToAdd);
    addItem(itemToAdd);
    
    toast({
      title: "Added to bag!",
      description: `${product.title} in size ${selectedSize} added to your bag`,
    });
  };

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const currentPrice = parseFloat(product.price.replace('$', '').replace(',', ''));
  const originalPrice = parseFloat(product.old.replace('$', '').replace(',', ''));
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  return (
    <>
      <Helmet>
        <title>{product.title} | THE OUTNET • MEN</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/clothing" className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span>{product.brand}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.brand}</Badge>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-xl line-through text-muted-foreground">{product.old}</span>
                <Badge variant="destructive">{discount}% OFF</Badge>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded flex items-center justify-center text-sm font-medium transition-colors ${
                      selectedSize === size 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <PaymentButton 
                amount={parseFloat(product.price.replace('$', '').replace(',', '')) * 100}
                productName={product.title}
                className="w-full"
              />
              <Button 
                size="lg" 
                variant="outline"
                className="w-full" 
                disabled={!selectedSize}
                onClick={addToBag}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Bag
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-4 h-4" />
                <span>Free shipping over $150</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="w-4 h-4" />
                <span>Free returns within 28 days</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4" />
                <span>Authenticity guaranteed</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold">Product Details</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {product.details.map((detail, index) => (
                  <li key={index}>• {detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProduct.img} 
                      alt={relatedProduct.title}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2">{relatedProduct.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold">{relatedProduct.price}</span>
                      <span className="text-sm line-through text-muted-foreground">{relatedProduct.old}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}