import bottegaIntrecciato from "@/assets/products/bottega-intrecciato-bag.jpg";
import gucciMarmont from "@/assets/products/gucci-marmont-bag.jpg";
import pradaReEdition from "@/assets/products/prada-re-edition-bag.jpg";
import saintLaurentLou from "@/assets/products/saint-laurent-lou-bag.jpg";
import balenciagaHourglass from "@/assets/products/balenciaga-hourglass-bag.jpg";
import celineTriomphe from "@/assets/products/celine-triomphe-tote.jpg";
import chanelClassic from "@/assets/products/chanel-classic-flap.jpg";
import diorLady from "@/assets/products/dior-lady-dior.jpg";
import luxurySilkBlouse from "@/assets/products/luxury-silk-blouse.jpg";
import blackWoolBlazer from "@/assets/products/black-wool-blazer.jpg";
import cashmereSweater from "@/assets/products/cashmere-sweater.jpg";
import leatherKneeBoots from "@/assets/products/leather-knee-boots.jpg";
import nudePointedPumps from "@/assets/products/nude-pointed-pumps.jpg";
import whiteLeatherSneakers from "@/assets/products/white-leather-sneakers.jpg";
import goldChainNecklace from "@/assets/products/gold-chain-necklace.jpg";
import tortoiseshellSunglasses from "@/assets/products/tortoiseshell-sunglasses.jpg";
import silkFloralScarf from "@/assets/products/silk-floral-scarf.jpg";
import blackLeatherBelt from "@/assets/products/black-leather-belt.jpg";
import silverLuxuryWatch from "@/assets/products/silver-luxury-watch.jpg";
import navyMidiDress from "@/assets/products/navy-midi-dress.jpg";
import versaceMedusaNecklace from "@/assets/products/versace-medusa-necklace.jpg";
import tomFordLeatherJacket from "@/assets/products/tom-ford-leather-jacket.jpg";
import loewePuzzleBag from "@/assets/products/loewe-puzzle-bag.jpg";
import mcqueenSkullScarf from "@/assets/products/mcqueen-skull-scarf.jpg";
import burberryTrenchCoat from "@/assets/products/burberry-trench-coat.jpg";
import isabelMarantWedgeSneakers from "@/assets/products/isabel-marant-wedge-sneakers.jpg";
import hermesBirkinBag from "@/assets/products/hermes-birkin-bag.jpg";
import givenchyAntigonaBag from "@/assets/products/givenchy-antigona-bag.jpg";
import monclerPufferJacket from "@/assets/products/moncler-puffer-jacket.jpg";
import zimmermannFloralDress from "@/assets/products/zimmermann-floral-dress.jpg";
import ganniLeopardBlouse from "@/assets/products/ganni-leopard-blouse.jpg";
import wideLegTrousers from "@/assets/products/wide-leg-trousers.jpg";
import platformWhiteSneakers from "@/assets/products/platform-white-sneakers.jpg";
import brownSuedeAnkleBoots from "@/assets/products/brown-suede-ankle-boots.jpg";
import creamOversizedBlazer from "@/assets/products/cream-oversized-blazer.jpg";
import burgundyCrossbodyBag from "@/assets/products/burgundy-crossbody-bag.jpg";
import blackCatEyeSunglasses from "@/assets/products/black-cat-eye-sunglasses.jpg";
import pearlGoldEarrings from "@/assets/products/pearl-gold-earrings.jpg";
import emeraldSilkSkirt from "@/assets/products/emerald-silk-skirt.jpg";
import blackDesignerCap from "@/assets/products/black-designer-cap.jpg";

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

// NET-A-PORTER MIRROR - Comprehensive luxury catalog with unique product images
export const allProducts: Product[] = [
  // BOTTEGA VENETA Collection
  {
    id: "bv-1",
    title: "BOTTEGA VENETA • Intrecciato leather jacket",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(4200),
    category: "Clothing",
    brand: "BOTTEGA VENETA",
    description: "Luxurious intrecciato leather jacket with signature weave pattern. Premium Italian craftsmanship.",
    details: ["Intrecciato leather", "Made in Italy", "Zip closure", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "bv-2",
    title: "BOTTEGA VENETA • Parachute intrecciato leather shoulder bag",
    img: bottegaIntrecciato,
    images: [bottegaIntrecciato],
    ...calculateOutletPrice(3200),
    category: "Bags",
    brand: "BOTTEGA VENETA",
    description: "Iconic parachute shoulder bag in signature intrecciato leather.",
    details: ["Intrecciato leather", "Magnetic closure", "Made in Italy", "Adjustable strap"],
    sizes: ["One Size"],
  },
  {
    id: "bv-3",
    title: "BOTTEGA VENETA • Cotton-blend poplin tunic",
    img: "https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1290),
    category: "Clothing",
    brand: "BOTTEGA VENETA",
    description: "Elegant cotton-blend poplin tunic with contemporary silhouette.",
    details: ["Cotton-blend poplin", "Button front", "Made in Italy", "Relaxed fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },

  // GUCCI Collection
  {
    id: "gc-1",
    title: "GUCCI • Floral-print silk-crepe dress",
    img: "https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(3100),
    category: "Clothing",
    brand: "GUCCI",
    description: "Stunning floral-print silk-crepe dress with Italian glamour.",
    details: ["Silk-crepe", "Floral print", "Made in Italy", "Midi length"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "gc-2",
    title: "GUCCI • GG Marmont matelassé leather shoulder bag",
    img: gucciMarmont,
    images: [gucciMarmont],
    ...calculateOutletPrice(2890),
    category: "Bags",
    brand: "GUCCI",
    description: "Iconic GG Marmont shoulder bag in matelassé leather.",
    details: ["Matelassé leather", "GG hardware", "Made in Italy", "Chain strap"],
    sizes: ["One Size"],
  },
  {
    id: "gc-3",
    title: "GUCCI • Ace leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(690),
    category: "Shoes",
    brand: "GUCCI",
    description: "Classic Ace leather sneakers with signature stripe detail.",
    details: ["Leather upper", "Rubber sole", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // PRADA Collection
  {
    id: "pr-1",
    title: "PRADA • Double-breasted cashmere coat",
    img: "https://images.unsplash.com/photo-1544966503-7cc36a8b602c?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1544966503-7cc36a8b602c?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(5800),
    category: "Clothing",
    brand: "PRADA",
    description: "Luxurious double-breasted cashmere coat with timeless elegance.",
    details: ["100% Cashmere", "Double-breasted", "Made in Italy", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "pr-2",
    title: "PRADA • Re-Edition 2005 nylon shoulder bag",
    img: pradaReEdition,
    images: [pradaReEdition],
    ...calculateOutletPrice(1890),
    category: "Bags",
    brand: "PRADA",
    description: "Iconic Re-Edition 2005 nylon shoulder bag with signature triangle logo.",
    details: ["Nylon", "Triangle logo", "Made in Italy", "Zip closure"],
    sizes: ["One Size"],
  },
  {
    id: "pr-3",
    title: "PRADA • America's Cup leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(790),
    category: "Shoes",
    brand: "PRADA",
    description: "Classic America's Cup leather sneakers with technical sole.",
    details: ["Leather and mesh", "Rubber sole", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // SAINT LAURENT Collection
  {
    id: "sl-1",
    title: "SAINT LAURENT • Grain de poudre wool blazer",
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(2690),
    category: "Clothing",
    brand: "SAINT LAURENT",
    description: "Sophisticated grain de poudre wool blazer with sharp tailoring.",
    details: ["Grain de poudre wool", "Peak lapels", "Made in Italy", "Slim fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "sl-2",
    title: "SAINT LAURENT • Lou leather camera bag",
    img: saintLaurentLou,
    images: [saintLaurentLou],
    ...calculateOutletPrice(1790),
    category: "Bags",
    brand: "SAINT LAURENT",
    description: "Chic Lou leather camera bag with quilted design.",
    details: ["Quilted leather", "Zip closure", "Made in Italy", "Adjustable strap"],
    sizes: ["One Size"],
  },
  {
    id: "sl-3",
    title: "SAINT LAURENT • Court Classic leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(595),
    category: "Shoes",
    brand: "SAINT LAURENT",
    description: "Minimalist Court Classic leather sneakers with signature star.",
    details: ["Leather upper", "Star motif", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // BALENCIAGA Collection
  {
    id: "ba-1",
    title: "BALENCIAGA • Oversized cotton-jersey hoodie",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(950),
    category: "Clothing",
    brand: "BALENCIAGA",
    description: "Oversized cotton-jersey hoodie with signature logo.",
    details: ["Cotton jersey", "Logo print", "Made in Portugal", "Oversized fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ba-2",
    title: "BALENCIAGA • Hourglass small leather handbag",
    img: balenciagaHourglass,
    images: [balenciagaHourglass],
    ...calculateOutletPrice(2150),
    category: "Bags",
    brand: "BALENCIAGA",
    description: "Hourglass small leather handbag with curved silhouette and structured design.",
    details: ["Leather", "Curved design", "Made in Italy", "Top handles"],
    sizes: ["One Size"],
  },
  {
    id: "ba-3",
    title: "BALENCIAGA • Triple S leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1050),
    category: "Shoes",
    brand: "BALENCIAGA",
    description: "Iconic Triple S leather sneakers with chunky sole.",
    details: ["Leather and mesh", "Triple sole", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // CELINE Collection
  {
    id: "ce-1",
    title: "CELINE • Wide-leg wool-blend trousers",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1200),
    category: "Clothing",
    brand: "CELINE",
    description: "Elegant wide-leg wool-blend trousers with refined tailoring.",
    details: ["Wool blend", "Wide leg", "Made in Italy", "Mid-rise"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ce-2",
    title: "CELINE • Triomphe canvas and leather shoulder bag",
    img: celineTriomphe,
    images: [celineTriomphe],
    ...calculateOutletPrice(2400),
    category: "Bags",
    brand: "CELINE",
    description: "Triomphe canvas and leather shoulder bag with signature hardware.",
    details: ["Canvas and leather", "Triomphe clasp", "Made in Italy", "Adjustable strap"],
    sizes: ["One Size"],
  },
  {
    id: "ce-3",
    title: "CELINE • CT-02 leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(790),
    category: "Shoes",
    brand: "CELINE",
    description: "Contemporary CT-02 leather sneakers with minimalist design.",
    details: ["Leather upper", "Rubber sole", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // CHANEL Collection
  {
    id: "ch-1",
    title: "CHANEL • Boucle tweed jacket",
    img: "https://images.unsplash.com/photo-1544966502-7ad535bb8a3d?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1544966502-7ad535bb8a3d?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(7200),
    category: "Clothing",
    brand: "CHANEL",
    description: "Iconic boucle tweed jacket with signature Chanel styling.",
    details: ["Boucle tweed", "Chain trim", "Made in France", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ch-2",
    title: "CHANEL • Classic Flap quilted leather handbag",
    img: chanelClassic,
    images: [chanelClassic],
    ...calculateOutletPrice(8900),
    category: "Bags",
    brand: "CHANEL",
    description: "Timeless Classic Flap quilted leather handbag with chain strap.",
    details: ["Quilted leather", "Chain strap", "Made in France", "Turn-lock closure"],
    sizes: ["One Size"],
  },
  {
    id: "ch-3",
    title: "CHANEL • CC logo leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1290),
    category: "Shoes",
    brand: "CHANEL",
    description: "Luxurious CC logo leather sneakers with signature quilting.",
    details: ["Quilted leather", "CC logo", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },

  // DIOR Collection
  {
    id: "di-1",
    title: "DIOR • Pleated silk-chiffon midi skirt",
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d74?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1583496661160-fb5886a13d74?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(2200),
    category: "Clothing",
    brand: "DIOR",
    description: "Elegant pleated silk-chiffon midi skirt with feminine silhouette.",
    details: ["Silk-chiffon", "Pleated design", "Made in Italy", "Midi length"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "di-2",
    title: "DIOR • Lady Dior cannage leather handbag",
    img: diorLady,
    images: [diorLady],
    ...calculateOutletPrice(6200),
    category: "Bags",
    brand: "DIOR",
    description: "Iconic Lady Dior cannage leather handbag with signature charms.",
    details: ["Cannage leather", "Dior charms", "Made in Italy", "Top handles"],
    sizes: ["One Size"],
  },
  {
    id: "di-3",
    title: "DIOR • B23 canvas and leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1190),
    category: "Shoes",
    brand: "DIOR",
    description: "Modern B23 canvas and leather sneakers with Dior Oblique pattern.",
    details: ["Canvas and leather", "Oblique pattern", "Made in Italy", "High-top"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // VERSACE Collection
  {
    id: "ve-1",
    title: "VERSACE • Printed stretch-jersey dress",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1575),
    category: "Clothing",
    brand: "VERSACE",
    description: "Bold printed stretch-jersey dress with signature Versace glamour.",
    details: ["Stretch jersey", "Baroque print", "Made in Italy", "Bodycon fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ve-2",
    title: "VERSACE • Medusa leather shoulder bag",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(2890),
    category: "Bags",
    brand: "VERSACE",
    description: "Iconic Medusa leather shoulder bag with baroque detailing.",
    details: ["Leather", "Medusa hardware", "Made in Italy", "Chain strap"],
    sizes: ["One Size"],
  },
  {
    id: "ve-3",
    title: "VERSACE • Chain Reaction sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(995),
    category: "Shoes",
    brand: "VERSACE",
    description: "Futuristic Chain Reaction sneakers with distinctive sole design.",
    details: ["Mixed materials", "Chain sole", "Made in Italy", "Slip-on"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // TOM FORD Collection
  {
    id: "tf-1",
    title: "TOM FORD • Single-breasted wool-blend suit",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(3980),
    category: "Clothing",
    brand: "TOM FORD",
    description: "Impeccably tailored single-breasted wool-blend suit.",
    details: ["Wool blend", "Peak lapels", "Made in Italy", "Slim fit"],
    sizes: ["46", "48", "50", "52", "54"],
  },
  {
    id: "tf-2",
    title: "TOM FORD • Whitney leather handbag",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(4200),
    category: "Bags",
    brand: "TOM FORD",
    description: "Sophisticated Whitney leather handbag with T-clasp closure.",
    details: ["Leather", "T-clasp", "Made in Italy", "Top handles"],
    sizes: ["One Size"],
  },
  {
    id: "tf-3",
    title: "TOM FORD • Warwick leather dress shoes",
    img: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1690),
    category: "Shoes",
    brand: "TOM FORD",
    description: "Classic Warwick leather dress shoes with Italian craftsmanship.",
    details: ["Leather upper", "Leather sole", "Made in Italy", "Lace-up"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },

  // LOEWE Collection
  {
    id: "lo-1",
    title: "LOEWE • Embroidered wool sweater",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(890),
    category: "Clothing",
    brand: "LOEWE",
    description: "Artistic embroidered wool sweater with signature Loewe craftsmanship.",
    details: ["Wool", "Hand embroidery", "Made in Italy", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "lo-2",
    title: "LOEWE • Puzzle leather shoulder bag",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(3190),
    category: "Bags",
    brand: "LOEWE",
    description: "Iconic Puzzle leather shoulder bag with geometric design.",
    details: ["Calfskin leather", "Geometric design", "Made in Spain", "Multiple straps"],
    sizes: ["One Size"],
  },
  {
    id: "lo-3",
    title: "LOEWE • Flow leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(650),
    category: "Shoes",
    brand: "LOEWE",
    description: "Contemporary Flow leather sneakers with flowing lines.",
    details: ["Leather upper", "Rubber sole", "Made in Spain", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // ALEXANDER MCQUEEN Collection
  {
    id: "am-1",
    title: "ALEXANDER MCQUEEN • Corset-style midi dress",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(2890),
    category: "Clothing",
    brand: "ALEXANDER MCQUEEN",
    description: "Dramatic corset-style midi dress with sculptural silhouette.",
    details: ["Mixed fabrics", "Corset bodice", "Made in Italy", "Fitted"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "am-2",
    title: "ALEXANDER MCQUEEN • Skull leather clutch",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1890),
    category: "Bags",
    brand: "ALEXANDER MCQUEEN",
    description: "Iconic skull leather clutch with signature hardware.",
    details: ["Leather", "Skull clasp", "Made in Italy", "Chain strap"],
    sizes: ["One Size"],
  },
  {
    id: "am-3",
    title: "ALEXANDER MCQUEEN • Oversized leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(590),
    category: "Shoes",
    brand: "ALEXANDER MCQUEEN",
    description: "Signature oversized leather sneakers with contrasting heel tab.",
    details: ["Leather upper", "Oversized sole", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // BURBERRY Collection
  {
    id: "bu-1",
    title: "BURBERRY • Heritage Kensington trench coat",
    img: "https://images.unsplash.com/photo-1544966503-7cc36a8b602c?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1544966503-7cc36a8b602c?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1890),
    category: "Clothing",
    brand: "BURBERRY",
    description: "Classic Heritage Kensington trench coat with signature check lining.",
    details: ["Cotton gabardine", "Check lining", "Made in England", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "bu-2",
    title: "BURBERRY • Title leather shoulder bag",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(2690),
    category: "Bags",
    brand: "BURBERRY",
    description: "Sophisticated Title leather shoulder bag with iconic TB monogram.",
    details: ["Leather", "TB monogram", "Made in Italy", "Adjustable strap"],
    sizes: ["One Size"],
  },
  {
    id: "bu-3",
    title: "BURBERRY • Check-pattern leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(690),
    category: "Shoes",
    brand: "BURBERRY",
    description: "Contemporary check-pattern leather sneakers with signature detailing.",
    details: ["Leather and canvas", "Check pattern", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // ISABEL MARANT Collection
  {
    id: "im-1",
    title: "ISABEL MARANT • Crisi suede ankle boots",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(650),
    category: "Shoes",
    brand: "ISABEL MARANT",
    description: "Bohemian Crisi suede ankle boots with Western-inspired design.",
    details: ["Suede", "Block heel", "Made in Spain", "Ankle height"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    id: "im-2",
    title: "ISABEL MARANT • Étoile printed dress",
    img: "https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(395),
    category: "Clothing",
    brand: "ISABEL MARANT",
    description: "Effortless Étoile printed dress with bohemian charm.",
    details: ["Cotton voile", "Floral print", "Made in India", "Relaxed fit"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "im-3",
    title: "ISABEL MARANT • Kaliko leather crossbody bag",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(590),
    category: "Bags",
    brand: "ISABEL MARANT",
    description: "Chic Kaliko leather crossbody bag with boho-luxe appeal.",
    details: ["Leather", "Adjustable strap", "Made in Italy", "Zip closure"],
    sizes: ["One Size"],
  },

  // HERMÈS Collection
  {
    id: "he-1",
    title: "HERMÈS • Printed silk-twill scarf",
    img: "https://images.unsplash.com/photo-1601924638867-985141c40019?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1601924638867-985141c40019?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(395),
    category: "Accessories",
    brand: "HERMÈS",
    description: "Luxurious printed silk-twill scarf with iconic Hermès design.",
    details: ["Silk-twill", "Hand-rolled edges", "Made in France", "90cm square"],
    sizes: ["One Size"],
  },
  {
    id: "he-2",
    title: "HERMÈS • Birkin leather handbag",
    img: hermesBirkinBag,
    images: [hermesBirkinBag],
    ...calculateOutletPrice(25000),
    category: "Bags",
    brand: "HERMÈS",
    description: "Legendary Birkin leather handbag with impeccable craftsmanship.",
    details: ["Togo leather", "Palladium hardware", "Made in France", "Top handles"],
    sizes: ["35cm"],
  },
  {
    id: "he-3",
    title: "HERMÈS • H leather sandals",
    img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(760),
    category: "Shoes",
    brand: "HERMÈS",
    description: "Iconic H leather sandals with signature cut-out design.",
    details: ["Leather", "H cut-out", "Made in Italy", "Flat sole"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },

  // GIVENCHY Collection
  {
    id: "gi-1",
    title: "GIVENCHY • 4G logo cotton t-shirt",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(450),
    category: "Clothing",
    brand: "GIVENCHY",
    description: "Contemporary 4G logo cotton t-shirt with bold branding.",
    details: ["Cotton jersey", "4G logo", "Made in Portugal", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "gi-2",
    title: "GIVENCHY • Antigona leather handbag",
    img: givenchyAntigonaBag,
    images: [givenchyAntigonaBag],
    ...calculateOutletPrice(2790),
    category: "Bags",
    brand: "GIVENCHY",
    description: "Iconic Antigona leather handbag with geometric design.",
    details: ["Goatskin leather", "Top handles", "Made in Italy", "Zip closure"],
    sizes: ["Medium"],
  },
  {
    id: "gi-3",
    title: "GIVENCHY • Urban Street leather sneakers",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(695),
    category: "Shoes",
    brand: "GIVENCHY",
    description: "Modern Urban Street leather sneakers with logo detailing.",
    details: ["Leather and mesh", "Logo print", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // MONCLER Collection
  {
    id: "mo-1",
    title: "MONCLER • Genius collection down jacket",
    img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1890),
    category: "Clothing",
    brand: "MONCLER",
    description: "Innovative Genius collection down jacket with technical excellence.",
    details: ["Down filled", "Water resistant", "Made in Romania", "Regular fit"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "mo-2",
    title: "MONCLER • Kilia quilted backpack",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(995),
    category: "Bags",
    brand: "MONCLER",
    description: "Sporty Kilia quilted backpack with logo detailing.",
    details: ["Nylon", "Quilted design", "Logo patch", "Adjustable straps"],
    sizes: ["One Size"],
  },
  {
    id: "mo-3",
    title: "MONCLER • Peak leather boots",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(1290),
    category: "Shoes",
    brand: "MONCLER",
    description: "Technical Peak leather boots with alpine-inspired design.",
    details: ["Leather and nylon", "Vibram sole", "Made in Italy", "Lace-up"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },

  // ZIMMERMANN Collection
  {
    id: "zi-1",
    title: "ZIMMERMANN • Floral-print silk dress",
    img: "https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(895),
    category: "Clothing",
    brand: "ZIMMERMANN",
    description: "Romantic floral-print silk dress with bohemian elegance.",
    details: ["Silk", "Floral print", "Made in China", "Midi length"],
    sizes: ["0", "1", "2", "3", "4"],
  },
  {
    id: "zi-2",
    title: "ZIMMERMANN • Woven straw hat",
    img: "https://images.unsplash.com/photo-1506629905607-bb9f3543eb6b?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1506629905607-bb9f3543eb6b?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(225),
    category: "Accessories",
    brand: "ZIMMERMANN",
    description: "Elegant woven straw hat with grosgrain ribbon trim.",
    details: ["Straw", "Grosgrain ribbon", "Wide brim", "UV protection"],
    sizes: ["One Size"],
  },
  {
    id: "zi-3",
    title: "ZIMMERMANN • Strappy leather sandals",
    img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(525),
    category: "Shoes",
    brand: "ZIMMERMANN",
    description: "Feminine strappy leather sandals with block heel.",
    details: ["Leather", "Block heel", "Made in Brazil", "Ankle strap"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },

  // GANNI Collection
  {
    id: "ga-1",
    title: "GANNI • Leopard-print recycled georgette dress",
    img: "https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1566479179817-c7c59ab91e35?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(395),
    category: "Clothing",
    brand: "GANNI",
    description: "Playful leopard-print recycled georgette dress with Copenhagen cool.",
    details: ["Recycled georgette", "Leopard print", "Made in China", "Mini length"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ga-2",
    title: "GANNI • Leather cowboy boots",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop"],
    ...calculateOutletPrice(695),
    category: "Shoes",
    brand: "GANNI",
    description: "Statement leather cowboy boots with Western flair.",
    details: ["Leather", "Western style", "Made in Portugal", "Mid-calf height"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  }
];

// Legacy exports for backwards compatibility
export const products = allProducts.slice(0, 20); // Featured products

// Category filters
export const getProductsByCategory = (category: string) => 
  allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());

export const getProductsByBrand = (brand: string) => 
  allProducts.filter(product => product.brand.toLowerCase() === brand.toLowerCase());

export const getProductById = (id: string) => 
  allProducts.find(product => product.id === id);

export const getFeaturedProducts = () => products;

export const getAllProducts = () => allProducts;