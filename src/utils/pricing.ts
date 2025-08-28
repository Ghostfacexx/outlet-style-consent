// Utility functions for pricing calculations
export function applyOutletPricing(originalPrice: number): { 
  basePrice: number; 
  additionalDiscount: number; 
  finalPrice: number;
  discountText: string;
} {
  // First apply the 25% reduction from theoutnet.com
  const basePrice = Math.round(originalPrice * 0.75);
  
  // Then apply additional random discount between 9-17%
  const additionalDiscountPercent = Math.floor(Math.random() * 9) + 9; // 9-17%
  const additionalDiscount = Math.round(basePrice * (additionalDiscountPercent / 100));
  const finalPrice = basePrice - additionalDiscount;
  
  const totalDiscountPercent = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
  
  return {
    basePrice,
    additionalDiscount,
    finalPrice,
    discountText: `${totalDiscountPercent}% OFF`
  };
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

// Function to extract price from string and calculate new pricing
export function recalculateProductPricing(originalPriceStr: string, currentPriceStr: string) {
  const originalPrice = parseFloat(originalPriceStr.replace(/[$,]/g, ''));
  const pricing = applyOutletPricing(originalPrice);
  
  return {
    old: formatPrice(originalPrice),
    price: formatPrice(pricing.finalPrice),
    discount: pricing.discountText
  };
}