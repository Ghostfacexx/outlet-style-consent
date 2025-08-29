import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import * as React from "react";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { ActivityLogger } from "@/components/ActivityLogger";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import Index from "./pages/Index";

// Lazy load pages for code splitting
const Shop = React.lazy(() => import("./pages/Shop"));
const ShopMens = React.lazy(() => import("./pages/ShopMens"));
const ShopClothing = React.lazy(() => import("./pages/ShopClothing"));
const ShopShoes = React.lazy(() => import("./pages/ShopShoes"));
const ShopBags = React.lazy(() => import("./pages/ShopBags"));
const ShopAccessories = React.lazy(() => import("./pages/ShopAccessories"));
const ShopDesigners = React.lazy(() => import("./pages/ShopDesigners"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const PaymentSuccess = React.lazy(() => import("./pages/PaymentSuccess"));
const PaymentCanceled = React.lazy(() => import("./pages/PaymentCanceled"));
const Auth = React.lazy(() => import("./pages/Auth"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime in v5)
    },
  },
});

// Loading fallback component
const PageSkeleton = () => (
  <div className="mobile-container py-8 space-y-6">
    <div className="space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <AuthProvider>
            <BrowserRouter>
              <CartProvider>
              <div className="min-h-screen bg-background font-sans antialiased mobile-safe-area">
                <Header />
                <React.Suspense fallback={<PageSkeleton />}>
                  <Routes>
            <Route path="/" element={<Index />} />
            {/* Women's routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/just-in" element={<Shop />} />
            <Route path="/shop/bestsellers" element={<Shop />} />
            <Route path="/shop/designers" element={<ShopDesigners />} />
            <Route path="/shop/clothing" element={<ShopClothing />} />
            <Route path="/shop/clothing/:subcategory" element={<ShopClothing />} />
            <Route path="/shop/shoes" element={<ShopShoes />} />
            <Route path="/shop/bags" element={<ShopBags />} />
            <Route path="/shop/accessories" element={<ShopAccessories />} />
            {/* Men's routes */}
            <Route path="/shop/mens" element={<ShopMens />} />
            <Route path="/shop/mens/just-in" element={<ShopMens />} />
            <Route path="/shop/mens/bestsellers" element={<ShopMens />} />
            <Route path="/shop/mens/designers" element={<ShopMens />} />
            <Route path="/shop/mens/clothing" element={<ShopMens />} />
            <Route path="/shop/mens/shoes" element={<ShopMens />} />
            <Route path="/shop/mens/bags" element={<ShopMens />} />
            <Route path="/shop/mens/accessories" element={<ShopMens />} />
            {/* Product pages */}
            <Route path="/shop/product/*" element={<ProductDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Auth & Payment */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-canceled" element={<PaymentCanceled />} />
            <Route path="*" element={<NotFound />} />
                  </Routes>
                </React.Suspense>
                <ActivityLogger />
                <CookieConsent />
                <Toaster />
                <Sonner />
              </div>
            </CartProvider>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
