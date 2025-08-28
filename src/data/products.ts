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

// All products with fixed pricing and clean image arrays
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

  // Clothing products
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

  // Accessories
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

  // Shoes
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