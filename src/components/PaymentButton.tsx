import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface PaymentButtonProps {
  amount: number;
  productName: string;
  currency?: string;
  className?: string;
}

export default function PaymentButton({ 
  amount, 
  productName, 
  currency = "usd",
  className 
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Get current session (will be null for guest users)
      const { data: { session } } = await supabase.auth.getSession();
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // Add authorization header if user is logged in
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { amount, productName, currency },
        headers
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in new tab
        window.open(data.url, '_blank');
        toast({
          title: "Redirecting to payment",
          description: "Opening Stripe checkout in a new tab...",
        });
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: error.message || "Failed to start payment process",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  return (
    <Button 
      onClick={handlePayment} 
      disabled={loading}
      className={className}
      size="lg"
    >
      {loading ? "Processing..." : `Buy Now - ${formatPrice(amount)}`}
    </Button>
  );
}