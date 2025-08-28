import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Clothing from "./pages/Clothing";
import Shoes from "./pages/Shoes";
import Accessories from "./pages/Accessories";
import Designers from "./pages/Designers";
import Clearance from "./pages/Clearance";
import ProductDetail from "./pages/ProductDetail";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCanceled from "./pages/PaymentCanceled";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
            <CookieConsent />
          </div>
        </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
