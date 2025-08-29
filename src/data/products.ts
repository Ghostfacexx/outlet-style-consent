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

// NET-A-PORTER MIRROR - Complete authentic product catalog
export const allProducts: Product[] = [
  // CLOTHING - Men's Designer Fashion
  {
    id: "saint-laurent-leather-jacket-mens",
    title: "SAINT LAURENT • Men's Leather Biker Jacket",
    img: "https://www.net-a-porter.com/variants/images/46376663162927943/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162927943/in/w358_q60.jpg"],
    ...calculateOutletPrice(5230),
    category: "Clothing",
    brand: "SAINT LAURENT",
    description: "Classic Saint Laurent men's leather biker jacket with signature styling.",
    details: ["Leather", "Zip closure", "Slim fit", "Made in Italy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tom-ford-leather-jacket-mens",
    title: "TOM FORD • Men's Leather Biker Jacket",
    img: "https://www.net-a-porter.com/variants/images/46376663162927943/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162927943/in/w358_q60.jpg"],
    ...calculateOutletPrice(4200),
    category: "Clothing",
    brand: "TOM FORD",
    description: "Tom Ford men's leather biker jacket with premium construction.",
    details: ["Premium leather", "Silver hardware", "Regular fit", "Made in Italy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "the-row-ness-jacket-mens",
    title: "THE ROW • Men's Cotton-Corduroy Jacket",
    img: "https://www.net-a-porter.com/variants/images/1647597357671050/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/1647597357671050/in/w358_q60.jpg"],
    ...calculateOutletPrice(1340),
    category: "Clothing",
    brand: "THE ROW",
    description: "The Row men's cotton-corduroy jacket with minimalist design.",
    details: ["Cotton corduroy", "Button closure", "Regular fit", "Made in Italy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "brunello-cucinelli-blazer-mens",
    title: "BRUNELLO CUCINELLI • Men's Wool Blazer",
    img: "https://www.net-a-porter.com/variants/images/46376663162898500/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162898500/in/w358_q60.jpg"],
    ...calculateOutletPrice(3850),
    category: "Clothing",
    brand: "BRUNELLO CUCINELLI",
    description: "Brunello Cucinelli men's wool blazer with Italian craftsmanship.",
    details: ["Wool", "Two-button closure", "Tailored fit", "Made in Italy"],
    sizes: ["46", "48", "50", "52", "54"],
  },
  {
    id: "stone-island-sweatshirt-mens",
    title: "STONE ISLAND • Men's Cotton Sweatshirt",
    img: "https://www.net-a-porter.com/variants/images/46376663162888939/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162888939/in/w358_q60.jpg"],
    ...calculateOutletPrice(285),
    category: "Clothing",
    brand: "STONE ISLAND",
    description: "Stone Island men's cotton sweatshirt with iconic badge.",
    details: ["Cotton", "Crew neck", "Relaxed fit", "Made in Italy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "ami-paris-shirt-mens",
    title: "AMI PARIS • Men's Cotton Shirt",
    img: "https://www.net-a-porter.com/variants/images/46376663162915126/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162915126/in/w358_q60.jpg"],
    ...calculateOutletPrice(295),
    category: "Clothing",
    brand: "AMI PARIS",
    description: "AMI Paris men's cotton shirt with modern cut.",
    details: ["Cotton", "Button-down collar", "Regular fit", "Made in France"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "kenzo-jeans-mens",
    title: "KENZO • Men's Straight Leg Jeans",
    img: "https://www.net-a-porter.com/variants/images/46376663162899322/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162899322/in/w358_q60.jpg"],
    ...calculateOutletPrice(320),
    category: "Clothing",
    brand: "KENZO",
    description: "Kenzo men's straight leg jeans with contemporary styling.",
    details: ["Denim", "Straight leg", "Mid-rise", "Made in Italy"],
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: "acne-studios-sweater-mens",
    title: "ACNE STUDIOS • Men's Wool Sweater",
    img: "https://www.net-a-porter.com/variants/images/46376663162859239/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162859239/in/w358_q60.jpg"],
    ...calculateOutletPrice(450),
    category: "Clothing",
    brand: "ACNE STUDIOS",
    description: "Acne Studios men's wool sweater with Scandinavian minimalism.",
    details: ["Wool", "Crew neck", "Regular fit", "Made in Romania"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },

  // SHOES - Direct from Net-A-Porter
  {
    id: "le-monde-beryl-flats",
    title: "LE MONDE BERYL • Claudia suede Mary-Jane ballet flats",
    img: "https://www.net-a-porter.com/variants/images/46376663162892455/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162892455/in/w358_q60.jpg"],
    ...calculateOutletPrice(445),
    category: "Shoes",
    brand: "LE MONDE BERYL",
    description: "Claudia suede Mary-Jane ballet flats with feminine charm.",
    details: ["Suede upper", "Mary-Jane strap", "Leather sole", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "manolo-blahnik-maysale",
    title: "MANOLO BLAHNIK • Maysale buckled suede point-toe flats",
    img: "https://www.net-a-porter.com/variants/images/1647597314751435/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/1647597314751435/in/w358_q60.jpg"],
    ...calculateOutletPrice(695),
    category: "Shoes",
    brand: "MANOLO BLAHNIK",
    description: "Maysale buckled suede point-toe flats with signature style.",
    details: ["Suede upper", "Buckle detail", "Pointed toe", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "bally-pathy-shoes",
    title: "BALLY • Pathy leather boat shoes",
    img: "https://www.net-a-porter.com/variants/images/1647597337063765/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/1647597337063765/in/w358_q60.jpg"],
    ...calculateOutletPrice(795),
    category: "Shoes",
    brand: "BALLY",
    description: "Pathy leather boat shoes with classic nautical style.",
    details: ["Leather upper", "Lace-up", "Rubber sole", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "loeffler-randall-franco",
    title: "LOEFFLER RANDALL • Franco leather boat shoes",
    img: "https://www.net-a-porter.com/variants/images/46376663162925963/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162925963/in/w358_q60.jpg"],
    ...calculateOutletPrice(280),
    category: "Shoes",
    brand: "LOEFFLER RANDALL",
    description: "Franco leather boat shoes with contemporary edge.",
    details: ["Leather upper", "Boat shoe style", "Rubber sole", "Made in Brazil"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    id: "gucci-sylke-boots",
    title: "GUCCI • Sylke horsebit-detailed suede ankle boots",
    img: "https://www.net-a-porter.com/variants/images/46376663162894297/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162894297/in/w358_q60.jpg"],
    ...calculateOutletPrice(875),
    category: "Shoes",
    brand: "GUCCI",
    description: "Sylke horsebit-detailed suede ankle boots with iconic hardware.",
    details: ["Suede upper", "Horsebit detail", "Ankle height", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "tods-gomma-loafers",
    title: "TOD'S • Gomma leather loafers",
    img: "https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg"],
    ...calculateOutletPrice(550),
    category: "Shoes",
    brand: "TOD'S",
    description: "Gomma leather loafers with signature pebble sole.",
    details: ["Leather upper", "Pebble sole", "Slip-on style", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "chloe-buckled-boots",
    title: "CHLOÉ • Buckled textured-leather ankle boots",
    img: "https://www.net-a-porter.com/variants/images/46376663162838649/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162838649/in/w358_q60.jpg"],
    ...calculateOutletPrice(1050),
    category: "Shoes",
    brand: "CHLOÉ",
    description: "Buckled textured-leather ankle boots with bohemian flair.",
    details: ["Textured leather", "Buckle details", "Ankle height", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "khaite-clive-boots",
    title: "KHAITE • Clive leather boots",
    img: "https://www.net-a-porter.com/variants/images/46376663162859084/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162859084/in/w358_q60.jpg"],
    ...calculateOutletPrice(1450),
    category: "Shoes",
    brand: "KHAITE",
    description: "Clive leather boots with sophisticated styling.",
    details: ["Leather upper", "Block heel", "Ankle height", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "nike-total-90-sneakers",
    title: "NIKE • Total 90 SE embroidered snake-effect leather sneakers",
    img: "https://www.net-a-porter.com/variants/images/46376663162863073/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162863073/in/w358_q60.jpg"],
    ...calculateOutletPrice(100),
    category: "Shoes",
    brand: "NIKE",
    description: "Total 90 SE embroidered snake-effect leather sneakers.",
    details: ["Snake-effect leather", "Embroidered details", "Rubber sole", "Made in Vietnam"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
  },
  {
    id: "dries-van-noten-sneakers",
    title: "DRIES VAN NOTEN • Leather-trimmed suede sneakers",
    img: "https://www.net-a-porter.com/variants/images/46376663162872446/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162872446/in/w358_q60.jpg"],
    ...calculateOutletPrice(395),
    category: "Shoes",
    brand: "DRIES VAN NOTEN",
    description: "Leather-trimmed suede sneakers with artistic design.",
    details: ["Suede and leather", "Lace-up", "Rubber sole", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "loewe-ballet-runner",
    title: "LOEWE • Ballet Runner 2.0 logo-appliquéd shell, suede and leather sneakers",
    img: "https://www.net-a-porter.com/variants/images/46376663162858891/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162858891/in/w358_q60.jpg"],
    ...calculateOutletPrice(650),
    category: "Shoes",
    brand: "LOEWE",
    description: "Ballet Runner 2.0 logo-appliquéd shell, suede and leather sneakers.",
    details: ["Mixed materials", "Logo appliqué", "Sporty sole", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },
  {
    id: "adidas-sl-72-sneakers",
    title: "ADIDAS ORIGINALS • SL 72 OG suede and leather-trimmed mesh sneakers",
    img: "https://www.net-a-porter.com/variants/images/46376663162926243/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162926243/in/w358_q60.jpg"],
    ...calculateOutletPrice(90),
    category: "Shoes",
    brand: "ADIDAS ORIGINALS",
    description: "SL 72 OG suede and leather-trimmed mesh sneakers.",
    details: ["Mesh and suede", "Retro style", "Rubber sole", "Made in Vietnam"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
  },
  {
    id: "the-row-stella-flats",
    title: "THE ROW • Stella leather ballet flats",
    img: "https://www.net-a-porter.com/variants/images/1647597359099118/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/1647597359099118/in/w358_q60.jpg"],
    ...calculateOutletPrice(890),
    category: "Shoes",
    brand: "THE ROW",
    description: "Stella leather ballet flats with minimalist design.",
    details: ["Leather upper", "Ballet flat style", "Leather sole", "Made in Italy"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
  },

  // MEN'S ACCESSORIES - Watches, Belts, Wallets, etc.
  {
    id: "rolex-submariner-mens",
    title: "ROLEX • Men's Submariner Watch",
    img: "https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg"],
    ...calculateOutletPrice(8500),
    category: "Accessories",
    brand: "ROLEX",
    description: "Classic Rolex Submariner men's watch with steel bracelet.",
    details: ["Stainless steel", "Automatic movement", "Water resistant", "Made in Switzerland"],
    sizes: ["One Size"],
  },
  {
    id: "cartier-tank-mens",
    title: "CARTIER • Men's Tank Watch",
    img: "https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg"],
    ...calculateOutletPrice(3200),
    category: "Accessories",
    brand: "CARTIER",
    description: "Iconic Cartier Tank men's watch with leather strap.",
    details: ["Steel and leather", "Quartz movement", "Water resistant", "Made in Switzerland"],
    sizes: ["One Size"],
  },
  {
    id: "hermes-belt-mens",
    title: "HERMÈS • Men's Reversible H Belt",
    img: "https://www.net-a-porter.com/variants/images/46376663162858891/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162858891/in/w358_q60.jpg"],
    ...calculateOutletPrice(720),
    category: "Accessories",
    brand: "HERMÈS",
    description: "Hermès men's reversible H belt in black and brown leather.",
    details: ["Calfskin leather", "H buckle", "Reversible", "Made in France"],
    sizes: ["75", "80", "85", "90", "95", "100"],
  },
  {
    id: "gucci-belt-mens",
    title: "GUCCI • Men's GG Leather Belt",
    img: "https://www.net-a-porter.com/variants/images/46376663162858891/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162858891/in/w358_q60.jpg"],
    ...calculateOutletPrice(450),
    category: "Accessories",
    brand: "GUCCI",
    description: "Gucci men's leather belt with iconic GG buckle.",
    details: ["Leather", "GG buckle", "Adjustable", "Made in Italy"],
    sizes: ["75", "80", "85", "90", "95", "100"],
  },
  {
    id: "bottega-veneta-wallet-mens",
    title: "BOTTEGA VENETA • Men's Intrecciato Wallet",
    img: "https://www.net-a-porter.com/variants/images/46376663162966813/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162966813/in/w358_q60.jpg"],
    ...calculateOutletPrice(650),
    category: "Accessories",
    brand: "BOTTEGA VENETA",
    description: "Bottega Veneta men's intrecciato leather wallet.",
    details: ["Intrecciato leather", "Card slots", "Bi-fold", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "tom-ford-sunglasses-mens",
    title: "TOM FORD • Men's Aviator Sunglasses",
    img: "https://www.net-a-porter.com/variants/images/46376663162838649/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162838649/in/w358_q60.jpg"],
    ...calculateOutletPrice(525),
    category: "Accessories",
    brand: "TOM FORD",
    description: "Tom Ford men's aviator sunglasses with gold-tone frames.",
    details: ["Metal frames", "UV protection", "Aviator style", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "rayban-wayfarers-mens",
    title: "RAY-BAN • Men's Wayfarer Sunglasses",
    img: "https://www.net-a-porter.com/variants/images/46376663162838649/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162838649/in/w358_q60.jpg"],
    ...calculateOutletPrice(165),
    category: "Accessories",
    brand: "RAY-BAN",
    description: "Classic Ray-Ban Wayfarer sunglasses for men.",
    details: ["Acetate frames", "UV protection", "Classic style", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "stone-island-cap-mens",
    title: "STONE ISLAND • Men's Baseball Cap",
    img: "https://www.net-a-porter.com/variants/images/46376663162888939/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162888939/in/w358_q60.jpg"],
    ...calculateOutletPrice(85),
    category: "Accessories",
    brand: "STONE ISLAND",
    description: "Stone Island men's baseball cap with compass logo.",
    details: ["Cotton", "Adjustable strap", "Curved visor", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "canada-goose-beanie-mens",
    title: "CANADA GOOSE • Men's Wool Beanie",
    img: "https://www.net-a-porter.com/variants/images/46376663162888939/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162888939/in/w358_q60.jpg"],
    ...calculateOutletPrice(75),
    category: "Accessories",
    brand: "CANADA GOOSE",
    description: "Canada Goose men's wool beanie with logo patch.",
    details: ["Wool blend", "Logo patch", "Ribbed knit", "Made in Canada"],
    sizes: ["One Size"],
  },
  {
    id: "polo-ralph-lauren-scarf-mens",
    title: "POLO RALPH LAUREN • Men's Wool Scarf",
    img: "https://www.net-a-porter.com/variants/images/46376663162915126/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162915126/in/w358_q60.jpg"],
    ...calculateOutletPrice(125),
    category: "Accessories",
    brand: "POLO RALPH LAUREN",
    description: "Polo Ralph Lauren men's wool scarf in classic navy.",
    details: ["Wool", "Fringed ends", "Classic design", "Made in Scotland"],
    sizes: ["One Size"],
  },
  {
    id: "montblanc-cufflinks-mens",
    title: "MONTBLANC • Men's Steel Cufflinks",
    img: "https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162854950/in/w358_q60.jpg"],
    ...calculateOutletPrice(350),
    category: "Accessories",
    brand: "MONTBLANC",
    description: "Montblanc men's stainless steel cufflinks with logo.",
    details: ["Stainless steel", "Logo engraving", "Gift box included", "Made in Germany"],
    sizes: ["One Size"],
  },
  {
    id: "louis-vuitton-messenger-mens",
    title: "LOUIS VUITTON • Men's Messenger Bag",
    img: "https://www.net-a-porter.com/variants/images/46376663162966813/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/46376663162966813/in/w358_q60.jpg"],
    ...calculateOutletPrice(2200),
    category: "Accessories",
    brand: "LOUIS VUITTON",
    description: "Louis Vuitton men's messenger bag in Damier canvas.",
    details: ["Damier canvas", "Leather trim", "Adjustable strap", "Made in France"],
    sizes: ["One Size"],
  },
  {
    id: "burberry-gloves-mens",
    title: "BURBERRY • Men's Leather Gloves",
    img: "https://www.net-a-porter.com/variants/images/1647597357671050/in/w358_q60.jpg",
    images: ["https://www.net-a-porter.com/variants/images/1647597357671050/in/w358_q60.jpg"],
    ...calculateOutletPrice(245),
    category: "Accessories",
    brand: "BURBERRY",
    description: "Burberry men's leather gloves with cashmere lining.",
    details: ["Leather", "Cashmere lining", "Classic design", "Made in Italy"],
    sizes: ["S", "M", "L", "XL"],
  },
];

// Filter products by category
export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

// Get featured/new products
export const getFeaturedProducts = () => {
  return allProducts.slice(0, 8);
};

// Get single product by ID
export const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id);
};

export default allProducts;