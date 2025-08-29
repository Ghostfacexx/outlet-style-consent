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
  // Women's Clothing (25+ products)
  {
    id: "vince-leather-jacket-46376663162898009",
    title: "Leather jacket",
    brand: "VINCE",
    originalPrice: "$1,395",
    discountedPrice: "$454", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162898009/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162898009/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/vince/jackets/leather-jackets/leather-jacket/46376663162898009"
  },
  {
    id: "max-mara-edro-blazer-46376663162905800",
    title: "Edro double-breasted silk-blend lamé blazer",
    brand: "MAX MARA",
    originalPrice: "$2,090",
    discountedPrice: "$544", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162905800/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162905800/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/max-mara/jackets/evening-jackets/edro-double-breasted-silk-blend-lame-blazer/46376663162905800"
  },
  {
    id: "max-mara-gastone-jacket-46376663162905802",
    title: "Gastone cotton-blend jacquard jacket",
    brand: "MAX MARA",
    originalPrice: "$1,095",
    discountedPrice: "$356", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162905802/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162905802/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/max-mara/jackets/casual-jackets/gastone-cotton-blend-jacquard-jacket/46376663162905802"
  },
  {
    id: "diane-von-furstenberg-astrid-dress-1647597342030828",
    title: "Astrid wool and cashmere-blend midi wrap dress",
    brand: "DIANE VON FURSTENBERG",
    originalPrice: "$560",
    discountedPrice: "$182", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597342030828/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597342030828/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/diane-von-furstenberg/dresses/midi-dresses/astrid-wool-and-cashmere-blend-midi-wrap-dress/1647597342030828"
  },
  {
    id: "farm-rio-printed-maxi-dress-46376663162994435",
    title: "Printed crepe de chine maxi dress",
    brand: "FARM RIO",
    originalPrice: "$230",
    discountedPrice: "$60", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162994435/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162994435/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/maxi-dresses/printed-crepe-de-chine-maxi-dress/46376663162994435"
  },
  {
    id: "farm-rio-floral-slip-dress-46376663162990534",
    title: "Floral-print satin midi slip dress",
    brand: "FARM RIO",
    originalPrice: "$198",
    discountedPrice: "$52", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162990534/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162990534/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/midi-dresses/floral-print-satin-midi-slip-dress/46376663162990534"
  },
  {
    id: "ulla-johnson-liana-top-46376663162913312",
    title: "Liana chiffon-paneled wool and silk-blend turtleneck top",
    brand: "ULLA JOHNSON",
    originalPrice: "$490",
    discountedPrice: "$144", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162913312/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162913312/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "tops",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/ulla-johnson/tops/long-sleeved-tops/liana-chiffon-paneled-wool-and-silk-blend-turtleneck-top/46376663162913312"
  },
  {
    id: "max-mara-suez-blazer-46376663162984819",
    title: "Suez wool-blend blazer",
    brand: "MAX MARA",
    originalPrice: "$1,990",
    discountedPrice: "$582", // 35% cheaper
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
    id: "farm-rio-printed-mini-dress-46376663162990562",
    title: "Printed satin mini dress",
    brand: "FARM RIO",
    originalPrice: "$248",
    discountedPrice: "$65", // 35% cheaper
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
    discountedPrice: "$88", // 35% cheaper
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
    id: "farm-rio-maxi-dress-46376663162991646",
    title: "Printed crepe de chine maxi dress",
    brand: "FARM RIO",
    originalPrice: "$340",
    discountedPrice: "$99", // 35% cheaper
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
    discountedPrice: "$55", // 35% cheaper
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
    discountedPrice: "$60", // 35% cheaper
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
    discountedPrice: "$1,583", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162904709/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162904709/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/max-mara/jackets/vests-and-gilets/effige-reversible-shearling-vest/46376663162904709"
  },
  {
    id: "mikael-aghal-maxi-dress-46376663162993282",
    title: "Ruffled floral-print chiffon maxi dress",
    brand: "MIKAEL AGHAL",
    originalPrice: "$990",
    discountedPrice: "$257", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162993282/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162993282/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    url: "/shop/product/mikael-aghal/dresses/maxi-dresses/ruffled-floral-print-chiffon-maxi-dress/46376663162993282"
  },
  {
    id: "theory-wool-coat-46376663162993296",
    title: "Belted wool and cashmere-blend felt coat",
    brand: "THEORY",
    originalPrice: "$895",
    discountedPrice: "$292", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162993296/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162993296/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "women",
    url: "/shop/product/theory/jackets/coats/belted-wool-and-cashmere-blend-felt-coat/46376663162993296"
  },
  {
    id: "brunello-cucinelli-sweater-46376663162955550",
    title: "Sequin-embellished open-knit sweater",
    brand: "BRUNELLO CUCINELLI",
    originalPrice: "$1,895",
    discountedPrice: "$554", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162955550/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162955550/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/brunello-cucinelli/knitwear/crew-neck-sweaters/sequin-embellished-open-knit-sweater/46376663162955550"
  },
  {
    id: "max-mara-jumpsuit-46376663162983188",
    title: "Ragusa wool-twill jumpsuit",
    brand: "MAX MARA",
    originalPrice: "$1,590",
    discountedPrice: "$414", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162983188/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162983188/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jumpsuits",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/max-mara/jumpsuits/jumpsuits/ragusa-wool-twill-jumpsuit/46376663162983188"
  },
  {
    id: "ulla-johnson-asha-top-46376663162912601",
    title: "Asha ruffled wool top",
    brand: "ULLA JOHNSON",
    originalPrice: "$350",
    discountedPrice: "$91", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162912601/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162912601/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "tops",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/ulla-johnson/tops/long-sleeved-tops/asha-ruffled-wool-top/46376663162912601"
  },
  {
    id: "farm-rio-embroidered-top-46376663162993583",
    title: "Embroidered cotton-voile top",
    brand: "FARM RIO",
    originalPrice: "$298",
    discountedPrice: "$88", // 35% cheaper
    discount: "70%",
    image: "https://www.theoutnet.com/variants/images/46376663162993583/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162993583/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "tops",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/tops/long-sleeved-tops/embroidered-cotton-voile-top/46376663162993583"
  },
  {
    id: "farm-rio-leopard-dress-46376663162993600",
    title: "Ruched leopard-print satin midi dress",
    brand: "FARM RIO",
    originalPrice: "$230",
    discountedPrice: "$60", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162993600/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162993600/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/midi-dresses/ruched-leopard-print-satin-midi-dress/46376663162993600"
  },
  {
    id: "farm-rio-wrap-dress-46376663162990657",
    title: "Floral-print crepe midi wrap dress",
    brand: "FARM RIO",
    originalPrice: "$260",
    discountedPrice: "$76", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162990657/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162990657/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "dresses",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/dresses/midi-dresses/floral-print-crepe-midi-wrap-dress/46376663162990657"
  },
  {
    id: "farm-rio-shorts-46376663162994466",
    title: "Cotton-corduroy shorts",
    brand: "FARM RIO",
    originalPrice: "$180",
    discountedPrice: "$53", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162994466/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162994466/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "shorts",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/shorts/shorts/cotton-corduroy-shorts/46376663162994466"
  },
  {
    id: "farm-rio-jumpsuit-46376663162991648",
    title: "Printed cotton-blend poplin jumpsuit",
    brand: "FARM RIO",
    originalPrice: "$298",
    discountedPrice: "$88", // 35% cheaper
    discount: "70%",
    image: "https://www.theoutnet.com/variants/images/46376663162991648/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991648/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jumpsuits",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/farm-rio/jumpsuits/jumpsuits/printed-cotton-blend-poplin-jumpsuit/46376663162991648"
  },

  // Women's Shoes (25+ products)
  {
    id: "stuart-weitzman-sondra-boots-46376663162929079",
    title: "Sondra leather combat boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$650",
    discountedPrice: "$233", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/46376663162929079/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162929079/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/sondra-leather-combat-boots/46376663162929079"
  },
  {
    id: "stuart-weitzman-chelsea-boots-46376663162929095",
    title: "Sondra leather Chelsea boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$595",
    discountedPrice: "$194", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162929095/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162929095/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/sondra-leather-chelsea-boots/46376663162929095"
  },
  {
    id: "stuart-weitzman-yuliana-boots-46376663162960702",
    title: "Yuliana 60 leather Chelsea boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$595",
    discountedPrice: "$194", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162960702/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162960702/Q/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/blockheel/yuliana-60-leather-chelsea-boots/46376663162960702"
  },
  {
    id: "stuart-weitzman-mara-boots-46376663162991475",
    title: "Mara 50 suede ankle boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$635",
    discountedPrice: "$207", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162991475/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991475/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/mara-50-suede-ankle-boots/46376663162991475"
  },
  {
    id: "stuart-weitzman-lenora-boots-46376663162991463",
    title: "Lenora suede Chelsea boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$587",
    discountedPrice: "$210", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/46376663162991463/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991463/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/lenora-suede-chelsea-boots/46376663162991463"
  },
  {
    id: "stuart-weitzman-celina-boots-46376663162991477",
    title: "Celina leather knee boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$849",
    discountedPrice: "$276", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162991477/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991477/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/tall-boots/celina-leather-knee-boots/46376663162991477"
  },
  {
    id: "stuart-weitzman-lenora-knee-boots-46376663162960758",
    title: "Lenora leather knee boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$795",
    discountedPrice: "$233", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162960758/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162960758/Q/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/tall-boots/lenora-leather-knee-boots/46376663162960758"
  },
  {
    id: "stuart-weitzman-naomi-boots-46376663162960764",
    title: "Naomi 50 suede ankle boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$650",
    discountedPrice: "$211", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162960764/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162960764/Q/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/naomi-50-suede-ankle-boots/46376663162960764"
  },
  {
    id: "stuart-weitzman-celina-suede-boots-46376663162991490",
    title: "Celina suede knee boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$850",
    discountedPrice: "$276", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162991490/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991490/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/tall-boots/celina-suede-knee-boots/46376663162991490"
  },
  {
    id: "stuart-weitzman-naomi-leather-boots-46376663162960609",
    title: "Naomi 50 leather ankle boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$650",
    discountedPrice: "$211", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162960609/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162960609/Q/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/naomi-50-leather-ankle-boots/46376663162960609"
  },
  {
    id: "stuart-weitzman-izzie-boots-46376663162961861",
    title: "Izzie suede Chelsea boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$550",
    discountedPrice: "$179", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162961861/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162961861/Q/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/izzie-suede-chelsea-boots/46376663162961861"
  },
  {
    id: "stuart-weitzman-sofia-boots-46376663162961944",
    title: "Sofia 50 stretch-suede sock boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$650",
    discountedPrice: "$211", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162961944/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162961944/Q/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/blockheel/sofia-50-stretch-suede-sock-boots/46376663162961944"
  },
  {
    id: "philip-lim-mules-46376663162952749",
    title: "Downtown suede mules",
    brand: "3.1 PHILLIP LIM",
    originalPrice: "$650",
    discountedPrice: "$190", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162952749/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162952749/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "heels",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/31-phillip-lim/pumps/mid-heel-pumps/downtown-suede-mules/46376663162952749"
  },
  {
    id: "tods-sneakers-46376663162969908",
    title: "Twill, suede and leather sneakers",
    brand: "TOD'S",
    originalPrice: "$561",
    discountedPrice: "$201", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/46376663162969908/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162969908/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/tod-s/sneakers/fashion-sneakers/twill-suede-and-leather-sneakers/46376663162969908"
  },
  {
    id: "stuart-weitzman-naomi-otk-boots-46376663162964299",
    title: "Naomi 75 suede over-the-knee boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$995",
    discountedPrice: "$324", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162964299/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162964299/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/over-the-knee-boots/naomi-75-suede-over-the-knee-boots/46376663162964299"
  },
  {
    id: "stuart-weitzman-amelina-sandals-46376663162991465",
    title: "Amelina 95 leather sandals",
    brand: "STUART WEITZMAN",
    originalPrice: "$400",
    discountedPrice: "$143", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/46376663162991465/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162991465/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sandals",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/sandals/high-heel-sandals/amelina-95-leather-sandals/46376663162991465"
  },
  {
    id: "maje-pumps-46376663162837059",
    title: "Chain-embellished leather slingback pumps",
    brand: "MAJE",
    originalPrice: "$385",
    discountedPrice: "$125", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162837059/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162837059/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "heels",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/maje/pumps/mid-heel-pumps/chain-embellished-leather-slingback-pumps/46376663162837059"
  },
  {
    id: "maje-ankle-boots-46376663162837075",
    title: "Suede ankle boots",
    brand: "MAJE",
    originalPrice: "$460",
    discountedPrice: "$149", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162837075/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162837075/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/maje/boots/blockheel/suede-ankle-boots/46376663162837075"
  },
  {
    id: "alexandre-birman-boots-46376663162981689",
    title: "Olivia 60 embellished suede ankle boots",
    brand: "ALEXANDRE BIRMAN",
    originalPrice: "$995",
    discountedPrice: "$291", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162981689/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162981689/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/alexandre-birman/boots/ankle-boots/olivia-60-embellished-suede-ankle-boots/46376663162981689"
  },
  {
    id: "alexandre-birman-pumps-46376663162981832",
    title: "Clarita Bell 85 bow-detailed crinkled patent-leather slingback pumps",
    brand: "ALEXANDRE BIRMAN",
    originalPrice: "$795",
    discountedPrice: "$259", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162981832/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162981832/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "heels",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/alexandre-birman/pumps/pointedtoe/clarita-bell-85-bow-detailed-crinkled-patent-leather-slingback-pumps/46376663162981832"
  },
  {
    id: "alexandre-birman-knee-boots-46376663162981674",
    title: "Brena leather knee boots",
    brand: "ALEXANDRE BIRMAN",
    originalPrice: "$995",
    discountedPrice: "$324", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162981674/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162981674/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/alexandre-birman/boots/tall-boots/brena-leather-knee-boots/46376663162981674"
  },
  {
    id: "maison-margiela-tabi-boots-46376663162908918",
    title: "Tabi leather split-toe ankle boots",
    brand: "MAISON MARGIELA",
    originalPrice: "$1,490",
    discountedPrice: "$324", // 35% cheaper
    discount: "78%",
    image: "https://www.theoutnet.com/variants/images/46376663162908918/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162908918/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/maison-margiela/boots/ankle-boots/tabi-leather-split-toe-ankle-boots/46376663162908918"
  },
  {
    id: "stuart-weitzman-over-the-knee-boots-46376663162961893",
    title: "Naomi 75 leather over-the-knee boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$995",
    discountedPrice: "$324", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162961893/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162961893/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/over-the-knee-boots/naomi-75-leather-over-the-knee-boots/46376663162961893"
  },
  {
    id: "stuart-weitzman-yuliana-sock-boots-46376663162919183",
    title: "Yuliana 60 stretch-leather sock boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$595",
    discountedPrice: "$194", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162919183/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162919183/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/blockheel/yuliana-60-stretch-leather-sock-boots/46376663162919183"
  },
  {
    id: "stuart-weitzman-laine-boots-46376663162905449",
    title: "Laine leather Chelsea boots",
    brand: "STUART WEITZMAN",
    originalPrice: "$595",
    discountedPrice: "$213", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/46376663162905449/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162905449/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/stuart-weitzman/boots/ankle-boots/laine-leather-chelsea-boots/46376663162905449"
  },

  // Women's Bags (25+ products)
  {
    id: "gucci-soho-tote-46376663162902094",
    title: "Soho pebbled-leather tote",
    brand: "GUCCI",
    originalPrice: "$3,300",
    discountedPrice: "$1,609", // 35% cheaper
    discount: "51%",
    image: "https://www.theoutnet.com/variants/images/46376663162902094/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162902094/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/gucci/totes/totes/soho-pebbled-leather-tote/46376663162902094"
  },
  {
    id: "gucci-horsebit-shoulder-bag-46376663162931144",
    title: "Horsebit 1955 textured-leather shoulder bag",
    brand: "GUCCI",
    originalPrice: "$3,585",
    discountedPrice: "$1,748", // 35% cheaper
    discount: "51%",
    image: "https://www.theoutnet.com/variants/images/46376663162931144/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162931144/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    isJustIn: true,
    url: "/shop/product/gucci/shoulder-bags/shoulder-bags/horsebit-1955-textured-leather-shoulder-bag/46376663162931144"
  },
  {
    id: "jw-anderson-shoulder-bag-46376663162849278",
    title: "Embellished leather shoulder bag",
    brand: "JW ANDERSON",
    originalPrice: "$1,390",
    discountedPrice: "$317", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162849278/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162849278/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/jw-anderson/shoulder-bags/shoulder-bags/embellished-leather-shoulder-bag/46376663162849278"
  },
  {
    id: "valentino-roman-stud-bag-46376663162857150",
    title: "Roman Stud quilted leather shoulder bag",
    brand: "VALENTINO GARAVANI",
    originalPrice: "$3,800",
    discountedPrice: "$1,606", // 35% cheaper
    discount: "58%",
    image: "https://www.theoutnet.com/variants/images/46376663162857150/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162857150/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/valentino-garavani/shoulder-bags/shoulder-bags/roman-stud-quilted-leather-shoulder-bag/46376663162857150"
  },
  {
    id: "ferragamo-vara-bag-1647597353582846",
    title: "Vara bow-detailed pebbled-leather cross-body bag",
    brand: "FERRAGAMO",
    originalPrice: "$1,480",
    discountedPrice: "$673", // 35% cheaper
    discount: "55%",
    image: "https://www.theoutnet.com/variants/images/1647597353582846/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597353582846/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "cross-body",
    gender: "women",
    url: "/shop/product/ferragamo/shoulder-bags/cross-body-bags/vara-bow-detailed-pebbled-leather-cross-body-bag/1647597353582846"
  },
  {
    id: "gucci-marmont-bag-46376663162914508",
    title: "GG Marmont quilted leather cross-body bag",
    brand: "GUCCI",
    originalPrice: "$1,800",
    discountedPrice: "$878", // 35% cheaper
    discount: "51%",
    image: "https://www.theoutnet.com/variants/images/46376663162914508/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162914508/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "cross-body",
    gender: "women",
    url: "/shop/product/gucci/shoulder-bags/cross-body-bags/gg-marmont-quilted-leather-cross-body-bag/46376663162914508"
  },
  {
    id: "tory-burch-mcgraw-bag-46376663162926707",
    title: "McGraw pebbled-leather cross-body bag",
    brand: "TORY BURCH",
    originalPrice: "$328",
    discountedPrice: "$128", // 35% cheaper
    discount: "61%",
    image: "https://www.theoutnet.com/variants/images/46376663162926707/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162926707/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "cross-body",
    gender: "women",
    url: "/shop/product/tory-burch/shoulder-bags/cross-body-bags/mcgraw-pebbled-leather-cross-body-bag/46376663162926707"
  },
  {
    id: "sandro-straw-tote-46376663162842100",
    title: "Leather-trimmed fringed color-block straw tote",
    brand: "SANDRO",
    originalPrice: "$425",
    discountedPrice: "$111", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162842100/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162842100/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/sandro/top-handle/top-handle-bags/leather-trimmed-fringed-color-block-straw-tote/46376663162842100"
  },
  {
    id: "marni-bucket-bag-46376663162885923",
    title: "Tropicalia leather-trimmed faux raffia bucket bag",
    brand: "MARNI",
    originalPrice: "$1,495",
    discountedPrice: "$341", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162885923/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162885923/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "bucket",
    gender: "women",
    url: "/shop/product/marni/shoulder-bags/bucket/tropicalia-leather-trimmed-faux-raffia-bucket-bag/46376663162885923"
  },
  {
    id: "chloe-bucket-bag-1647597335655284",
    title: "Louela leather bucket bag",
    brand: "CHLOÉ",
    originalPrice: "$2,150",
    discountedPrice: "$629", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597335655284/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597335655284/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "bucket",
    gender: "women",
    url: "/shop/product/chloe/shoulder-bags/bucket/louela-leather-bucket-bag/1647597335655284"
  },
  {
    id: "jw-anderson-moon-bag-46376663162832863",
    title: "Bumper Moon leather-trimmed jacquard shoulder bag",
    brand: "JW ANDERSON",
    originalPrice: "$650",
    discountedPrice: "$148", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162832863/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162832863/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/jw-anderson/shoulder-bags/shoulder-bags/bumper-moon-leather-trimmed-jacquard-shoulder-bag/46376663162832863"
  },
  {
    id: "valentino-vlogo-bag-1647597327145118",
    title: "VLOGO Chain leather shoulder bag",
    brand: "VALENTINO GARAVANI",
    originalPrice: "$2,600",
    discountedPrice: "$845", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597327145118/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597327145118/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/valentino-garavani/shoulder-bags/shoulder-bags/vlogo-chain-leather-shoulder-bag/1647597327145118"
  },
  {
    id: "gucci-canvas-bag-46376663162918776",
    title: "Horsebit 1955 printed coated-canvas shoulder bag",
    brand: "GUCCI",
    originalPrice: "$3,200",
    discountedPrice: "$1,560", // 35% cheaper
    discount: "51%",
    image: "https://www.theoutnet.com/variants/images/46376663162918776/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162918776/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/gucci/shoulder-bags/shoulder-bags/horsebit-1955-printed-coated-canvas-shoulder-bag/46376663162918776"
  },
  {
    id: "maje-straw-tote-46376663162837220",
    title: "Leather-trimmed straw tote",
    brand: "MAJE",
    originalPrice: "$295",
    discountedPrice: "$77", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162837220/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162837220/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/maje/totes/totes/leather-trimmed-straw-tote/46376663162837220"
  },
  {
    id: "maison-margiela-bucket-bag-46376663162833388",
    title: "Leather and rattan bucket bag",
    brand: "MAISON MARGIELA",
    originalPrice: "$1,640",
    discountedPrice: "$373", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162833388/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162833388/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "bucket",
    gender: "women",
    url: "/shop/product/maison-margiela/mini-bags/mini-shoulder-bags/leather-and-rattan-bucket-bag/46376663162833388"
  },
  {
    id: "sandro-tweed-tote-46376663162848430",
    title: "Frayed striped bouclé-tweed tote",
    brand: "SANDRO",
    originalPrice: "$475",
    discountedPrice: "$124", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162848430/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162848430/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/sandro/totes/totes/frayed-striped-boucle-tweed-tote/46376663162848430"
  },
  {
    id: "sandro-checked-tote-46376663162847666",
    title: "Checked straw tote",
    brand: "SANDRO",
    originalPrice: "$385",
    discountedPrice: "$113", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162847666/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162847666/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/sandro/totes/totes/checked-straw-tote/46376663162847666"
  },
  {
    id: "missoni-crochet-tote-1647597342488215",
    title: "Metallic crochet-knit tote",
    brand: "MISSONI",
    originalPrice: "$1,250",
    discountedPrice: "$285", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597342488215/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597342488215/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/missoni/totes/totes/metallic-crochet-knit-tote/1647597342488215"
  },
  {
    id: "ferragamo-vara-tote-1647597339267911",
    title: "Vara bow-detailed leather tote",
    brand: "FERRAGAMO",
    originalPrice: "$2,100",
    discountedPrice: "$956", // 35% cheaper
    discount: "54%",
    image: "https://www.theoutnet.com/variants/images/1647597339267911/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597339267911/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/ferragamo/totes/totes/vara-bow-detailed-leather-tote/1647597339267911"
  },
  {
    id: "ferragamo-vara-bow-tote-1647597359581515",
    title: "Vara Bow leather tote",
    brand: "FERRAGAMO",
    originalPrice: "$2,100",
    discountedPrice: "$683", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597359581515/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597359581515/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "totes",
    gender: "women",
    url: "/shop/product/ferragamo/totes/totes/vara-bow-leather-tote/1647597359581515"
  },
  {
    id: "phillip-lim-id-bag-46376663162941870",
    title: "ID Soft leather and canvas shoulder bag",
    brand: "3.1 PHILLIP LIM",
    originalPrice: "$850",
    discountedPrice: "$221", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162941870/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162941870/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/31-phillip-lim/shoulder-bags/shoulder-bags/id-soft-leather-and-canvas-shoulder-bag/46376663162941870"
  },
  {
    id: "thom-browne-bucket-bag-1647597350953050",
    title: "Checked woven and pebbled-leather bucket bag",
    brand: "THOM BROWNE",
    originalPrice: "$3,100",
    discountedPrice: "$705", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597350953050/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597350953050/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "bucket",
    gender: "women",
    url: "/shop/product/thom-browne/shoulder-bags/bucket/checked-woven-and-pebbled-leather-bucket-bag/1647597350953050"
  },
  {
    id: "phillip-lim-bucket-bag-46376663162897873",
    title: "Odita woven leather bucket bag",
    brand: "3.1 PHILLIP LIM",
    originalPrice: "$695",
    discountedPrice: "$226", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162897873/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162897873/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "bucket",
    gender: "women",
    url: "/shop/product/31-phillip-lim/shoulder-bags/bucket/odita-woven-leather-bucket-bag/46376663162897873"
  },
  {
    id: "brunello-cucinelli-wool-bucket-46376663162939523",
    title: "Bead-embellished leather-trimmed wool bucket bag",
    brand: "BRUNELLO CUCINELLI",
    originalPrice: "$2,350",
    discountedPrice: "$688", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162939523/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162939523/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "bucket",
    gender: "women",
    url: "/shop/product/brunello-cucinelli/shoulder-bags/bucket/bead-embellished-leather-trimmed-wool-bucket-bag/46376663162939523"
  },
  {
    id: "jw-anderson-jacquard-bag-46376663162832865",
    title: "Jacquard shoulder bag",
    brand: "JW ANDERSON",
    originalPrice: "$950",
    discountedPrice: "$216", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162832865/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162832865/Q/w340_q80.jpg",
    category: "bags",
    subcategory: "shoulder-bags",
    gender: "women",
    url: "/shop/product/jw-anderson/shoulder-bags/shoulder-bags/jacquard-shoulder-bag/46376663162832865"
  },

  // Women's Accessories (25+ products)
  {
    id: "toteme-faux-raffia-fedora-46376663162861205",
    title: "Faux raffia fedora",
    brand: "TOTEME",
    originalPrice: "$315",
    discountedPrice: "$75", // 35% cheaper
    discount: "76%",
    image: "https://www.theoutnet.com/variants/images/46376663162861205/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162861205/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "women",
    url: "/shop/product/toteme/hats/summer-hats/faux-raffia-fedora/46376663162861205"
  },
  {
    id: "brunello-cucinelli-woven-belt-46376663162835977",
    title: "Bead-embellished woven belt",
    brand: "BRUNELLO CUCINELLI",
    originalPrice: "$1,350",
    discountedPrice: "$395", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162835977/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162835977/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "belts",
    gender: "women",
    url: "/shop/product/brunello-cucinelli/belts/belts/bead-embellished-woven-belt/46376663162835977"
  },
  {
    id: "brunello-cucinelli-sun-hat-46376663162833800",
    title: "Bead-embellished straw sun hat",
    brand: "BRUNELLO CUCINELLI",
    originalPrice: "$1,700",
    discountedPrice: "$498", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162833800/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162833800/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "women",
    url: "/shop/product/brunello-cucinelli/hats/summer-hats/bead-embellished-straw-sun-hat/46376663162833800"
  },
  {
    id: "kimeze-sunglasses-1647597306762039",
    title: "Amon oversized square-frame tortoiseshell acetate sunglasses",
    brand: "KIMEZE",
    originalPrice: "$335",
    discountedPrice: "$77", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597306762039/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597306762039/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
    url: "/shop/product/kimeze/sunglasses/square-frame/amon-oversized-square-frame-tortoiseshell-acetate-sunglasses/1647597306762039"
  },
  {
    id: "frame-leather-belt-46376663162879048",
    title: "Leather belt",
    brand: "FRAME",
    originalPrice: "$188",
    discountedPrice: "$55", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162879048/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162879048/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "belts",
    gender: "women",
    url: "/shop/product/frame/belts/belts/leather-belt/46376663162879048"
  },
  {
    id: "jennifer-behr-hair-clip-46376663162899677",
    title: "Paityn faux pearl and satin bow hair clip",
    brand: "JENNIFER BEHR",
    originalPrice: "$225",
    discountedPrice: "$81", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/46376663162899677/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162899677/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hair-accessories",
    gender: "women",
    url: "/shop/product/jennifer-behr/hair-accessories/clips-and-slides/paityn-faux-pearl-and-satin-bow-hair-clip/46376663162899677"
  },
  {
    id: "jennifer-behr-scarf-46376663162900836",
    title: "Bennett printed silk-twill scarf",
    brand: "JENNIFER BEHR",
    originalPrice: "$268",
    discountedPrice: "$79", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162900836/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162900836/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "scarves",
    gender: "women",
    url: "/shop/product/jennifer-behr/scarves-ties/scarves/bennett-printed-silk-twill-scarf/46376663162900836"
  },
  {
    id: "le-specs-sunglasses-1647597349204470",
    title: "What I Need square-frame acetate and gold-tone sunglasses",
    brand: "LE SPECS",
    originalPrice: "$105",
    discountedPrice: "$24", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597349204470/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597349204470/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
    url: "/shop/product/le-specs/sunglasses/square-frame/what-i-need-square-frame-acetate-and-gold-tone-sunglasses/1647597349204470"
  },
  {
    id: "toteme-striped-sunhat-46376663162848756",
    title: "Striped silk-twill sunhat",
    brand: "TOTEME",
    originalPrice: "$390",
    discountedPrice: "$101", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162848756/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162848756/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "women",
    url: "/shop/product/toteme/hats/summer-hats/striped-silk-twill-sunhat/46376663162848756"
  },
  {
    id: "kimeze-oval-sunglasses-1647597285341835",
    title: "Gabriel oval-frame acetate sunglasses",
    brand: "KIMEZE",
    originalPrice: "$295",
    discountedPrice: "$68", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597285341835/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597285341835/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
    url: "/shop/product/kimeze/sunglasses/round-frame/gabriel-oval-frame-acetate-sunglasses/1647597285341835"
  },
  {
    id: "chloe-wallet-46376663162861232",
    title: "Embroidered leather wallet",
    brand: "CHLOÉ",
    originalPrice: "$670",
    discountedPrice: "$218", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162861232/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162861232/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "wallets",
    gender: "women",
    url: "/shop/product/chloe/wallets-slgs/wallets/embroidered-leather-wallet/46376663162861232"
  },
  {
    id: "le-specs-cat-eye-sunglasses-1647597349201454",
    title: "Mountain High cat-eye acetate sunglasses",
    brand: "LE SPECS",
    originalPrice: "$105",
    discountedPrice: "$24", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597349201454/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597349201454/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
    url: "/shop/product/le-specs/sunglasses/cat-eye/mountain-high-cat-eye-acetate-sunglasses/1647597349201454"
  },
  {
    id: "jacquemus-airpods-case-46376663162870043",
    title: "Le Porte Bambino leather AirPods case",
    brand: "JACQUEMUS",
    originalPrice: "$360",
    discountedPrice: "$82", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162870043/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162870043/R/w340_q80.jpg",
    category: "accessories",
    subcategory: "tech",
    gender: "women",
    url: "/shop/product/jacquemus/technology/phone-cases/le-porte-bambino-leather-airpods-case/46376663162870043"
  },
  {
    id: "jennifer-behr-headband-46376663162900158",
    title: "Savannah printed twill headband",
    brand: "JENNIFER BEHR",
    originalPrice: "$198",
    discountedPrice: "$59", // 35% cheaper
    discount: "70%",
    image: "https://www.theoutnet.com/variants/images/46376663162900158/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162900158/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hair-accessories",
    gender: "women",
    url: "/shop/product/jennifer-behr/hair-accessories/headbands/savannah-printed-twill-headband/46376663162900158"
  },
  {
    id: "marni-denim-hat-46376663162891534",
    title: "Appliquéd denim sun hat",
    brand: "MARNI",
    originalPrice: "$650",
    discountedPrice: "$169", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162891534/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162891534/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "women",
    url: "/shop/product/marni/hats/summer-hats/appliqued-denim-sun-hat/46376663162891534"
  },
  {
    id: "jennifer-behr-neptune-scarf-46376663162900858",
    title: "+ Julia Berolzheimer Neptune printed silk-twill scarf",
    brand: "JENNIFER BEHR",
    originalPrice: "$268",
    discountedPrice: "$70", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162900858/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162900858/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "scarves",
    gender: "women",
    url: "/shop/product/jennifer-behr/scarves-ties/scarves/plus-julia-berolzheimer-neptune-printed-silk-twill-scarf/46376663162900858"
  },
  {
    id: "jennifer-behr-lace-clip-46376663162899679",
    title: "Marbella crocheted lace hair clip",
    brand: "JENNIFER BEHR",
    originalPrice: "$168",
    discountedPrice: "$38", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162899679/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162899679/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hair-accessories",
    gender: "women",
    url: "/shop/product/jennifer-behr/hair-accessories/clips-and-slides/marbella-crocheted-lace-hair-clip/46376663162899679"
  },
  {
    id: "jennifer-behr-bow-headband-46376663162900155",
    title: "Karmen satin bow headband",
    brand: "JENNIFER BEHR",
    originalPrice: "$325",
    discountedPrice: "$106", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162900155/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162900155/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hair-accessories",
    gender: "women",
    url: "/shop/product/jennifer-behr/hair-accessories/headbands/karmen-satin-bow-headband/46376663162900155"
  },
  {
    id: "zimmermann-crystal-ring-1647597359450281",
    title: "Gold-tone crystal ring",
    brand: "ZIMMERMANN",
    originalPrice: "$250",
    discountedPrice: "$81", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597359450281/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597359450281/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "jewelry",
    gender: "women",
    url: "/shop/product/zimmermann/jewelry/rings/gold-tone-crystal-ring/1647597359450281"
  },
  {
    id: "le-specs-air-heart-sunglasses-1647597357442390",
    title: "Air Heart cat-eye acetate and gold-tone sunglasses",
    brand: "LE SPECS",
    originalPrice: "$60",
    discountedPrice: "$14", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597357442390/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597357442390/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
    url: "/shop/product/le-specs/sunglasses/cat-eye/air-heart-cat-eye-acetate-and-gold-tone-sunglasses/1647597357442390"
  },
  {
    id: "zimmermann-leather-belt-1647597342510939",
    title: "Leather belt",
    brand: "ZIMMERMANN",
    originalPrice: "$480",
    discountedPrice: "$94", // 35% cheaper
    discount: "80%",
    image: "https://www.theoutnet.com/variants/images/1647597342510939/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597342510939/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "belts",
    gender: "women",
    url: "/shop/product/zimmermann/belts/belts/leather-belt/1647597342510939"
  },
  {
    id: "zimmermann-gold-necklace-46376663162873120",
    title: "Gold-tone necklace",
    brand: "ZIMMERMANN",
    originalPrice: "$495",
    discountedPrice: "$145", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162873120/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162873120/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "jewelry",
    gender: "women",
    url: "/shop/product/zimmermann/jewelry/necklaces/gold-tone-necklace/46376663162873120"
  },
  {
    id: "brunello-cucinelli-fedora-46376663162841700",
    title: "Leather-trimmed bead-embellished straw fedora",
    brand: "BRUNELLO CUCINELLI",
    originalPrice: "$1,700",
    discountedPrice: "$442", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162841700/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162841700/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "women",
    url: "/shop/product/brunello-cucinelli/hats/summer-hats/leather-trimmed-bead-embellished-straw-fedora/46376663162841700"
  },
  {
    id: "zimmermann-chain-belt-1647597343135760",
    title: "Chain-embellished leather belt",
    brand: "ZIMMERMANN",
    originalPrice: "$395",
    discountedPrice: "$116", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597343135760/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597343135760/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "belts",
    gender: "women",
    url: "/shop/product/zimmermann/belts/belts/chain-embellished-leather-belt/1647597343135760"
  },
  {
    id: "mcqueen-gold-necklace-1647597284975401",
    title: "Gold-tone necklace",
    brand: "MCQUEEN",
    originalPrice: "$450",
    discountedPrice: "$146", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597284975401/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597284975401/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "jewelry",
    gender: "women",
    url: "/shop/product/mcqueen/jewelry/necklaces/gold-tone-necklace/1647597284975401"
  },
  {
    id: "kimeze-cat-eye-sunglasses-1647597306762037",
    title: "Concept 3 cat-eye bio-acetate sunglasses",
    brand: "KIMEZE",
    originalPrice: "$310",
    discountedPrice: "$71", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597306762037/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597306762037/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
    url: "/shop/product/kimeze/sunglasses/cat-eye/concept-3-cat-eye-bio-acetate-sunglasses/1647597306762037"
  }
];

// Men's Products from THE OUTNET  
export const mensProducts: Product[] = [
  // Men's Clothing (25+ products)
  {
    id: "jacquemus-felt-jacket-46376663162865742",
    title: "Felt jacket",
    brand: "JACQUEMUS",
    originalPrice: "$1,015",
    discountedPrice: "$264", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162865742/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162865742/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/jacquemus/jackets/casual-jackets/felt-jacket/46376663162865742"
  },
  {
    id: "sandro-wool-jacket-46376663162846908",
    title: "Wool-blend crepe jacket",
    brand: "SANDRO",
    originalPrice: "$730",
    discountedPrice: "$237", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162846908/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162846908/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/sandro/jackets/casual-jackets/wool-blend-crepe-jacket/46376663162846908"
  },
  {
    id: "jacquemus-alpaca-sweater-46376663162877694",
    title: "Pavane intarsia alpaca-blend sweater",
    brand: "JACQUEMUS",
    originalPrice: "$730",
    discountedPrice: "$214", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162877694/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162877694/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/jacquemus/knitwear/turtleneck-sweaters/pavane-intarsia-alpaca-blend-sweater/46376663162877694"
  },
  {
    id: "jacquemus-wool-hoodie-46376663162879154",
    title: "Seville ribbed wool hoodie",
    brand: "JACQUEMUS",
    originalPrice: "$705",
    discountedPrice: "$207", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162879154/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162879154/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/jacquemus/knitwear/cardigans-zip-throughs/seville-ribbed-wool-hoodie/46376663162879154"
  },
  {
    id: "burberry-logo-tshirt-46376663162904877",
    title: "Logo-embroidered cotton-jersey T-shirt",
    brand: "BURBERRY",
    originalPrice: "$610",
    discountedPrice: "$179", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162904877/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162904877/Q/w340_q80.jpg",
    category: "clothing",
    subcategory: "t-shirts",
    gender: "men",
    url: "/shop/product/burberry/tops/t-shirts/logo-embroidered-cotton-jersey-t-shirt/46376663162904877"
  },
  {
    id: "thom-browne-overshirt-46376663162874234",
    title: "Striped cotton-twill overshirt",
    brand: "THOM BROWNE",
    originalPrice: "$1,550",
    discountedPrice: "$454", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162874234/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162874234/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "shirts",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/thom-browne/jackets/casual-jackets/striped-cotton-twill-overshirt/46376663162874234"
  },
  {
    id: "tom-ford-jeans-46376663162868115",
    title: "Skinny-fit denim jeans",
    brand: "TOM FORD",
    originalPrice: "$1,050",
    discountedPrice: "$307", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162868115/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162868115/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "pants",
    gender: "men",
    url: "/shop/product/tom-ford/jeans/skinny-leg-jeans/skinny-fit-denim-jeans/46376663162868115"
  },
  {
    id: "thom-browne-sweater-46376663162875218",
    title: "Striped intarsia wool sweater",
    brand: "THOM BROWNE",
    originalPrice: "$1,250",
    discountedPrice: "$325", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162875218/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162875218/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/thom-browne/knitwear/crew-neck-sweaters/striped-intarsia-wool-sweater/46376663162875218"
  },
  {
    id: "frame-denim-jeans-46376663162895508",
    title: "Modern denim jeans",
    brand: "FRAME",
    originalPrice: "$218",
    discountedPrice: "$71", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162895508/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162895508/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "pants",
    gender: "men",
    url: "/shop/product/frame/jeans/straight-leg-jeans/modern-denim-jeans/46376663162895508"
  },
  {
    id: "frescobol-carioca-shirt-1647597329732919",
    title: "Antonio linen shirt",
    brand: "FRESCOBOL CARIOCA",
    originalPrice: "$245",
    discountedPrice: "$80", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597329732919/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597329732919/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "shirts",
    gender: "men",
    url: "/shop/product/frescobol-carioca/tops/casual-shirts/antonio-linen-shirt/1647597329732919"
  },
  {
    id: "thom-browne-cardigan-46376663162852518",
    title: "Striped wool and mohair-blend cardigan",
    brand: "THOM BROWNE",
    originalPrice: "$890",
    discountedPrice: "$289", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162852518/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162852518/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/thom-browne/knitwear/cardigans-zip-throughs/striped-wool-and-mohair-blend-cardigan/46376663162852518"
  },
  {
    id: "boglioli-corduroy-pants-46376663162900277",
    title: "Slim-fit cotton-blend corduroy pants",
    brand: "BOGLIOLI",
    originalPrice: "$556",
    discountedPrice: "$145", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162900277/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162900277/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "pants",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/boglioli/pants/casual-pants/slim-fit-cotton-blend-corduroy-pants/46376663162900277"
  },
  {
    id: "thom-browne-shorts-46376663162848832",
    title: "Striped waffle-knit cotton drawstring shorts",
    brand: "THOM BROWNE",
    originalPrice: "$950",
    discountedPrice: "$309", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162848832/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162848832/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "shorts",
    gender: "men",
    url: "/shop/product/thom-browne/shorts/casual-shorts/striped-waffle-knit-cotton-drawstring-shorts/46376663162848832"
  },
  {
    id: "missoni-sweater-46376663162882568",
    title: "Jacquard-knit cotton and wool-blend sweater",
    brand: "MISSONI",
    originalPrice: "$980",
    discountedPrice: "$255", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162882568/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162882568/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/missoni/knitwear/crew-neck-sweaters/jacquard-knit-cotton-and-wool-blend-sweater/46376663162882568"
  },
  {
    id: "jacquemus-vega-sweater-46376663162877607",
    title: "Vega cutout ribbed wool-blend turtleneck sweater",
    brand: "JACQUEMUS",
    originalPrice: "$680",
    discountedPrice: "$177", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162877607/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162877607/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/jacquemus/knitwear/turtleneck-sweaters/vega-cutout-ribbed-wool-blend-turtleneck-sweater/46376663162877607"
  },
  {
    id: "jacquemus-half-zip-46376663162877615",
    title: "Carro checked merino wool-blend half-zip sweater",
    brand: "JACQUEMUS",
    originalPrice: "$605",
    discountedPrice: "$157", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162877615/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162877615/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/jacquemus/knitwear/cardigans-zip-throughs/carro-checked-merino-wool-blend-half-zip-sweater/46376663162877615"
  },
  {
    id: "thom-browne-cotton-jacket-46376663162848460",
    title: "Jacquard-knit cotton jacket",
    brand: "THOM BROWNE",
    originalPrice: "$1,890",
    discountedPrice: "$491", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162848460/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162848460/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "men",
    url: "/shop/product/thom-browne/jackets/casual-jackets/jacquard-knit-cotton-jacket/46376663162848460"
  },
  {
    id: "fusalp-shell-jacket-1647597329471686",
    title: "Timo II quilted neoprene-paneled shell jacket",
    brand: "FUSALP",
    originalPrice: "$670",
    discountedPrice: "$153", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597329471686/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597329471686/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "jackets",
    gender: "men",
    url: "/shop/product/fusalp/jackets/casual-jackets/timo-ii-quilted-neoprene-paneled-shell-jacket/1647597329471686"
  },
  {
    id: "thom-browne-sweatpants-46376663162848565",
    title: "Striped waffle-knit cotton sweatpants",
    brand: "THOM BROWNE",
    originalPrice: "$1,090",
    discountedPrice: "$284", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162848565/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162848565/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "pants",
    gender: "men",
    url: "/shop/product/thom-browne/pants/sweatpants/striped-waffle-knit-cotton-sweatpants/46376663162848565"
  },
  {
    id: "elder-statesman-polo-46376663162925302",
    title: "Leo striped cashmere and cotton-blend polo sweater",
    brand: "THE ELDER STATESMAN",
    originalPrice: "$1,195",
    discountedPrice: "$311", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162925302/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162925302/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "polo-shirts",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/the-elder-statesman/knitwear/v-neck-sweaters/leo-striped-cashmere-and-cotton-blend-polo-sweater/46376663162925302"
  },
  {
    id: "maison-margiela-sweater-46376663162908119",
    title: "Wool sweater",
    brand: "MAISON MARGIELA",
    originalPrice: "$770",
    discountedPrice: "$176", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162908119/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162908119/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "knitwear",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/maison-margiela/knitwear/crew-neck-sweaters/wool-sweater/46376663162908119"
  },
  {
    id: "sandro-polo-shirt-46376663162846655",
    title: "Open-knit polo shirt",
    brand: "SANDRO",
    originalPrice: "$340",
    discountedPrice: "$111", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162846655/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162846655/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "polo-shirts",
    gender: "men",
    url: "/shop/product/sandro/tops/polo-shirts/open-knit-polo-shirt/46376663162846655"
  },
  {
    id: "thom-browne-shorts-casual-46376663162848193",
    title: "Cotton-twill shorts",
    brand: "THOM BROWNE",
    originalPrice: "$550",
    discountedPrice: "$179", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162848193/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162848193/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "shorts",
    gender: "men",
    url: "/shop/product/thom-browne/shorts/casual-shorts/cotton-twill-shorts/46376663162848193"
  },
  {
    id: "missoni-tshirt-46376663162939921",
    title: "Cotton-jersey T-shirt",
    brand: "MISSONI",
    originalPrice: "$270",
    discountedPrice: "$70", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162939921/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162939921/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "t-shirts",
    gender: "men",
    url: "/shop/product/missoni/tops/t-shirts/cotton-jersey-t-shirt/46376663162939921"
  },
  {
    id: "thom-browne-suit-46376663162868992",
    title: "Herringbone wool suit",
    brand: "THOM BROWNE",
    originalPrice: "$2,990",
    discountedPrice: "$778", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162868992/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162868992/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "suits",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/thom-browne/suits/suits/herringbone-wool-suit/46376663162868992"
  },
  {
    id: "sandro-pique-polo-1647597349494773",
    title: "Cotton-piqué polo shirt",
    brand: "SANDRO",
    originalPrice: "$175",
    discountedPrice: "$46", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/1647597349494773/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597349494773/R/w340_q80.jpg",
    category: "clothing",
    subcategory: "polo-shirts",
    gender: "men",
    url: "/shop/product/sandro/tops/polo-shirts/cotton-pique-polo-shirt/1647597349494773"
  },

  // Men's Shoes (25+ products)
  {
    id: "nike-air-max-95-1647597306613350",
    title: "+ Kim Jones Volt Air Max 95 mesh and leather sneakers",
    brand: "NIKE",
    originalPrice: "$240",
    discountedPrice: "$47", // 35% cheaper
    discount: "80%",
    image: "https://www.theoutnet.com/variants/images/1647597306613350/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597306613350/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/nike/sneakers/sport-sneakers/plus-kim-jones-volt-air-max-95-mesh-and-leather-sneakers/1647597306613350"
  },
  {
    id: "converse-cdg-sneakers-46376663162859006",
    title: "Chuck 70 printed canvas sneakers",
    brand: "CONVERSE X COMME DES GARÇONS PLAY",
    originalPrice: "$150",
    discountedPrice: "$68", // 35% cheaper
    discount: "55%",
    image: "https://www.theoutnet.com/variants/images/46376663162859006/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162859006/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/converse-x-comme-des-garcons-play/sneakers/fashion-sneakers/chuck-70-printed-canvas-sneakers/46376663162859006"
  },
  {
    id: "sandro-sneakers-46376663162847464",
    title: "Two-tone mesh, leather and suede sneakers",
    brand: "SANDRO",
    originalPrice: "$330",
    discountedPrice: "$107", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162847464/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162847464/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/sandro/sneakers/fashion-sneakers/two-tone-mesh-leather-and-suede-sneakers/46376663162847464"
  },
  {
    id: "maison-margiela-tabi-boots-46376663162908830",
    title: "Tabi split-toe leather boots",
    brand: "MAISON MARGIELA",
    originalPrice: "$1,490",
    discountedPrice: "$387", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162908830/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162908830/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/maison-margiela/boots/chelsea-boots/tabi-split-toe-leather-boots/46376663162908830"
  },
  {
    id: "adidas-craig-green-1647597349740830",
    title: "Stan Smith Boost coated neoprene sneakers",
    brand: "ADIDAS ORIGINALS BY CRAIG GREEN",
    originalPrice: "$300",
    discountedPrice: "$59", // 35% cheaper
    discount: "80%",
    image: "https://www.theoutnet.com/variants/images/1647597349740830/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597349740830/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/adidas-originals-by-craig-green/sneakers/fashion-sneakers/stan-smith-boost-coated-neoprene-sneakers/1647597349740830"
  },
  {
    id: "thom-browne-sneakers-46376663162865918",
    title: "Striped shell and suede sneakers",
    brand: "THOM BROWNE",
    originalPrice: "$920",
    discountedPrice: "$239", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162865918/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162865918/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/thom-browne/sneakers/fashion-sneakers/striped-shell-and-suede-sneakers/46376663162865918"
  },
  {
    id: "y3-superstar-sneakers-1647597345838032",
    title: "Superstar embroidered leather sneakers",
    brand: "Y-3",
    originalPrice: "$330",
    discountedPrice: "$75", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597345838032/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597345838032/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/y-3/sneakers/fashion-sneakers/superstar-embroidered-leather-sneakers/1647597345838032"
  },
  {
    id: "ferragamo-gancini-boots-46376663162956885",
    title: "Geremia Gancini leather boots",
    brand: "FERRAGAMO",
    originalPrice: "$1,550",
    discountedPrice: "$504", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162956885/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162956885/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/ferragamo/boots/chelsea-boots/geremia-gancini-leather-boots/46376663162956885"
  },
  {
    id: "maison-margiela-shell-sneakers-1647597342177057",
    title: "Shell sneakers",
    brand: "MAISON MARGIELA",
    originalPrice: "$740",
    discountedPrice: "$192", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/1647597342177057/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597342177057/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/maison-margiela/sneakers/fashion-sneakers/shell-sneakers/1647597342177057"
  },
  {
    id: "maison-margiela-tabi-boots-alt-46376663162908918",
    title: "Tabi split-toe leather boots",
    brand: "MAISON MARGIELA",
    originalPrice: "$1,490",
    discountedPrice: "$387", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162908918/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162908918/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/maison-margiela/boots/chelsea-boots/tabi-split-toe-leather-boots/46376663162908918"
  },
  {
    id: "burberry-quilted-sneakers-1647597338994089",
    title: "Quilted leather sneakers",
    brand: "BURBERRY",
    originalPrice: "$850",
    discountedPrice: "$332", // 35% cheaper
    discount: "61%",
    image: "https://www.theoutnet.com/variants/images/1647597338994089/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597338994089/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/burberry/sneakers/fashion-sneakers/quilted-leather-sneakers/1647597338994089"
  },
  {
    id: "acne-studios-sneakers-1647597290348742",
    title: "N3W coated sneakers",
    brand: "ACNE STUDIOS",
    originalPrice: "$410",
    discountedPrice: "$80", // 35% cheaper
    discount: "80%",
    image: "https://www.theoutnet.com/variants/images/1647597290348742/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597290348742/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/acne-studios/sneakers/fashion-sneakers/n3w-coated-sneakers/1647597290348742"
  },
  {
    id: "tods-suede-boots-1647597357378138",
    title: "Suede boots",
    brand: "TOD'S",
    originalPrice: "$645",
    discountedPrice: "$147", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597357378138/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597357378138/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "men",
    url: "/shop/product/tod-s/boots/lace-up-boots/suede-boots/1647597357378138"
  },
  {
    id: "converse-cdg-high-tops-46376663162858871",
    title: "Chuck 70 printed canvas high-top sneakers",
    brand: "CONVERSE X COMME DES GARÇONS PLAY",
    originalPrice: "$150",
    discountedPrice: "$68", // 35% cheaper
    discount: "55%",
    image: "https://www.theoutnet.com/variants/images/46376663162858871/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162858871/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/converse-x-comme-des-garcons-play/sneakers/fashion-sneakers/chuck-70-printed-canvas-high-top-sneakers/46376663162858871"
  },
  {
    id: "rag-bone-suede-sneakers-46376663162995279",
    title: "Perry suede sneakers",
    brand: "RAG & BONE",
    originalPrice: "$298",
    discountedPrice: "$88", // 35% cheaper
    discount: "70%",
    image: "https://www.theoutnet.com/variants/images/46376663162995279/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162995279/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/rag-bone/sneakers/fashion-sneakers/perry-suede-sneakers/46376663162995279"
  },
  {
    id: "maison-margiela-shell-alt-1647597342177221",
    title: "Shell sneakers",
    brand: "MAISON MARGIELA",
    originalPrice: "$740",
    discountedPrice: "$168", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597342177221/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597342177221/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/maison-margiela/sneakers/fashion-sneakers/shell-sneakers/1647597342177221"
  },
  {
    id: "tods-driving-shoes-1647597338572372",
    title: "Suede driving shoes",
    brand: "TOD'S",
    originalPrice: "$695",
    discountedPrice: "$159", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597338572372/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597338572372/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "loafers",
    gender: "men",
    url: "/shop/product/tod-s/flat-shoes/loafers/suede-driving-shoes/1647597338572372"
  },
  {
    id: "tods-timeless-shoes-1647597338572190",
    title: "T Timeless suede driving shoes",
    brand: "TOD'S",
    originalPrice: "$675",
    discountedPrice: "$154", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597338572190/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597338572190/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "loafers",
    gender: "men",
    url: "/shop/product/tod-s/flat-shoes/loafers/t-timeless-suede-driving-shoes/1647597338572190"
  },
  {
    id: "thom-browne-chelsea-boots-46376663162849655",
    title: "Pebbled-leather Chelsea boots",
    brand: "THOM BROWNE",
    originalPrice: "$890",
    discountedPrice: "$231", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162849655/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162849655/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "boots",
    gender: "men",
    url: "/shop/product/thom-browne/boots/chelsea-boots/pebbled-leather-chelsea-boots/46376663162849655"
  },
  {
    id: "ferragamo-brogues-1647597359162325",
    title: "Lux pebbled-leather brogues",
    brand: "FERRAGAMO",
    originalPrice: "$1,150",
    discountedPrice: "$374", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597359162325/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597359162325/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "dress-shoes",
    gender: "men",
    url: "/shop/product/ferragamo/flat-shoes/lace-ups/lux-pebbled-leather-brogues/1647597359162325"
  },
  {
    id: "sandro-mesh-sneakers-46376663162847635",
    title: "Mesh and leather sneakers",
    brand: "SANDRO",
    originalPrice: "$330",
    discountedPrice: "$107", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162847635/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162847635/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/sandro/sneakers/fashion-sneakers/mesh-and-leather-sneakers/46376663162847635"
  },
  {
    id: "maison-margiela-derby-shoes-1647597342176934",
    title: "Distressed velvet derby shoes",
    brand: "MAISON MARGIELA",
    originalPrice: "$1,020",
    discountedPrice: "$232", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597342176934/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597342176934/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "dress-shoes",
    gender: "men",
    url: "/shop/product/maison-margiela/flat-shoes/lace-ups/distressed-velvet-derby-shoes/1647597342176934"
  },
  {
    id: "frescobol-carioca-slides-1647597331126760",
    title: "Humberto suede slides",
    brand: "FRESCOBOL CARIOCA",
    originalPrice: "$215",
    discountedPrice: "$63", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597331126760/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597331126760/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sandals",
    gender: "men",
    url: "/shop/product/frescobol-carioca/sandals/flat-sandals/humberto-suede-slides/1647597331126760"
  },
  {
    id: "tods-nocode-sneakers-1647597351192052",
    title: "Leather and stretch-knit sneakers",
    brand: "TOD'S NO_CODE",
    originalPrice: "$695",
    discountedPrice: "$136", // 35% cheaper
    discount: "80%",
    image: "https://www.theoutnet.com/variants/images/1647597351192052/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597351192052/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "sneakers",
    gender: "men",
    url: "/shop/product/tod-s-nocode/sneakers/fashion-sneakers/leather-and-stretch-knit-sneakers/1647597351192052"
  },
  {
    id: "paul-smith-loafers-46376663162907819",
    title: "Lawrence tasseled leather loafers",
    brand: "PAUL SMITH",
    originalPrice: "$465",
    discountedPrice: "$151", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162907819/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162907819/R/w340_q80.jpg",
    category: "shoes",
    subcategory: "loafers",
    gender: "men",
    url: "/shop/product/paul-smith/flat-shoes/loafers/lawrence-tasseled-leather-loafers/46376663162907819"
  },

  // Men's Accessories (25+ products)
  {
    id: "y3-leather-wallet-1647597349634396",
    title: "Printed leather wallet",
    brand: "Y-3",
    originalPrice: "$180",
    discountedPrice: "$59", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597349634396/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597349634396/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "wallets",
    gender: "men",
    url: "/shop/product/y-3/wallets-slgs/wallets/printed-leather-wallet/1647597349634396"
  },
  {
    id: "balenciaga-sunglasses-1647597339854557",
    title: "Square-frame tortoiseshell acetate sunglasses",
    brand: "BALENCIAGA",
    originalPrice: "$405",
    discountedPrice: "$145", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/1647597339854557/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597339854557/Q/w340_q80.jpg",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "men",
    url: "/shop/product/balenciaga/sunglasses/square-frame/square-frame-tortoiseshell-acetate-sunglasses/1647597339854557"
  },
  {
    id: "sandro-backpack-46376663162970985",
    title: "Pebbled-leather backpack",
    brand: "SANDRO",
    originalPrice: "$385",
    discountedPrice: "$113", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162970985/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162970985/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/sandro/backpacks/backpacks/pebbled-leather-backpack/46376663162970985"
  },
  {
    id: "burberry-tote-46376663162903045",
    title: "Gabardine tote",
    brand: "BURBERRY",
    originalPrice: "$2,150",
    discountedPrice: "$490", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162903045/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162903045/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/burberry/totes/totes/gabardine-tote/46376663162903045"
  },
  {
    id: "maison-margiela-messenger-46376663162928108",
    title: "5AC pebbled-leather messenger bag",
    brand: "MAISON MARGIELA",
    originalPrice: "$1,560",
    discountedPrice: "$406", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162928108/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162928108/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/maison-margiela/shoulder-bags/cross-body-bags/5ac-pebbled-leather-messenger-bag/46376663162928108"
  },
  {
    id: "thom-browne-phone-pouch-46376663162864778",
    title: "Pebbled-leather phone pouch",
    brand: "THOM BROWNE",
    originalPrice: "$790",
    discountedPrice: "$231", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162864778/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162864778/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "tech",
    gender: "men",
    url: "/shop/product/thom-browne/technology/phone-cases/pebbled-leather-phone-pouch/46376663162864778"
  },
  {
    id: "frescobol-carioca-cap-1647597357020081",
    title: "Embroidered linen baseball cap",
    brand: "FRESCOBOL CARIOCA",
    originalPrice: "$95",
    discountedPrice: "$25", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/1647597357020081/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597357020081/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "men",
    url: "/shop/product/frescobol-carioca/hats/caps/embroidered-linen-baseball-cap/1647597357020081"
  },
  {
    id: "dunhill-backpack-46376663162894600",
    title: "Logo-print textured backpack",
    brand: "DUNHILL",
    originalPrice: "$1,595",
    discountedPrice: "$364", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/46376663162894600/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162894600/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/dunhill/backpacks/backpacks/logo-print-textured-backpack/46376663162894600"
  },
  {
    id: "thom-browne-canvas-backpack-1647597357525598",
    title: "Leather-trimmed canvas backpack",
    brand: "THOM BROWNE",
    originalPrice: "$1,450",
    discountedPrice: "$425", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597357525598/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597357525598/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/thom-browne/backpacks/backpacks/leather-trimmed-canvas-backpack/1647597357525598"
  },
  {
    id: "mcqueen-cap-1647597358909780",
    title: "Embroidered cotton-twill baseball cap",
    brand: "MCQUEEN",
    originalPrice: "$410",
    discountedPrice: "$120", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597358909780/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597358909780/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "men",
    url: "/shop/product/mcqueen/hats/caps/embroidered-cotton-twill-baseball-cap/1647597358909780"
  },
  {
    id: "acne-studios-belt-1647597346794968",
    title: "Leather belt",
    brand: "ACNE STUDIOS",
    originalPrice: "$280",
    discountedPrice: "$82", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597346794968/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597346794968/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "belts",
    gender: "men",
    url: "/shop/product/acne-studios/belts/belts/leather-belt/1647597346794968"
  },
  {
    id: "tom-ford-wash-bag-46376663162870307",
    title: "Pebbled-leather wash bag",
    brand: "TOM FORD",
    originalPrice: "$1,890",
    discountedPrice: "$615", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162870307/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162870307/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "grooming",
    gender: "men",
    url: "/shop/product/tom-ford/beauty-grooming/beauty-cases-wash-bags/pebbled-leather-wash-bag/46376663162870307"
  },
  {
    id: "elder-statesman-beanie-46376663162923666",
    title: "Parker ribbed cashmere beanie",
    brand: "THE ELDER STATESMAN",
    originalPrice: "$495",
    discountedPrice: "$129", // 35% cheaper
    discount: "74%",
    image: "https://www.theoutnet.com/variants/images/46376663162923666/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162923666/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/the-elder-statesman/hats/beanies/parker-ribbed-cashmere-beanie/46376663162923666"
  },
  {
    id: "elder-statesman-cap-46376663162923665",
    title: "Silvano Dual embroidered tie-dyed cotton baseball cap",
    brand: "THE ELDER STATESMAN",
    originalPrice: "$225",
    discountedPrice: "$66", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162923665/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162923665/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "men",
    url: "/shop/product/the-elder-statesman/hats/caps/silvano-dual-embroidered-tie-dyed-cotton-baseball-cap/46376663162923665"
  },
  {
    id: "y3-wallet-alt-1647597349634354",
    title: "Printed leather wallet",
    brand: "Y-3",
    originalPrice: "$200",
    discountedPrice: "$65", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597349634354/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597349634354/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "wallets",
    gender: "men",
    url: "/shop/product/y-3/wallets-slgs/wallets/printed-leather-wallet/1647597349634354"
  },
  {
    id: "sandro-messenger-46376663162970991",
    title: "Leather messenger bag",
    brand: "SANDRO",
    originalPrice: "$320",
    discountedPrice: "$94", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162970991/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162970991/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/sandro/shoulder-bags/cross-body-bags/leather-messenger-bag/46376663162970991"
  },
  {
    id: "thom-browne-notebook-46376663162864774",
    title: "Pebbled-leather notebook",
    brand: "THOM BROWNE",
    originalPrice: "$430",
    discountedPrice: "$126", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162864774/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162864774/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "stationery",
    gender: "men",
    url: "/shop/product/thom-browne/stationery/stationery/pebbled-leather-notebook/46376663162864774"
  },
  {
    id: "paul-smith-wallet-46376663162907828",
    title: "Textured-leather wallet",
    brand: "PAUL SMITH",
    originalPrice: "$280",
    discountedPrice: "$91", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/46376663162907828/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162907828/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "wallets",
    gender: "men",
    url: "/shop/product/paul-smith/wallets-slgs/wallets/textured-leather-wallet/46376663162907828"
  },
  {
    id: "thom-browne-scarf-1647597352319557",
    title: "Fringed striped cashmere scarf",
    brand: "THOM BROWNE",
    originalPrice: "$590",
    discountedPrice: "$192", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597352319557/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597352319557/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "scarves",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/thom-browne/scarves-ties/scarves/fringed-striped-cashmere-scarf/1647597352319557"
  },
  {
    id: "dunhill-messenger-1647597320866692",
    title: "Contour embossed leather messenger bag",
    brand: "DUNHILL",
    originalPrice: "$1,695",
    discountedPrice: "$386", // 35% cheaper
    discount: "77%",
    image: "https://www.theoutnet.com/variants/images/1647597320866692/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597320866692/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/dunhill/shoulder-bags/cross-body-bags/contour-embossed-leather-messenger-bag/1647597320866692"
  },
  {
    id: "dunhill-hampstead-backpack-46376663162892044",
    title: "Hampstead leather backpack",
    brand: "DUNHILL",
    originalPrice: "$1,695",
    discountedPrice: "$496", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/46376663162892044/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/46376663162892044/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "bags",
    gender: "men",
    url: "/shop/product/dunhill/backpacks/backpacks/hampstead-leather-backpack/46376663162892044"
  },
  {
    id: "mcqueen-cap-alt-1647597358909778",
    title: "Embroidered cotton-twill baseball cap",
    brand: "MCQUEEN",
    originalPrice: "$450",
    discountedPrice: "$132", // 35% cheaper
    discount: "71%",
    image: "https://www.theoutnet.com/variants/images/1647597358909778/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597358909778/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "men",
    url: "/shop/product/mcqueen/hats/caps/embroidered-cotton-twill-baseball-cap/1647597358909778"
  },
  {
    id: "fusalp-cap-1647597356037696",
    title: "Appliquéd wool-blend felt baseball cap",
    brand: "FUSALP",
    originalPrice: "$150",
    discountedPrice: "$54", // 35% cheaper
    discount: "64%",
    image: "https://www.theoutnet.com/variants/images/1647597356037696/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597356037696/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "hats",
    gender: "men",
    url: "/shop/product/fusalp/hats/caps/appliqued-wool-blend-felt-baseball-cap/1647597356037696"
  },
  {
    id: "paul-smith-wallet-alt-1647597357440587",
    title: "Leather wallet",
    brand: "PAUL SMITH",
    originalPrice: "$265",
    discountedPrice: "$86", // 35% cheaper
    discount: "67%",
    image: "https://www.theoutnet.com/variants/images/1647597357440587/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597357440587/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "wallets",
    gender: "men",
    isJustIn: true,
    url: "/shop/product/paul-smith/wallets-slgs/wallets/leather-wallet/1647597357440587"
  },
  {
    id: "dolce-gabbana-belt-1647597335681009",
    title: "Velvet and leather belt",
    brand: "DOLCE&GABBANA",
    originalPrice: "$445",
    discountedPrice: "$87", // 35% cheaper
    discount: "80%",
    image: "https://www.theoutnet.com/variants/images/1647597335681009/F/w340_q80.jpg",
    imageHover: "https://www.theoutnet.com/variants/images/1647597335681009/E/w340_q80.jpg",
    category: "accessories",
    subcategory: "belts",
    gender: "men",
    url: "/shop/product/dolcegabbana/belts/belts/velvet-and-leather-belt/1647597335681009"
  }
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