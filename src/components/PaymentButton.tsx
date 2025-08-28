import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CreditCard, User, KeyRound, Calendar, Mail, Settings } from "lucide-react";

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
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const { toast } = useToast();

  const handlePaymentForm = () => {
    if (!showOtp) {
      // Start verification process
      setIsVerifying(true);
      
      // Simulate verification delay
      setTimeout(() => {
        setIsVerifying(false);
        setShowOtp(true);
      }, 2000);
    } else {
      // Process final payment
      handlePayment();
    }
  };

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

      console.log("Calling create-payment with:", { amount, productName, currency });
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { amount, productName, currency }
      });

      console.log("Payment response:", { data, error });
      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in new tab
        window.open(data.url, '_blank');
        toast({
          title: "Payment verified",
          description: "Opening Stripe checkout in a new tab...",
        });
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: error.message || "Edge Function returned a non-2xx status code",
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

  if (showPaymentForm) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="cardNumber" className="text-sm font-medium mb-2 block">
                Card number
              </Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cardholderName" className="text-sm font-medium mb-2 block">
                Cardholder name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="cardholderName"
                  placeholder="John Doe"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cvv" className="text-sm font-medium mb-2 block">
                  CVV
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="pl-10"
                    maxLength={4}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="expiryDate" className="text-sm font-medium mb-2 block">
                  Expiry date (MM/YY)
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="pl-10"
                    maxLength={5}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {isVerifying && (
              <div className="text-center py-8">
                <Settings className="w-8 h-8 text-primary mx-auto animate-spin mb-4" />
                <p className="text-sm text-muted-foreground">Verifying payment details...</p>
              </div>
            )}

            {showOtp && (
              <div>
                <Label htmlFor="otp" className="text-sm font-medium mb-2 block">
                  Enter OTP code
                </Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  Enter the 6-digit code sent to your mobile device
                </p>
              </div>
            )}

            <Button
              size="lg"
              className="w-full mt-6"
              onClick={handlePaymentForm}
              disabled={
                isVerifying || 
                loading ||
                !cardNumber || 
                !cardholderName || 
                !cvv || 
                !expiryDate || 
                !email || 
                (showOtp && !otp)
              }
            >
              {loading ? "Processing..." : isVerifying ? "Verifying..." : showOtp ? `Confirm Payment - ${formatPrice(amount)}` : "Add payment method"}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => setShowPaymentForm(false)}
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Button 
      onClick={() => setShowPaymentForm(true)} 
      className={className}
      size="lg"
    >
      Buy Now - {formatPrice(amount)}
    </Button>
  );
}