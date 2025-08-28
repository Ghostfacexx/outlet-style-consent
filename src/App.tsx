import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { CartProvider } from "@/contexts/CartContext";
import { Skeleton } from "@/components/ui/skeleton";
import Index from "./pages/Index";

// Lazy load pages for code splitting
const Clothing = lazy(() => import("./pages/Clothing"));
const Shoes = lazy(() => import("./pages/Shoes"));
const Accessories = lazy(() => import("./pages/Accessories"));
const Designers = lazy(() => import("./pages/Designers"));
const Clearance = lazy(() => import("./pages/Clearance"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentCanceled = lazy(() => import("./pages/PaymentCanceled"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background font-sans antialiased mobile-safe-area">
            <Header />
              <Suspense fallback={<PageSkeleton />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/clothing" element={<Clothing />} />
                  <Route path="/shoes" element={<Shoes />} />
                  <Route path="/accessories" element={<Accessories />} />
                  <Route path="/designers" element={<Designers />} />
                  <Route path="/clearance" element={<Clearance />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/payment-success" element={<PaymentSuccess />} />
                  <Route path="/payment-canceled" element={<PaymentCanceled />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            <CookieConsent />
          </div>
        </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
