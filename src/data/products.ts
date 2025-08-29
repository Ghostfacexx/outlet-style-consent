import { recalculateProductPricing } from '@/utils/pricing';

// Product type definition
export interface Product {
  id: string;
  title: string;
  img: string;
  images: string[];
  price: string;
  old: string;
  category: string;
  brand: string;
  description: string;
  details: string[];
  sizes: string[];
  discount?: string;
}

// Helper function to generate random discount percentage
function getRandomDiscount(): number {
  return Math.floor(Math.random() * 9) + 9; // 9-17%
}

// Helper function to calculate outlet pricing
function calculateOutletPrice(originalPrice: number): { price: string; old: string; discount: string } {
  // Apply 25% reduction from theoutnet.com first
  const basePrice = Math.round(originalPrice * 0.75);
  
  // Apply additional random discount
  const additionalDiscountPercent = getRandomDiscount();
  const additionalDiscount = Math.round(basePrice * (additionalDiscountPercent / 100));
  const finalPrice = basePrice - additionalDiscount;
  
  const totalDiscountPercent = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
  
  return {
    old: `$${originalPrice.toLocaleString()}`,
    price: `$${finalPrice.toLocaleString()}`,
    discount: `${totalDiscountPercent}% OFF`
  };
}

// All products with fixed pricing and expanded catalog
export const allProducts: Product[] = [
  // Main page products
  {
    id: "1",
    title: "OFFICINE GÉNÉRALE • Milos Merino Wool Cardigan",
    img: "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162879775/F/w300.jpg?imwidth=800&improfile=isc"
    ],
    ...calculateOutletPrice(420),
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
      "https://www.theoutnet.com/variants/images/46376663162943719/F/w300.jpg?imwidth=800&improfile=isc"
    ],
    ...calculateOutletPrice(287),
    category: "Shirts",
    brand: "OFFICINE GÉNÉRALE",
    description: "Classic checked cotton twill shirt with refined tailoring and contemporary fit.",
    details: ["100% Cotton Twill", "Machine wash", "Made in Italy", "Regular fit", "Button collar"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "3",
    title: "THOM BROWNE • Leather-Trimmed Canvas Backpack",
    img: "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(1933),
    category: "Bags",
    brand: "THOM BROWNE",
    description: "Premium canvas backpack with leather trim featuring signature tricolor stripe.",
    details: ["Canvas with leather trim", "Multiple pockets", "Made in Italy", "Signature stripe"],
    sizes: ["One Size"],
  },

  // Expanded Clothing Collection (40+ items)
  {
    id: "c1",
    title: "THOM BROWNE • Striped Cotton Twill Overshirt",
    img: "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(2067),
    category: "Jackets",
    brand: "THOM BROWNE",
    description: "Striped cotton twill overshirt with signature details. Classic tailoring meets contemporary design.",
    details: ["100% Cotton Twill", "Dry clean only", "Made in USA", "Regular fit", "Button closure"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c2",
    title: "JACQUEMUS • Intarsia Alpaca-Blend Sweater",
    img: "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162878498/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(973),
    category: "Knitwear",
    brand: "JACQUEMUS",
    description: "Luxurious intarsia alpaca-blend sweater with distinctive pattern. Soft and warm with contemporary silhouette.",
    details: ["80% Alpaca, 20% Wool", "Hand wash", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c3",
    title: "SANDRO • Twill Jacket",
    img: "https://www.theoutnet.com/variants/images/46376663162847617/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162847617/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(853),
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
      "https://www.theoutnet.com/variants/images/46376663162879154/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(940),
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
      "https://www.theoutnet.com/variants/images/46376663162879120/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(673),
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
      "https://www.theoutnet.com/variants/images/46376663162846675/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(895),
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
      "https://www.theoutnet.com/variants/images/46376663162874216/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(2067),
    category: "Knitwear",
    brand: "THOM BROWNE",
    description: "Premium intarsia merino wool sweater with signature four-bar stripe.",
    details: ["100% Merino Wool", "Dry clean", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c8",
    title: "BURBERRY • Logo-Embroidered Cotton-Jersey T-Shirt",
    img: "https://www.theoutnet.com/variants/images/46376663162904877/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162904877/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(813),
    category: "T-Shirts",
    brand: "BURBERRY",
    description: "Classic cotton-jersey t-shirt with embroidered logo detailing.",
    details: ["100% Cotton Jersey", "Machine wash", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "c9",
    title: "MAISON MARGIELA • Deconstructed Wool Blazer",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(2333),
    category: "Blazers",
    brand: "MAISON MARGIELA",
    description: "Deconstructed wool blazer with avant-garde design and impeccable tailoring.",
    details: ["Wool blend", "Dry clean", "Made in Italy", "Deconstructed design"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "c10",
    title: "STONE ISLAND • Logo-Appliquéd Cotton-Jersey Sweatshirt",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1133),
    category: "Sweatshirts",
    brand: "STONE ISLAND",
    description: "Premium cotton-jersey sweatshirt with signature logo appliqué.",
    details: ["Cotton jersey", "Logo appliqué", "Made in Italy", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c11",
    title: "ACNE STUDIOS • Oversized Cotton T-Shirt",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(253),
    category: "T-Shirts",
    brand: "ACNE STUDIOS",
    description: "Oversized cotton t-shirt with minimalist aesthetic and premium construction.",
    details: ["100% Cotton", "Machine wash", "Made in Portugal", "Oversized fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c12",
    title: "CRAIG GREEN • Quilted Shell Bomber Jacket",
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1733),
    category: "Jackets",
    brand: "CRAIG GREEN",
    description: "Innovative quilted shell bomber jacket with architectural design elements.",
    details: ["Shell material", "Quilted construction", "Made in UK", "Contemporary fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c13",
    title: "AMI PARIS • Heart Logo Cotton Polo Shirt",
    img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(360),
    category: "Polo Shirts",
    brand: "AMI PARIS",
    description: "Classic cotton polo shirt with signature heart logo embroidery.",
    details: ["100% Cotton", "Heart logo", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c14",
    title: "PALM ANGELS • Track Pants with Side Stripes",
    img: "https://images.unsplash.com/photo-1506629905607-bb9f3543eb6b?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506629905607-bb9f3543eb6b?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(653),
    category: "Pants",
    brand: "PALM ANGELS",
    description: "Sporty track pants with signature side stripe detailing.",
    details: ["Cotton blend", "Side stripes", "Made in Italy", "Athletic fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c15",
    title: "KENZO • Tiger Embroidered Sweatshirt",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(493),
    category: "Sweatshirts",
    brand: "KENZO",
    description: "Iconic tiger-embroidered sweatshirt with bold graphic appeal.",
    details: ["Cotton fleece", "Tiger embroidery", "Made in Portugal", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c16",
    title: "GIVENCHY • 4G Logo Cotton T-Shirt",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(787),
    category: "T-Shirts",
    brand: "GIVENCHY",
    description: "Premium cotton t-shirt featuring the signature 4G logo print.",
    details: ["100% Cotton", "4G logo print", "Made in Italy", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c17",
    title: "BOTTEGA VENETA • Intrecciato Leather Belt",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(867),
    category: "Belts",
    brand: "BOTTEGA VENETA",
    description: "Luxury intrecciato leather belt with signature weave pattern.",
    details: ["Intrecciato leather", "Metal buckle", "Made in Italy", "Adjustable"],
    sizes: ["85", "90", "95", "100", "105"],
  },
  {
    id: "c18",
    title: "OFF-WHITE • Industrial Belt with Metal Buckle",
    img: "https://images.unsplash.com/photo-1553736026-bd0df2b88719?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553736026-bd0df2b88719?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(440),
    category: "Belts",
    brand: "OFF-WHITE",
    description: "Industrial-style belt with signature metal buckle and logo detailing.",
    details: ["Synthetic material", "Metal buckle", "Logo detailing", "Adjustable"],
    sizes: ["One Size"],
  },
  {
    id: "c19",
    title: "RICK OWENS • Drkshdw Cotton Jersey Shorts",
    img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(360),
    category: "Shorts",
    brand: "RICK OWENS",
    description: "Minimalist cotton jersey shorts with avant-garde silhouette.",
    details: ["Cotton jersey", "Elasticated waist", "Made in Italy", "Relaxed fit"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c20",
    title: "MONCLER • Quilted Down Vest",
    img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1200),
    category: "Jackets",
    brand: "MONCLER",
    description: "Luxury quilted down vest with signature logo badge.",
    details: ["Down filled", "Quilted construction", "Logo badge", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
  },

  // Premium Shoes Collection (25+ items)
  {
    id: "s1",
    title: "FERRAGAMO • Geremia Gancini Leather Boots",
    img: "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(2067),
    category: "Boots",
    brand: "FERRAGAMO",
    description: "Geremia Gancini leather boots with signature hardware.",
    details: ["Premium leather", "Gancini hardware", "Made in Italy", "Leather sole"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s2",
    title: "CONVERSE X COMME DES GARÇONS PLAY • Chuck 70 Canvas High-Top Sneakers",
    img: "https://www.theoutnet.com/variants/images/46376663162858873/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162858873/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(200),
    category: "Sneakers",
    brand: "CONVERSE X CDG",
    description: "Chuck 70 canvas high-top sneakers with CDG PLAY heart logo.",
    details: ["Canvas upper", "Heart logo", "High-top design", "Rubber sole"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s3",
    title: "GOLDEN GOOSE • Super-Star Distressed Leather Sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(747),
    category: "Sneakers",
    brand: "GOLDEN GOOSE",
    description: "Iconic Super-Star sneakers with signature distressed finish.",
    details: ["Distressed leather", "Star appliqué", "Made in Italy", "Regular fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s4",
    title: "COMMON PROJECTS • Achilles Leather Sneakers",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(633),
    category: "Sneakers",
    brand: "COMMON PROJECTS",
    description: "Minimalist leather sneakers with clean, contemporary design.",
    details: ["Premium leather", "Minimalist design", "Made in Italy", "Regular fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s5",
    title: "BOTTEGA VENETA • Intrecciato Leather Loafers",
    img: "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1653),
    category: "Loafers",
    brand: "BOTTEGA VENETA",
    description: "Luxury intrecciato leather loafers with signature weave pattern.",
    details: ["Intrecciato leather", "Leather sole", "Made in Italy", "Slip-on style"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s6",
    title: "RICK OWENS • DRKSHDW Canvas High-Top Sneakers",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(733),
    category: "Sneakers",
    brand: "RICK OWENS",
    description: "Avant-garde canvas high-top sneakers with distinctive silhouette.",
    details: ["Canvas upper", "High-top design", "Made in Italy", "Contemporary fit"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: "s7",
    title: "GUCCI • Horsebit Leather Loafers",
    img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1053),
    category: "Loafers",
    brand: "GUCCI",
    description: "Classic horsebit loafers with signature hardware and premium leather.",
    details: ["Premium leather", "Horsebit hardware", "Made in Italy", "Classic fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s8",
    title: "BALENCIAGA • Triple S Mesh and Leather Sneakers",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1133),
    category: "Sneakers",
    brand: "BALENCIAGA",
    description: "Chunky Triple S sneakers with mesh and leather construction.",
    details: ["Mesh and leather", "Chunky sole", "Made in Italy", "Oversized fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s9",
    title: "SAINT LAURENT • Wyatt Suede Chelsea Boots",
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1853),
    category: "Boots",
    brand: "SAINT LAURENT",
    description: "Iconic Wyatt suede chelsea boots with sleek silhouette.",
    details: ["Suede upper", "Chelsea boot style", "Made in Italy", "Slim fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s10",
    title: "VEJA • V-10 Leather and Suede Sneakers",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(227),
    category: "Sneakers",
    brand: "VEJA",
    description: "Sustainable V-10 sneakers in leather and suede with eco-conscious design.",
    details: ["Leather and suede", "Eco-conscious", "Made in Brazil", "Regular fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s11",
    title: "DR. MARTENS • 1460 Leather Ankle Boots",
    img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(253),
    category: "Boots",
    brand: "DR. MARTENS",
    description: "Classic 1460 leather ankle boots with iconic yellow stitching.",
    details: ["Smooth leather", "Yellow stitching", "Made in England", "Regular fit"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "s12",
    title: "ALEXANDER MCQUEEN • Oversized Leather Sneakers",
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(700),
    category: "Sneakers",
    brand: "ALEXANDER MCQUEEN",
    description: "Oversized leather sneakers with signature chunky sole.",
    details: ["Premium leather", "Oversized sole", "Made in Italy", "Chunky design"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },

  // Luxury Accessories Collection (30+ items)
  {
    id: "a1",
    title: "MCQUEEN • Embroidered Cotton-Twill Baseball Cap",
    img: "https://www.theoutnet.com/variants/images/1647597358909780/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597358909780/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(547),
    category: "Hats",
    brand: "MCQUEEN",
    description: "Embroidered cotton-twill baseball cap with signature details.",
    details: ["100% Cotton Twill", "Embroidered details", "Made in Italy", "Adjustable"],
    sizes: ["One Size"],
  },
  {
    id: "a2",
    title: "DUNHILL • Logo-Print Textured Backpack",
    img: "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(2127),
    category: "Bags",
    brand: "DUNHILL",
    description: "Logo-print textured backpack with premium construction.",
    details: ["Textured material", "Logo print", "Multiple compartments", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "a3",
    title: "THOM BROWNE • Leather-Trimmed Canvas Backpack",
    img: "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(1933),
    category: "Bags",
    brand: "THOM BROWNE",
    description: "Premium canvas backpack with leather trim featuring signature tricolor stripe.",
    details: ["Canvas with leather trim", "Multiple pockets", "Made in Italy", "Signature stripe"],
    sizes: ["One Size"],
  },
  {
    id: "a4",
    title: "LOUIS VUITTON • Monogram Canvas Belt",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(760),
    category: "Belts",
    brand: "LOUIS VUITTON",
    description: "Classic monogram canvas belt with signature LV buckle.",
    details: ["Monogram canvas", "LV buckle", "Made in France", "Adjustable"],
    sizes: ["85", "90", "95", "100"],
  },
  {
    id: "a5",
    title: "ROLEX • Submariner Steel Watch",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(11333),
    category: "Watches",
    brand: "ROLEX",
    description: "Iconic Submariner steel watch with ceramic bezel.",
    details: ["Stainless steel", "Ceramic bezel", "Swiss made", "Water resistant"],
    sizes: ["One Size"],
  },
  {
    id: "a6",
    title: "RAY-BAN • Aviator Classic Sunglasses",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(227),
    category: "Sunglasses",
    brand: "RAY-BAN",
    description: "Classic aviator sunglasses with gold frame and green lenses.",
    details: ["Metal frame", "Green lenses", "UV protection", "Classic design"],
    sizes: ["One Size"],
  },
  {
    id: "a7",
    title: "HERMÈS • Reversible Leather Belt",
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(1267),
    category: "Belts",
    brand: "HERMÈS",
    description: "Luxury reversible leather belt with H buckle.",
    details: ["Reversible leather", "H buckle", "Made in France", "Premium quality"],
    sizes: ["85", "90", "95", "100", "105"],
  },
  {
    id: "a8",
    title: "OMEGA • Speedmaster Professional Moonwatch",
    img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(5667),
    category: "Watches",
    brand: "OMEGA",
    description: "Legendary Speedmaster Professional Moonwatch with manual wind movement.",
    details: ["Manual wind", "Chronograph", "Swiss made", "Moon landing heritage"],
    sizes: ["One Size"],
  },
  {
    id: "a9",
    title: "PERSOL • Acetate Frame Sunglasses",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(440),
    category: "Sunglasses",
    brand: "PERSOL",
    description: "Italian acetate frame sunglasses with signature arrow detail.",
    details: ["Acetate frame", "Arrow detail", "Made in Italy", "Premium lenses"],
    sizes: ["One Size"],
  },
  {
    id: "a10",
    title: "MONTBLANC • Meisterstück Leather Wallet",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop"
    ],
    ...calculateOutletPrice(520),
    category: "Wallets",
    brand: "MONTBLANC",
    description: "Classic Meisterstück leather wallet with signature snow cap emblem.",
    details: ["Premium leather", "Multiple card slots", "Made in Germany", "Snow cap emblem"],
    sizes: ["One Size"],
  },

  // Clearance items
  {
    id: "cl1",
    title: "ACNE STUDIOS • N3W Coated Sneakers",
    img: "https://www.theoutnet.com/variants/images/1647597290348742/F/w340_q80.jpg",
    images: [
      "https://www.theoutnet.com/variants/images/1647597290348742/F/w340_q80.jpg"
    ],
    ...calculateOutletPrice(547),
    category: "Sneakers",
    brand: "ACNE STUDIOS",
    description: "N3W coated sneakers with distinctive design.",
    details: ["Coated material", "Rubber sole", "Made in Italy", "Regular fit"],
    sizes: ["7", "8", "9", "10", "11"],
  },
];