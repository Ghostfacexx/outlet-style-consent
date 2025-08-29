// THE OUTNET Product Data - 35% cheaper than original
// Scraped and mirrored from theoutnet.com

export interface Product {
  id: string;
  title: string;
  brand: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  image: string;
  imageHover?: string;
  category: string;
  subcategory: string;
  gender: 'women' | 'men';
  isJustIn?: boolean;
  url: string;
}

// Women's Products from THE OUTNET
export const womensProducts: Product[] = [
  {
    id: "vince-leather-jacket-46376663162898009",
    title: "Leather jacket",
    brand: "VINCE",
    originalPrice: "$698",
    discountedPrice: "$454", // 35% cheaper
    discount: "35%",
    image: "https://www.theoutnet.com/variants/images/46376663162898009/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162898009/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/vince/jackets/leather-jackets/leather-jacket/46376663162898009"
  },
  {
    id: "ulla-johnson-turtleneck-46376663162913312",
    title: "Liana chiffon-paneled wool and silk-blend turtleneck top",
    brand: "ULLA JOHNSON",
    originalPrice: "$490",
    discountedPrice: "$144", // 35% of $221
    discount: "70%",
    image: "https://www.theoutnet.com/variants/images/46376663162913312/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162913312/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "tops",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/ulla-johnson/tops/long-sleeved-tops/liana-chiffon-paneled-wool-and-silk-blend-turtleneck-top/46376663162913312"
  },
  {
    id: "farm-rio-mini-dress-46376663162990562",
    title: "Printed satin mini dress",
    brand: "FARM RIO",
    originalPrice: "$248",
    discountedPrice: "$65", // 35% of $100
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162990562/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162990562/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/mini-dresses/printed-satin-mini-dress/46376663162990562"
  },
  {
    id: "farm-rio-embellished-dress-46376663162990693",
    title: "Bead-embellished printed cotton-poplin mini dress",
    brand: "FARM RIO",
    originalPrice: "$298",
    discountedPrice: "$88", // 35% of $135
    discount: "70%",
    image: "https://www.theoutnet.com/variants/images/46376663162990693/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162990693/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/mini-dresses/bead-embellished-printed-cotton-poplin-mini-dress/46376663162990693"
  },
  {
    id: "max-mara-blazer-46376663162984819",
    title: "Suez wool-blend blazer",
    brand: "MAX MARA",
    originalPrice: "$1,990",
    discountedPrice: "$582", // 35% of $896
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162984819/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162984819/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/max-mara/jackets/blazers/suez-wool-blend-blazer/46376663162984819"
  },
  {
    id: "farm-rio-maxi-dress-46376663162991646",
    title: "Printed crepe de chine maxi dress",
    brand: "FARM RIO",
    originalPrice: "$340",
    discountedPrice: "$99", // 35% of $153
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162991646/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991646/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/maxi-dresses/printed-crepe-de-chine-maxi-dress/46376663162991646"
  },
  {
    id: "farm-rio-midi-tulle-46376663162990655",
    title: "Ruched printed stretch-tulle midi dress",
    brand: "FARM RIO",
    originalPrice: "$210",
    discountedPrice: "$55", // 35% of $84
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162990655/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162990655/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/midi-dresses/ruched-printed-stretch-tulle-midi-dress/46376663162990655"
  },
  {
    id: "farm-rio-denim-skirt-46376663162990470",
    title: "Denim midi skirt",
    brand: "FARM RIO",
    originalPrice: "$230",
    discountedPrice: "$60", // 35% of $92
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162990470/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162990470/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "skirts",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/skirts/midi-skirts/denim-midi-skirt/46376663162990470"
  },
  {
    id: "max-mara-shearling-vest-46376663162904709",
    title: "Effige reversible shearling vest",
    brand: "MAX MARA",
    originalPrice: "$6,090",
    discountedPrice: "$1,583", // 35% of $2,436
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162904709/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162904709/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/max-mara/jackets/vests-and-gilets/effige-reversible-shearling-vest/46376663162904709"
  }
];

// Men's Products from THE OUTNET  
export const mensProducts: Product[] = [
  // Men's products will be added after scraping men's section
];

export const allProducts = [...womensProducts, ...mensProducts];

// Category mappings to match THE OUTNET structure
export const categories = {
  women: {
    'just-in': 'Just In',
    'bestsellers': 'Bestsellers', 
    'designers': 'Designers',
    'clothing': 'Clothing',
    'shoes': 'Shoes',
    'bags': 'Bags',
    'accessories': 'Accessories'
  },
  men: {
    'just-in': 'Just In',
    'bestsellers': 'Bestsellers',
    'designers': 'Designers', 
    'clothing': 'Clothing',
    'shoes': 'Shoes',
    'bags': 'Bags',
    'accessories': 'Accessories'
  }
};

// Subcategories
export const subcategories = {
  clothing: {
    women: ['dresses', 'tops', 'jackets', 'skirts', 'pants', 'knitwear'],
    men: ['shirts', 'jackets', 'pants', 'knitwear', 'suits', 'polo-shirts']
  },
  shoes: {
    women: ['heels', 'flats', 'boots', 'sneakers', 'sandals'],
    men: ['dress-shoes', 'sneakers', 'boots', 'loafers', 'sandals']
  },
  accessories: {
    women: ['jewelry', 'scarves', 'sunglasses', 'watches', 'belts'],
    men: ['watches', 'belts', 'ties', 'sunglasses', 'wallets']
  }
};